# Hoja de cálculo con las solicitudes

Cada vez que alguien rellene un formulario de la web, se apuntará solo en una hoja
de Google: fecha, nombre, teléfono, qué pide. Tú añades al lado si ya lo has
contactado, si vino y si se apuntó.

**El correo sigue llegando igual.** La hoja es un extra para el seguimiento, no
sustituye a nada. Si la hoja falla algún día, los mensajes te siguen llegando.

Son unos 5 minutos y hay que hacerlo desde tu cuenta de Google.

---

## Paso 1 — Crear la hoja ✅ YA HECHO

La hoja ya está creada en tu Drive, dentro de la carpeta *Material Pagina Web*:

**<https://docs.google.com/spreadsheets/d/173ENlzBSRImQHj_yV2rPmarzNdhdUzoXkN_uGjNzuik/edit>**

Ábrela con ese enlace y sigue en el paso 2.

> Los pasos 2 y 3 los tienes que hacer tú por narices: publicar un script es dar
> un permiso sobre tu cuenta de Google, y eso solo lo puede autorizar su dueño
> desde su navegador.

---

## Paso 2 — Pegar el script

1. En el menú de arriba: **Extensiones** → **Apps Script**.
2. Se abre una pestaña nueva con un recuadro de código que pone
   `function myFunction() {}`. **Bórralo todo.**
3. Pega **exactamente** esto en su lugar:

```javascript
function doPost(e) {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // La primera vez escribe la fila de títulos.
  if (hoja.getLastRow() === 0) {
    hoja.appendRow([
      'Fecha', 'Tipo', 'Nombre', 'Email', 'Teléfono', 'Contestar por',
      'Categoría', 'Día', 'Clase', 'Mensaje',
      'Contactado', 'Vino', 'Se apuntó', 'Notas', 'Acepta ofertas'
    ]);
    hoja.getRange(1, 1, 1, 15).setFontWeight('bold');
    hoja.setFrozenRows(1);
  }

  var d = {};
  try {
    d = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput('mal');
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
```

4. Pulsa el icono del **disquete** (Guardar proyecto).

> **Si ya tenías el script funcionando de antes** (esto se añadió el 14 de
> agosto de 2026, después del primer despliegue): pega este código encima del
> que ya tenías, guarda, y sigue el **Paso 3** de nuevo pero eligiendo
> **"Editar" → Versión: Nueva versión** en vez de crear una implementación
> distinta — así la URL no cambia y no hace falta tocar el código de la web.
> Como el encabezado de la fila 1 ya se escribió una vez, no se vuelve a
> generar solo: añade a mano **"Acepta ofertas"** en la celda **O1** de la
> hoja.

---

## Paso 3 — Publicarlo

1. Arriba a la derecha: botón azul **Implementar** → **Nueva implementación**.
2. Pulsa el engranaje de la izquierda (*Seleccionar tipo*) → **Aplicación web**.
3. Rellena:
   - **Descripción:** `Solicitudes web`
   - **Ejecutar como:** *Yo (itacajiujitsu@gmail.com)*
   - **Quién tiene acceso:** **Cualquier usuario** ← importante, si no la web no
     puede escribir en la hoja
4. Pulsa **Implementar**.
5. Google te pedirá permiso: **Autorizar acceso** → elige tu cuenta.
6. Saldrá un aviso de *"Google no ha verificado esta aplicación"*. Es normal,
   la aplicación es tuya. Pulsa **Configuración avanzada** → **Ir a Solicitudes
   web (no seguro)** → **Permitir**.
7. Al final te da una **URL de la aplicación web**, larga, que empieza por
   `https://script.google.com/macros/s/...` y acaba en `/exec`.

**Cópiala y pásamela.** Yo la pongo en la web y a partir de ahí se apunta solo.

---

## Cómo lo usas después

La hoja tendrá una fila por solicitud. Mira siempre la columna **Contestar por**:
es la vía que ha pedido esa persona (WhatsApp, llamada o email). Contestar por
donde te han pedido es la diferencia entre que te lean o no.

La columna **Acepta ofertas** dice `Sí` solo si la persona marcó expresamente
la casilla de "quiero recibir información y ofertas" — es una casilla aparte
de la obligatoria, así que la mayoría dirá `No` y es totalmente normal.
**Solo a quien ponga `Sí` se le puede escribir con fines comerciales o de
marketing**; al resto, solo para responder a lo que pidió.

Las cuatro últimas columnas (antes de "Acepta ofertas") son tuyas:

| Columna | Para qué |
|---|---|
| **Contactado** | Pon la fecha en que le escribiste o llamaste |
| **Vino** | `sí` / `no` |
| **Se apuntó** | `sí` / `no` |
| **Notas** | Lo que te haga falta recordar |

Con eso, al final del mes sabes cuántos pidieron prueba, cuántos vinieron y
cuántos se quedaron. Ese número es el que dice si la web funciona.

**Consejo:** instala la app *Hojas de cálculo de Google* en el móvil. Así ves las
solicitudes y las marcas desde el teléfono.

---

## Cosas que conviene saber

- **La dirección del script es pública.** Está en el código de la web, y el código
  de una web estática lo puede leer cualquiera. En la práctica, lo peor que puede
  pasar es que alguien cuele filas de broma en la hoja: se borran y ya está. **No
  da acceso a tu Drive ni a tu correo**, solo permite añadir filas a esa hoja.
- **El correo es la fuente fiable.** Si alguna vez no cuadra, manda lo que llegó
  al correo.
- **Datos de menores.** El formulario de clase de prueba recoge la categoría de
  edad del niño (4-6 o 7-10). Al ir a la hoja, esos datos quedan en tu Drive:
  no compartas esa hoja con nadie que no tenga que verla, y no la publiques.
  Está recogido en la política de privacidad de la web.
- **Si algún día cambias el script**, hay que volver a *Implementar → Gestionar
  implementaciones* y crear una **versión nueva**, o los cambios no se aplican.
