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

**El script entero vive en `docs/apps-script.js`.** Ese archivo es la fuente de
verdad: lo que esté publicado en Google tiene que ser exactamente eso, completo.

1. Abre `docs/apps-script.js` en GitHub y pulsa el botón de copiar (*Copy raw file*).
2. En la hoja de cálculo: **Extensiones** → **Apps Script**.
3. Borra **todo** lo que haya en el recuadro de código y pega lo que has copiado.
4. Cambia la primera línea útil: donde pone `'CAMBIA-ESTO-POR-TU-CLAVE'`, escribe
   la contraseña del panel (una palabra que solo sepas tú). Si ya tenías una
   puesta y el panel te funcionaba, vuelve a poner **la misma**.
5. Pulsa el **disquete** (Guardar proyecto).

> ⚠️ **Pega el archivo entero, siempre.** En septiembre de 2026 se pegaron
> versiones a medias que solo traían `doGet`. Al desaparecer `doPost`, la web
> dejó de guardar las solicitudes en la hoja durante días — y como el correo
> seguía llegando, no se notó. El panel tampoco podía marcar ni archivar nada.

### Comprobarlo antes de publicar

En el editor de Apps Script, arriba hay un desplegable con el nombre de la
función. Elige **`comprobar`** y pulsa **Ejecutar**. En el registro de abajo
tiene que salir *"Script completo. Solicitudes en la hoja: N"*.

Si sale *"Falta doGet"* o *"Falta doPost"*, el pegado se quedó a medias: vuelve
al paso 3. Si falla aquí, no sigas: publicarlo no lo va a arreglar.

---

## Paso 3 — Publicarlo

**La primera vez:**

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
   `https://script.google.com/macros/s/...` y acaba en `/exec`. Pásamela.

**Las siguientes veces, cuando cambies el script:**

**Implementar** → **Gestionar implementaciones** → el **lápiz** → *Versión:*
**Nueva versión** → **Implementar**.

> Hazlo siempre así. Si creas una *implementación nueva* en vez de una *versión
> nueva*, la dirección cambia y hay que tocar el código de la web en dos sitios
> (`panel/index.html` y `js/itaca-formularios.js`). Con "versión nueva" la
> dirección no cambia y no hay que tocar nada.

---

## Paso 4 — El panel de solicitudes

Cipri pidió (14 de agosto de 2026) una forma de trabajar sin tener que abrir la
hoja de cálculo: un panel con tarjetas, un botón directo de WhatsApp y un botón
para marcar qué toca hacer con cada solicitud. Vive en `panel/index.html`, no
sale en ningún menú de la web ni en buscadores.

Entra en `www.itacajiujitsu.com/panel/`, la primera vez te pedirá la clave que
pusiste en el paso 2 (se queda guardada en el navegador, no hay que escribirla
cada vez), y ya tienes las tarjetas.

### Cómo habla el panel con el script (para quien lo toque en el futuro)

El panel pregunta **siempre por GET, con `fetch`** — también para guardar los
cambios, no solo para leerlos. Es a propósito: Google responde a las GET del
script con la cabecera `Access-Control-Allow-Origin: *`, así que el navegador
las deja pasar desde `www.itacajiujitsu.com` sin ningún rodeo.

⚠️ **No volver a JSONP** (cargar la respuesta con una etiqueta `<script>`).
Google sirve la respuesta con `X-Content-Type-Options: nosniff`, y en cuanto el
tipo de contenido no es exactamente JavaScript, el navegador se niega a
ejecutarla y lo único que se ve es *"no se ha podido conectar"*, sin ninguna
pista de por qué. Eso costó media docena de despliegues en septiembre de 2026.

⚠️ **Las respuestas se construyen con `JSON.stringify`, nunca a mano.** Un texto
como `{ ok: false }`, sin comillas en las claves, no es JSON válido y el panel
no puede leerlo aunque parezca correcto a simple vista.

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
| **Notas** | Lo que te haga falta recordar — desde el 19 de agosto de 2026 se escribe sola desde el cuadro de notas de cada tarjeta del panel, sin que tengas que abrir la hoja |

Verás también una columna **Archivada** al final (la crea el script solo, como
"Acción panel"): dice `Sí` cuando archivas una solicitud desde el panel — no
se borra nada, solo se aparta de las pestañas Pendientes/Gestionadas.

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
- **La clave del panel es distinta y no es pública.** `CLAVE_PANEL` vive solo
  dentro de tu script (en tu cuenta de Google), nunca en el código de la web
  — es lo único que protege que un desconocido pueda leer los nombres,
  teléfonos y mensajes de quien ha escrito. No se la digas a nadie ni la
  pegues en ningún sitio público. Si alguna vez crees que se ha filtrado,
  cámbiala en el script y publica una versión nueva: la antigua deja de
  funcionar al momento.
- **El correo es la fuente fiable.** Si alguna vez no cuadra, manda lo que llegó
  al correo.
- **Datos de menores.** El formulario de clase de prueba recoge la categoría de
  edad del niño (4-6 o 7-10). Al ir a la hoja, esos datos quedan en tu Drive:
  no compartas esa hoja con nadie que no tenga que verla, y no la publiques.
  Está recogido en la política de privacidad de la web.
- **Si algún día cambias el script**, hay que volver a *Implementar → Gestionar
  implementaciones* y crear una **versión nueva**, o los cambios no se aplican.
