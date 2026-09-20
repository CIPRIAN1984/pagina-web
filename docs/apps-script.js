/* ══════════════════════════════════════════════════════════════════════════
   SCRIPT DE GOOGLE — ITACA JIU JITSU
   Hoja de solicitudes + panel de seguimiento.

   ESTE ARCHIVO ES LA FUENTE DE VERDAD DEL SCRIPT.
   Lo que está publicado en Google tiene que ser EXACTAMENTE esto, entero,
   sin quitar ninguna función. Para actualizarlo: Extensiones → Apps Script,
   borrar todo lo que haya, pegar este archivo completo, guardar, y después
   Implementar → Gestionar implementaciones → lápiz → Versión: Nueva versión.

   ⚠️ Lo que se rompió en septiembre de 2026 y no debe repetirse:
   se pegaron versiones parciales que solo traían doGet. Al desaparecer
   doPost, la web dejó de guardar las solicitudes en la hoja (el correo
   seguía llegando, así que no se notó) y el panel dejó de poder marcar,
   archivar y anotar. Si vas a tocar el script, pega el archivo ENTERO.

   ⚠️ Las respuestas se construyen con JSON.stringify, nunca a mano.
   Un texto tipo { ok: false } sin comillas en las claves no es JSON válido
   y el panel no puede leerlo.
   ════════════════════════════════════════════════════════════════════════ */

/* La contraseña del panel. Cámbiala por una tuya antes de guardar.
   Vive solo aquí, dentro de tu cuenta de Google: nunca en la web. */
var CLAVE_PANEL = 'CAMBIA-ESTO-POR-TU-CLAVE';

var CABECERA = [
  'Fecha', 'Tipo', 'Nombre', 'Email', 'Teléfono', 'Contestar por',
  'Categoría', 'Día', 'Clase', 'Mensaje',
  'Contactado', 'Vino', 'Se apuntó', 'Notas', 'Acepta ofertas'
];

function hojaLeads() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
}

/* Respuesta al panel. Por defecto JSON de verdad; si quien pregunta manda
   ?callback= se envuelve para JSONP, que el panel ya no usa pero no estorba.
   El tipo de contenido importa: con TEXT el navegador se niega a ejecutar
   un JSONP por culpa de la cabecera nosniff que pone Google. */
function salida(obj, callback) {
  var texto = JSON.stringify(obj);
  if (callback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback)) {
    return ContentService
      .createTextOutput(callback + '(' + texto + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(texto)
    .setMimeType(ContentService.MimeType.JSON);
}

/* ── Lo que pide el panel (leer y guardar) ─────────────────────────────── */

/* El panel usa GET para todo, también para guardar. Es a propósito: Google
   responde a las GET con "Access-Control-Allow-Origin: *", así que el
   navegador las deja pasar desde www.itacajiujitsu.com sin rodeos. */
function doGet(e) {
  var p = (e && e.parameter) || {};
  var cb = p.callback || '';

  if (p.clave !== CLAVE_PANEL) {
    return salida({ ok: false, error: 'clave incorrecta' }, cb);
  }
  if (p.accion === 'actualizar') {
    return salida(actualizar(p.fila, p.campo, p.valor), cb);
  }
  return salida({ ok: true, leads: leerLeads() }, cb);
}

/* ── Lo que manda la web al rellenar un formulario ─────────────────────── */

function doPost(e) {
  var d = {};
  try {
    d = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput('mal');
  }

  /* Se mantiene por compatibilidad: el panel antiguo guardaba por POST. */
  if (d.accion === 'actualizar') {
    if (d.clave !== CLAVE_PANEL) {
      return salida({ ok: false, error: 'clave incorrecta' }, '');
    }
    return salida(actualizar(d.fila, d.campo, d.valor), '');
  }

  var hoja = hojaLeads();
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(CABECERA);
    hoja.getRange(1, 1, 1, CABECERA.length).setFontWeight('bold');
    hoja.setFrozenRows(1);
  }

  hoja.appendRow([
    new Date(),
    d.tipo || '',
    d.Nombre || '',
    d.Email || '',
    d['Teléfono'] || '',
    d['Contestar por'] || '',
    d['Categoría'] || '',
    d.Fecha || '',
    d.Clase || '',
    d.Mensaje || '',
    '', '', '', '',
    d['Acepta ofertas'] || 'No'
  ]);

  return ContentService.createTextOutput('ok');
}

/* ── Piezas ────────────────────────────────────────────────────────────── */

function actualizar(fila, campo, valor) {
  var hoja = hojaLeads();
  var n = Number(fila);
  /* La fila 1 es la cabecera: nunca se escribe encima. */
  if (!n || n < 2 || n > hoja.getLastRow()) {
    return { ok: false, error: 'fila fuera de rango' };
  }
  var col = campo === 'nota' ? columnaNotas(hoja)
    : campo === 'archivada' ? columnaArchivada(hoja)
      : columnaAccion(hoja);
  hoja.getRange(n, col).setValue(valor || '');
  return { ok: true };
}

/* Los nombres de estos campos son los que busca el panel en panel/index.html
   (lead.nombre, lead.aceptaOfertas…). Si cambias uno aquí, cámbialo allí:
   el panel no avisa, simplemente pinta el hueco vacío. */
function leerLeads() {
  var hoja = hojaLeads();
  var datos = hoja.getDataRange().getValues();
  if (datos.length < 2) return [];

  var cabecera = datos[0];
  var iNombre = cabecera.indexOf('Nombre');
  var iEmail = cabecera.indexOf('Email');
  var iTelefono = cabecera.indexOf('Teléfono');
  var iContestar = cabecera.indexOf('Contestar por');
  var iTipo = cabecera.indexOf('Tipo');
  var iMensaje = cabecera.indexOf('Mensaje');
  var iCategoria = cabecera.indexOf('Categoría');
  var iDia = cabecera.indexOf('Día');
  var iClase = cabecera.indexOf('Clase');
  var iOfertas = cabecera.indexOf('Acepta ofertas');
  var iFecha = cabecera.indexOf('Fecha');
  var iNotas = cabecera.indexOf('Notas');
  var iAccion = columnaAccion(hoja) - 1;
  var iArchivada = columnaArchivada(hoja) - 1;

  function celda(fila, i) {
    return i !== -1 && fila[i] != null ? String(fila[i]) : '';
  }

  var leads = [];
  for (var f = 1; f < datos.length; f++) {
    var fila = datos[f];
    if (!celda(fila, iNombre) && !celda(fila, iEmail)) continue; // fila en blanco
    var fecha = iFecha !== -1 ? fila[iFecha] : '';
    leads.push({
      fila: f + 1,
      fecha: fecha instanceof Date
        ? Utilities.formatDate(fecha, Session.getScriptTimeZone(), 'dd/MM HH:mm')
        : String(fecha || ''),
      tipo: celda(fila, iTipo),
      nombre: celda(fila, iNombre),
      email: celda(fila, iEmail),
      telefono: celda(fila, iTelefono),
      contestarPor: celda(fila, iContestar),
      categoria: celda(fila, iCategoria),
      dia: celda(fila, iDia),
      clase: celda(fila, iClase),
      mensaje: celda(fila, iMensaje),
      aceptaOfertas: celda(fila, iOfertas),
      accion: celda(fila, iAccion),
      nota: celda(fila, iNotas),
      archivada: celda(fila, iArchivada) === 'Sí'
    });
  }
  leads.reverse(); // los más recientes primero
  return leads;
}

/* Busca la columna "Acción panel"; si no existe todavía, la crea al final.
   Así el panel no se rompe aunque cambie el orden de columnas. */
function columnaAccion(hoja) {
  return columnaPorNombre(hoja, 'Acción panel', true);
}

/* Igual, para marcar una solicitud como archivada (Sí/vacío) sin borrarla. */
function columnaArchivada(hoja) {
  return columnaPorNombre(hoja, 'Archivada', true);
}

/* "Notas" existe desde el primer día para escribir a mano en la hoja; el
   panel lee y escribe ahí mismo, así no hay dos sitios para lo mismo. */
function columnaNotas(hoja) {
  return columnaPorNombre(hoja, 'Notas', true);
}

function columnaPorNombre(hoja, nombre, crearSiFalta) {
  var ultima = hoja.getLastColumn();
  var cabecera = ultima ? hoja.getRange(1, 1, 1, ultima).getValues()[0] : [];
  var i = cabecera.indexOf(nombre);
  if (i !== -1) return i + 1;
  if (!crearSiFalta) return -1;
  var col = ultima + 1;
  hoja.getRange(1, col).setValue(nombre).setFontWeight('bold');
  return col;
}

/* ── Comprobación desde el editor de Apps Script ───────────────────────── */

/* Selecciona "comprobar" arriba y pulsa Ejecutar. En el registro tiene que
   salir que las tres funciones existen y cuántas solicitudes hay. Si falla
   aquí, no hace falta ni publicar: el fallo está en el script. */
function comprobar() {
  if (typeof doGet !== 'function') throw new Error('Falta doGet: has pegado el script a medias.');
  if (typeof doPost !== 'function') throw new Error('Falta doPost: la web no podrá guardar las solicitudes.');

  var leads = leerLeads();
  Logger.log('Script completo. Solicitudes en la hoja: ' + leads.length);
  if (leads.length) {
    Logger.log('La más reciente: ' + JSON.stringify(leads[0]));
  }
  return leads.length;
}
