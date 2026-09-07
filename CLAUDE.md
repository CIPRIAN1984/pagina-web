# ITACA JIU JITSU — Memoria del Proyecto (COMPASS V5)

> **Amnesia Cero:** Este archivo es la fuente de verdad persistente para todas las sesiones.
> Se actualiza después de cada decisión técnica. Lee primero DECISIONS.md para reglas inquebrantables.

---

## 🧭 BLOQUE I: FILOSOFÍA Y ESPECTRO DE COLABORACIÓN

### Dinámica de Trabajo: Cipri (No-Code) + Agente (Full Autonomía Técnica)

**Cipri no es desarrollador.** Te habla en lenguaje natural, en castellano, y describe **lo que quiere conseguir**, no cómo hacerlo. El agente traduce eso a decisiones técnicas autónomas.

**Contrato de Colaboración:**

| Yo decido | Cipri decide |
|-----------|-------------|
| **Técnica:** Stack, librerías, patrones, nombres, arquitectura | **Producto:** Textos, flujos de usuario, prioridades, decisiones de negocio |
| **Refactorización:** Limpieza deuda técnica, optimización | **Riesgos legales:** Si toca datos o privacidad, me detiene primero |
| **Deploy:** Timing y estrategia de publicación | **Contenido:** Fotos, vídeos, copy, cambios de marca |

**Qué se espera del agente:**

1. **Decide tú lo técnico** sin pedir permiso (librería, patrón, nombre). Explica en una línea por qué.
2. **Pregunta solo lo que Cipri decide mejor.** Nunca detalles de implementación.
3. **Explica en cristiano.** Nada de jerga sin traducir. Si algo es riesgo, dilo con consecuencias reales, no tecnicismos.
4. **Sé honesto.** Si algo falla, dilo claro y arréglalo. Cipri confía en lo que dices.
5. **Verifica antes de afirmar.** Abre la web en navegador real. Lo que no puedas comprobar, dilo explícitamente.
6. **Trabajo terminado = probado.** Escritorio y móvil (390px).
7. **Pasos manuales, masticados.** Dónde entrar, qué pegar, qué ve. Nunca "sube los archivos".

---

## 0. CÓMO TRABAJAR CON CIPRI (lo más importante)

**Cipri no es desarrollador.** Te habla en lenguaje natural, en castellano, y describe **lo que quiere conseguir**, no cómo hacerlo. Tú traduces eso a decisiones técnicas.

**Qué se espera de ti:**

1. **Decide tú lo técnico.** No le preguntes qué librería, qué patrón, qué nombre de tabla o si prefiere CSV o JSON. Elige lo mejor y explica en una línea por qué.
2. **Pregunta solo lo que él puede decidir mejor que tú**: qué debe hacer el producto, qué texto ve el usuario, qué prioridad tiene algo, si asume un riesgo. Nunca detalles de implementación.
3. **Explica en cristiano.** Nada de jerga sin traducir. Si dices una sigla, añade qué es en una frase. Si algo es un riesgo, dilo con consecuencias reales ("alguien que quiera apuntarse rellena el formulario y el mensaje no te llega nunca"), no con vocabulario técnico.
4. **Sé honesto con los fallos.** Si algo no funciona, no lo maquilles. Si te equivocaste, dilo claro y arréglalo. Él confía en lo que le dices y no puede verificarlo por su cuenta.
5. **Verifica antes de afirmar.** No digas "ya funciona" sin haberlo comprobado. Esta web se puede abrir en un navegador de verdad y comprobar (ver §7); hazlo. Lo que no puedas comprobar (que llegue un correo real, el vídeo con el archivo definitivo), **dilo y dile exactamente qué tiene que probar él**.
6. **Trabajo terminado = probado.** Abierto en escritorio y en móvil antes de decir que está hecho.
7. **Los pasos manuales, dáselos masticados.** Dónde entrar, qué pegar, qué debería ver. Nunca "sube los archivos".

**Cómo presentar el trabajo:** qué has hecho, qué tiene que hacer él (si algo), y qué queda pendiente. Sin volcados técnicos salvo que los pida.

---

## 📋 BLOQUE II: PROTOCOLO DE ONBOARDING ÁGIL

**Escala de Vuelo:** Cada sesión elige uno:

### 🚀 FAST-TRACK (Vuelo rápido — proyectos pequeños/iterativos)
1. Leo DECISIONS.md y CLAUDE.md (memoria existente)
2. Ejecuto inmediatamente la tarea pendiente
3. Pregunto solo lo que Cipri decide (negocio, contenido, prioridad)
4. Propongo, no consulto, si es técnico

### 📐 ESTRUCTURADO (Vuelo completo — cambios de arquitectura o decisiones nuevas)
1. Ejecuto **Núcleo de 3 Puntos**:
   - **Arnés:** ¿Qué accesos externos tengo? (GitHub, Google Drive, Vercel, MCP)
   - **Decisiones Críticas:** ¿Hay reglas nuevas? (Ver DECISIONS.md)
   - **Siguiente Nodo:** ¿Cuál es el primer hito concreto que Cipri quiere ver hoy?
2. Diseño el plan de trabajo
3. Solicito confirmación antes de cambios grandes

---

## 🛠️ BLOQUE III: INGENIERÍA DE ARNÉS (HARNESS DISPONIBLE)

**Herramientas para esta sesión:**

| Herramienta | Acceso | Uso |
|---|---|---|
| **GitHub** | ciprian1984/pagina-web (push) | Git, commits, ramas, PRs |
| **Google Drive** | Carpeta ITACA JIU JITSU (lectura) | Descargar fotos, vídeos, documentos |
| **Vercel** | pagina-web (deploy automático) | Preview en push, producción en main |
| **Web3Forms** | Clave pendiente (itacajiujitsu@gmail.com) | Formularios web a email |
| **MCP servers** | Gmail, Notion, Slack (si se necesita) | Notificaciones, docs, coordinar |
| **Bash/Python** | Terminal local | Procesar archivos, convert media, git |
| **Local browser** | Chromium en /opt/pw-browsers | Probar web antes de publicar |

**Protocolo de Fallo de Arnés:** Si algo no funciona (Google Drive lento, Vercel caído):
1. Reintentar máx 3 veces (no bucles infinitos)
2. Reportar error exacto a Cipri
3. Proponer alternativa viable (mocks locales, delay, plan B)
4. Continuar con lo que sí funciona

---

## 🔄 BLOQUE IV: INGENIERÍA DE BUCLES (LOOP ENGINEERING)

**Validación Basada en Evidencias — Cero Fe:**

1. **Detención por Evidencia:** Nada se da por hecho. El trabajo está listo cuando:
   - ✅ El código compila/renderiza sin errores
   - ✅ Se probó en navegador real (escritorio + móvil 390px)
   - ✅ No hay contenido invisible (`:hover` en móvil)
   - ✅ Consola del navegador limpia
   - ✅ Los dos formularios funcionen hasta enviar

2. **Límite de Iteraciones:** Si algo falla 3 veces seguidas, pararé, reportaré exactamente dónde está bloqueado y propondré ruta alternativa.

3. **Test Adversarial Interno:** Si escribo una prueba, intento romper el código a propósito para verificar que la prueba salta.

---

## 📐 BLOQUE V: INGENIERÍA DE GRAFOS (GRAPH ENGINEERING)

**Test de la Arista Falsa:** Si trabajo necesita múltiples pasos, paralelizo todo lo que no dependa de otra cosa.

| Dependencia | Paralelo |
|---|---|
| Descargar fotos + convertir a WebP | ✅ Sí (ambas en paralelo después de descargar) |
| Convertir imagen + subirla a repo | ❌ No (convertir antes) |
| Escribir código + probar en navegador | ❌ No (código primero) |
| Actualizar DECISIONS.md + CLAUDE.md | ✅ Sí (archivos independientes) |

**Patrón de Diamante (Fan-Out → Checker → Fan-In):**
```
Tarea iniciadora
    ↓
[Trabajo 1] [Trabajo 2] [Trabajo 3]  ← Paralelo
    ↓         ↓         ↓
  Checker Node (validar sin errores)
    ↓
Síntesis Final (commit, push)
```

---

## 🚨 BLOQUE VI: GOBERNANZA, CONTROL Y MEMORIA

### 1. Matriz de Autoridad (Decision Authority)

| Tipo de decisión | Autoridad | Proceso |
|---|---|---|
| **Cambios de producto** (UI, copy, flujos) | **User only (Cipri)** | Solicitud clara en chat + confirmación |
| **Arquitectura o refactor grande** | **Shared (Propuesta + OK)** | Agente propone formal, Cipri aprueba |
| **Refactor de código / optimización** | **Agent** | Modificación autónoma + log de git |
| **Deuda técnica** | **Shared** | Auditoría periódica, propuesta de arreglo |
| **Formularios / datos personales** | **Agent → Skill** | Invoca `seguridad-datos`, sigue checklist |
| **Media (fotos, vídeos)** | **User** | Cipri decide qué usar, agente optimiza |

### 2. Palabras de Parada (Emergency Protocol)

El agente reacciona **inmediatamente**:

- **"HOLD"** → Congela cualquier ejecución, guarda estado, espera nuevas instrucciones
- **"REVERT"** → Descarta cambios no commiteados, vuelve a último commit estable
- **"AUDIT"** → Auditoría inmediata de consistencia (código vs DECISIONS.md vs CLAUDE.md)

### 3. Dashboard de Salud del Proyecto

Al iniciar cada sesión, este es el estado:

```
ITACA JIU JITSU — Estado de Salud (actualizado 2026-09-07, portadas con sonido)
═════════════════════════════════════════════════════════════
✅ Código funciona:  index.html + movil.html + js/ + legal/, sin errores
✅ Horario:          una sola fuente (js/itaca-horario.js), ya no duplicado
✅ Formularios:      Web3Forms activo (clave puesta), casilla de consentimiento en los dos
✅ Portada:          vídeo real en las dos versiones, cada una con el suyo y con botón de
                     sonido propio; se pausa al salir de pantalla; el poster de cada una es
                     el primer fotograma de su vídeo, así que no hay salto al cargar
✅ Fotos:            12 en el carrusel del gimnasio, 3 instructores con fotos de estudio nuevas
⚠️  Deuda técnica:   ver DECISIONS.md — DT-1, DT-2 y DT-4 resueltas, queda DT-3 (y DT-5, DT-6 nuevas)
📊 Pruebas:         No hay suite automática (manual en navegador + Playwright puntual)
🔴 Bloqueadores:    ninguno crítico — ver DT-5 (revisión legal de terminos.html) como pendiente importante
📦 Deploy:          main en producción (www.itacajiujitsu.com), último PR fusionado el #18 con squash. claude/new-session-oa3wjo se reparte de main tras cada fusión
```

### 4. Memoria de Sesión vs Persistente

| Tipo | Dónde | Duración | Qué contiene |
|---|---|---|---|
| **Persistente** | CLAUDE.md, DECISIONS.md, .claude/skills/ | Permanente | Reglas, decisiones, procesos, conocimiento |
| **Sesión** | Conversación chat, logs terminal | Una sesión | Contexto vivo, debugs, experimentos |

Al finalizar sesión o saturar contexto: actualizar archivos persistentes.

### 5. Memoria de Archivo: DECISIONS.md

**Autoridad:** Cipri (decisiones de negocio) + Agente (arquitectura técnica).

- **D1-D5:** Decisiones inquebrantables (no cambian sin aprobación)
- **A1-A3:** Decisiones arquitectónicas (propuesta + OK)
- **B1-B3:** Decisiones de negocio (Cipri solo)
- **DT-1 a DT-4:** Deuda técnica registrada (auditar periódicamente)

---

## 1. Qué es ITACA JIU JITSU

La web de un gimnasio de Brazilian Jiu Jitsu en Logroño (La Rioja). Una sola página con toda la información: filosofía, instalaciones, instructores, horarios, ubicación y dos formularios para contactar o pedir una clase de prueba.

**Propósito real:** conseguir que alguien que busca "jiu jitsu Logroño" o llega desde Instagram acabe **pisando el gimnasio**. Todo lo demás (el diseño, el poema, los vídeos) está al servicio de eso. Si un visitante no encuentra el horario o no consigue mandar el formulario, la web ha fallado por mucho que se vea bien.

**Tesis del producto:** no es una web de gimnasio de barrio con precios y una tabla. Es una web **editorial**: fotografía grande, tipografía de cartel, el poema de Kavafis escribiéndose solo. Vende un ambiente y un nivel, no una tarifa. El nombre "Ítaca" es el viaje, no el destino — eso es literalmente el argumento de venta.

**Decisiones de producto ya tomadas — no volver a proponerlas:**
- ❌ **Precios en la web** — no aparecen por ninguna parte. La conversación de precio se tiene en persona o por correo.
- ❌ **Framework o generador de sitios** (React, Next, Astro, WordPress) — es un único `index.html` sin dependencias ni compilación. Se abre con doble clic y funciona. No se cambia sin un motivo de peso.
- ❌ **Cookies, analítica y píxeles de seguimiento** — la web no lleva ninguno. Eso es lo que le ahorra el cartelito de consentimiento de cookies.
- ❌ **Formularios por `mailto:`** — descartado en julio de 2026. Abría el programa de correo del visitante, que en un móvil o con Gmail en el navegador no envía nada: los mensajes se perdían sin que nadie se enterara. Ahora se envían por Web3Forms.

> Esta lista es de las partes más valiosas de este archivo. Cada vez que se descarte
> algo, se apunta aquí para no perder tiempo reproponiéndolo dentro de tres meses.

---

## 2. Stack

- **Framework:** ninguno. HTML, CSS y JavaScript a pelo. Ya **no** es un único archivo: `index.html` (escritorio, ~4.700 líneas) y `movil.html` (móvil, app completa con sus propios paneles y formularios) comparten dos módulos JS y las páginas legales — ver §3.
- **UI:** CSS propio con variables en `:root`. Tipografía **Archivo** (títulos y textos de UI, pesos 500-900) y **Montserrat** (cuerpo de texto en escritorio), más **Special Elite** y **Crimson Pro** solo para el poema. Se cargan desde Google Fonts. Paleta sin color: blanco, negro y grises (decisión de Cipri, julio 2026 — no reproponer beige/verde).
- **Auth + BD:** **no hay.** Ni base de datos, ni cuentas, ni servidor propio. Es una web estática.
- **Servicios externos:** Google Fonts (tipografías) · Google Maps (mapa incrustado en un `iframe`) · **Web3Forms** (envío de los dos formularios).
  - ✅ La clave de Web3Forms **ya está puesta**: vive en `js/itaca-formularios.js`, `CONFIG.claveWeb3Forms` (no en `index.html`). Los formularios envían de verdad.
- **Deploy:** Vercel, con vista previa automática en cada push a `claude/new-session-oa3wjo` (PR #1). `main` todavía no existe — ver §9.
- **Pruebas:** no hay suite automática. La comprobación se hace abriendo la web (§7); en esta sesión también se usó Playwright puntualmente para verificar capturas y accesibilidad, sin dejar una suite permanente.
- **Control automático:** no hay GitHub Actions. Los automatismos locales sí están puestos (§8).

**Comandos:** no hay `npm`, ni `build`, ni `lint` (no hay `package.json`: se probó añadir una dependencia de Vercel en algún momento y se retiró por no usarse — no la vuelvas a añadir sin un motivo concreto). Para verla:

```bash
python3 -m http.server 8899   # y abrir http://127.0.0.1:8899/index.html (o /movil.html)
```

---

## 3. Contenido y archivos (estado real)

> Mantén esto al día. Una memoria que describe un sistema que ya no existe
> hace que la IA tome decisiones sobre una realidad falsa. Ya ha pasado una vez
> en este mismo archivo: decía que la clave de Web3Forms estaba vacía cuando
> llevaba semanas puesta. Actualiza esta tabla en el mismo cambio que toque los archivos.

No hay base de datos. Lo que hace las veces de "modelo de datos" son los archivos y los bloques de contenido dentro del HTML.

| Qué | Dónde vive | Notas / trampas |
|---|---|---|
| Web de escritorio | `index.html` | Estilos y JavaScript incluidos. |
| Web de móvil | `movil.html` | App completa aparte, no una versión reducida: sus propios paneles, sus propios formularios. El reparto va en los dos sentidos, en el `<head>` de cada una: `index.html` manda aquí por debajo de 760px y `movil.html` devuelve a escritorio por encima de 900px (ver §6). |
| Horario de clases | `js/itaca-horario.js` | **Única fuente.** Lo leen `index.html` y `movil.html` para pintar la tabla/pestañas y para filtrar las clases del formulario de clase de prueba. Cambia aquí y cambia en los dos sitios a la vez. |
| Envío de formularios | `js/itaca-formularios.js` | Compartido por las dos webs. Aquí vive `CONFIG.claveWeb3Forms`, el teléfono, el email y (si se activa) la URL de la hoja de cálculo de seguimiento — ver `docs/hoja-de-calculo.md`. |
| Textos legales | `legal/privacidad.html`, `legal/terminos.html` | Páginas aparte, no modales — así el texto existe una sola vez para las dos webs. Enlazadas desde la casilla de consentimiento de ambos formularios. |
| Panel de solicitudes | `panel/index.html` | Uso interno de Cipri, no la web pública: tarjetas con quién ha escrito, botón de WhatsApp, notas privadas por solicitud, aviso de las que llevan más de 3 días sin gestionar, y pestañas Pendientes/Gestionadas/Estadísticas/Todas. `noindex` + `Disallow` en `robots.txt`, protegido por una clave (`CLAVE_PANEL`) que solo vive en el script de Google, nunca en el repositorio. Lee y escribe contra el mismo Apps Script que guarda los leads — ver `docs/hoja-de-calculo.md`. Instalable como app (`panel/manifest.json` + `panel/icon-192.png` / `icon-512.png`), sin service worker a propósito. |
| Fotos del gimnasio | `images/Itaca/Gym1.webp` … `Gym12.webp` (12) | Las lee el array `photos` del JS de `index.html` y el array `FOTOS` de `movil.html`. Si añades una foto, hay que añadirla en los dos sitios. En escritorio solo las 8 primeras salen en el carrusel (`CAROUSEL_MAX`); todas salen en "Ver todas las fotos". `Gym8-12.webp` son nuevas (6 de septiembre de 2026, fotos de Drive/chat recortadas a 1200×800; `Gym9`, `Gym10` y `Gym11` llevan cara de una menor con permiso firmado de la familia, confirmado por Cipri, que es el padre). |
| Fotos de instructores | `images/Profesores/Cipri.webp`, `Boris.webp`, `Marta_Pozo.webp` (WebP, no PNG) | Puestas a mano en el HTML de las dos webs. Renovadas el 6 de septiembre de 2026 con fotos de estudio (fondo blanco, logo Itaca en la pared) que mandó Cipri por chat; recortadas de horizontal a 3:4 centrando a cada persona — el archivo de Marta ya no es el horizontal de baja resolución que arrastraba desde el principio. |
| Portada de escritorio | vídeo `videos/Itaca_Hero_Desktop.mp4`, con `images/Itaca/Portada-escritorio.jpg` como respaldo/poster | Vuelve a ser vídeo (6 de septiembre de 2026): el anterior (`Itaca_Hero_Video.mp4`) era una animación de logo casi en negro y se borró; este es metraje real del gimnasio, 1920×800, sacado de Drive. Arranca silenciado (ningún navegador deja sonar un vídeo solo) y tiene un botón de sonido propio (`.video-control`, visible solo en escritorio) para activarlo a propósito. |
| Portada de móvil | vídeo `videos/Itaca_Hero_Mobile.mp4`, con `poster="images/Itaca/Portada-movil.jpg"` | Grabado en vertical (9:16), solo se crea/carga por debajo de 760px. Vídeo nuevo (6 de septiembre de 2026, distinto del de escritorio): el anterior no tenía pista de audio, así que no tenía sentido ponerle botón de sonido; este sí lleva audio real, con el mismo patrón de botón mudo/sonido (`.hero-sound`, propio de `movil.html`) que ya usa la portada de escritorio. Se le recortaron los 0,4 s de negro del principio y del final: si no, parpadeaba en negro en cada vuelta del bucle. |
| Vídeos verticales (reels) | `videos/Boris_instagram.mp4`, `Cipri_instagram.mp4`, `Marta_instagram.mp4`, `Itaca_gi_instagram.mp4` | `preload="none"`: no se descargan hasta que hace falta. En escritorio se reproducen al pasar el ratón. En `movil.html` los monta el JS al abrir el panel "Vídeos" (antes eran pósters fijos sin vídeo). Se reproduce **la fila que se está mirando: los dos a la vez**, en silencio, y tocar una ficha la pone en marcha aunque no sea la que más se ve. Dos y no los cuatro porque entre todos pesan 18 MB. El sonido es de uno solo (el botón sale en el principal) y al cerrar el panel se paran todos. ⚠️ La rejilla es de **dos columnas**: una regla del tipo "reproduce el que más se ve" hace que los dos de una fila empaten y gane siempre el primero del código, o sea el de la izquierda, y los de la derecha no se reproducen nunca. Pasó de verdad. |

⚠️ **Los dos `poster` de portada son el primer fotograma exacto de su propio vídeo** (`Portada-escritorio.jpg` y `Portada-movil.jpg`). No los cambies por "una foto bonita" cualquiera: mientras el vídeo carga se ve el poster, y si no coincide con el primer fotograma se ve un salto feo el primer instante — que es justo el fallo que reportó Cipri el 7 de septiembre de 2026. Si cambias un vídeo de portada, regenera su poster: `ffmpeg -i <video> -frames:v 1 <poster>.jpg`.

⚠️ **`docs/PENDIENTE-archivos.md`, `docs/material-fotografo.md` y `DECISIONS.md` pueden tener nombres de archivo antiguos** (mencionan `Boris2_instagram.mp4`, fotos en `.png`). Esta tabla es la que manda; si hay contradicción, créela a ella y corrige el resto.

**Secciones de `index.html`, en orden:** portada (`#home`) · filosofía y poema (`#about`) · carrusel de fotos (`#academy`) · vídeos verticales (`#reels`) · instructores (`#instructors`) · horarios y leyenda (`#schedule`) · tu primer día (`#firstday`) · niños (`#kids`) · ubicación (`#location`) · llamada final (`#join`) · pie (`#contact`). Todo el contenido entre la cabecera y el pie va dentro de un `<main>`.

**Paneles de `movil.html`, en orden:** horarios · tu primer día · el gimnasio (fotos) · en movimiento (vídeos) · instructores · niños · filosofía · dónde estamos · clase de prueba · contacto. Se abren como paneles a pantalla completa (`position: fixed`), no como scroll normal — si capturas la página con una herramienta que fuerza `full page`, el contenido de un panel abierto puede no salir completo en la captura sin ser un fallo real: comprueba con la página en su tamaño normal.

⚠️ **Los textos de `#firstday`, `#kids` y la leyenda del horario los redactó la IA a partir de lo que es habitual en un gimnasio de BJJ, no de datos que diera Cipri.** Están pendientes de que él los confirme o los corrija: qué clases admiten a alguien sin experiencia, si hay kimonos de préstamo, si los padres pueden ver la clase. Hasta entonces, tratarlos como borrador.

**Modales de `index.html`:** contacto (`#contactModal`) · clase de prueba (`#trialModal`) · datos de contacto (`#infoContactModal`). Tienen trampa de foco (Tab no se escapa hacia la página de detrás) y se cierran con `Escape`, la X o clicando fuera.

---

## 4. Datos personales que recoge la web

> No hay cuentas ni permisos que gestionar, pero **sí se recogen datos personales**,
> y eso tiene reglas propias. Confundir "no tengo base de datos" con "no tengo
> responsabilidad sobre datos" es el fallo clásico aquí.

| Formulario | Qué pide | A dónde va |
|---|---|---|
| Contacto (`#contactForm`) | Nombre, email, teléfono, mensaje, consentimiento | Web3Forms → itacajiujitsu@gmail.com |
| Clase de prueba (`#trialForm`) | Nombre, email, teléfono, categoría (adulto/niño), **edad del niño**, fecha, clase, consentimiento | Web3Forms → itacajiujitsu@gmail.com |

Los dos tienen **casilla de consentimiento obligatoria** con enlace a la política de privacidad, y el de clase de prueba avisa de que lo rellena el padre, madre o tutor.

**Reglas que no se tocan:**
- **El formulario de clase de prueba recoge datos de menores** (4-6 y 7-10 años). Eso exige consentimiento del padre, madre o tutor. No se toca ese formulario sin pasar por la skill `seguridad-datos`.
- **Ningún formulario nuevo sin casilla de consentimiento y enlace a la política de privacidad.**
- **Si se quita o se relaja el consentimiento, es un retroceso legal.** No se hace.
- **Nada de analítica, cookies ni píxeles** sin avisar antes: en cuanto entra uno, hace falta el aviso de cookies.
- ✅ **Razón social y NIF ya puestos** en la política de privacidad (`ITACA JIU JITSU · NIF G26554923`, aportado por Cipri el 4 de agosto de 2026). Los datos personales del propio Cipri como representante (DNI, domicilio particular, teléfono) no se han publicado — no hacen falta en una web pública.

---

## 5. Seguridad — reglas NO negociables

1. **No cambiar los formularios ni los textos legales sin avisar primero.** (Hay un automatismo que lo recuerda, ver §8.)
2. **Antes de tocar formularios, datos personales o textos legales, invoca la skill `seguridad-datos`** y sigue su checklist. No es opcional.
3. **No tocar la web publicada sin haberlo visto antes en local.**
4. **Nunca meter claves ni contraseñas en `index.html`.** Es un archivo estático: cualquier visitante puede leerlo entero con dos clics. Si algún día hace falta una clave (envío de correo, reservas), va en un servicio de servidor, nunca en la página.
5. **Los datos de menores son datos sensibles.** Cualquier cosa que los recoja, los muestre o los envíe pasa por la skill de seguridad.
6. **No borrar fotos ni vídeos originales.** Son los archivos del gimnasio; puede que no haya copia.

---

## 6. Rutas y flujos

**Es una sola página.** No hay rutas: la navegación son anclas (`#about`, `#academy`, `#reels`, `#instructors`, `#schedule`) que hacen scroll dentro de la misma página.

**El reparto entre las dos versiones va en los dos sentidos**, en el `<head>` de cada archivo: `index.html` manda a `movil.html` por debajo de 760px, y `movil.html` devuelve a `index.html` por encima de **900px**. Los dos números no se tocan a propósito: entre 761 y 899 no redirige ninguna, y ese hueco muerto evita un ping-pong infinito si el ancho baila unos píxeles justo en la frontera. Vías de escape: `?full=1` para quedarse en escritorio desde el móvil, `?movil=1` para lo contrario; las dos se recuerdan en `sessionStorage` (no cookie, así no hace falta aviso de cookies). Antes solo existía la ida, y quien pedía "modo ordenador" desde el móvil recargaba `movil.html`, se quedaba ahí y seguía viendo el vídeo de móvil.

**Cómo se comporta la cabecera:** transparente sobre la portada; al bajar de 50 píxeles se vuelve blanca, encoge, el logo se va a la izquierda y aparece el menú.

⚠️ **El menú de enlaces va centrado en posición absoluta sobre TODO el ancho de la cabecera, sin tener en cuenta el hueco fijo que ocupa el botón "Hazte Miembro" a la derecha.** Si no hay sitio, el último enlace ("NIÑOS") se mete debajo del botón — pasó de verdad en esta auditoría, en una franja de anchos donde a simple vista parecía haber espacio de sobra (medido con Playwright, no a ojo). Por eso el menú de las tres rayas se mantiene hasta **1600 px** y solo a partir de ahí aparecen los enlaces — con margen de sobra comprobado, no en el punto exacto donde deja de solaparse. **Si añades un enlace, cambias el texto de alguno o cambias la tipografía de la cabecera, vuelve a medir con Playwright en todo el rango 1180-2000 px** (bounding box del último enlace contra el botón), no solo mirando dos o tres capturas — así es como se coló este fallo la primera vez. La maquetación del resto (instructores, vídeos) sigue cambiando en 1024 px y 768 px, que es independiente.

**Los dos caminos que importan:**
1. "HAZTE MIEMBRO" (portada, cabecera, menú móvil y llamada final) → abre el modal de **contacto**.
2. "CLASE DE PRUEBA" (portada y llamada final) → abre el modal de **clase de prueba**, que filtra las clases disponibles según categoría y día de la semana.

**Configuración externa ya hecha** (no rehacer): el mapa de Google ya apunta a la dirección correcta (Polígono Cantabria, C. Barigüelo 4, 26009 Logroño; confirmado por Cipri el 13 de agosto de 2026 — la calle se escribe con diéresis, no "Barriguelo").

**Contacto real del gimnasio:** itacajiujitsu@gmail.com · 664 78 41 21

---

## 7. Pruebas y control automático

No hay pruebas automáticas todavía. **La comprobación se hace abriendo la web de verdad**, y se puede hacer desde aquí:

```bash
python3 -m http.server 8899
# Chromium está instalado en /opt/pw-browsers/chromium-1194/chrome-linux/chrome
```

**Qué hay que mirar siempre antes de decir que algo funciona:**
- **En móvil (390 px de ancho) además de en escritorio.** La mayoría del tráfico de un gimnasio viene de Instagram, es decir, de un teléfono.
- **Que no haya contenido que solo se vea al pasar el ratón.** En un móvil no hay ratón: lo que dependa de `:hover` es invisible para la mitad de los visitantes.
- **Que la rueda del ratón siga bajando la página** en todas las secciones.
- **Los dos formularios**, hasta el final.
- **La consola del navegador sin errores** y ningún archivo que no cargue.

Cuando se escriban pruebas automáticas: **una prueba que nunca falla es peor que no tenerla.** Rompe el código a propósito y comprueba que salta. Ver la skill `calidad`.

---

## 8. Automatismos activos (`.claude/settings.json`)

- **Antes de `git commit`**: si algún día el proyecto tiene `npm run typecheck` / `test` / `lint`, se ejecutan y **el commit se bloquea si fallan**. Hoy no los hay, así que no molesta: se salta solo.
- **Al editar archivos sensibles** (formularios, textos legales, datos personales, `.env`): pide confirmación y recuerda invocar la skill de seguridad.

No dependen de que la IA se acuerde: los ejecuta la herramienta.

---

## 9. Convenciones

- **Un solo archivo, `index.html`.** Mientras siga así, los estilos van en el `<style>` de la cabecera y la lógica en el `<script>` del final. No crear archivos sueltos "por orden" sin hablarlo: rompe la ventaja de que la web se abra con doble clic.
- **Colores y tipografías siempre por las variables de `:root`** (`--accent`, `--text-dark`, `--font-heading`…). Nunca un color a pelo en medio del CSS.
- **Nada de librerías externas.** Ni jQuery, ni Bootstrap, ni carruseles de terceros. Lo que hay está escrito a mano y funciona.
- Textos de UI en castellano. Nombres de clases, variables y funciones en inglés (así está ya).
- Comentarios solo para explicar el **porqué** no evidente.
- **No añadir dependencias sin permiso.**

### Flujo de ramas
Rama de trabajo: `claude/new-session-oa3wjo`. Los PR se fusionan con **squash**.

`main` ya existe y es lo que sirve Vercel en producción (`www.itacajiujitsu.com`). Tras cada fusión **parte siempre de `main` actualizado**:
`git fetch origin main && git checkout -B <rama> origin/main`
Si no, la rama arrastra commits duplicados y provoca conflictos. Ver la skill `flujo-de-trabajo`.

---

## 10. Terminología (UI → código)

| Lo que ve el usuario | Cómo se llama en el código |
|---|---|
| FILOSOFÍA | sección `#about` |
| SOMOS ITACA | sección `#academy` (carrusel de fotos) |
| MOVIMIENTO | sección `#reels` (vídeos verticales) |
| HORARIOS | sección `#schedule` (incluye la leyenda de niveles) |
| TU PRIMER DÍA | sección `#firstday` |
| NIÑOS | sección `#kids` |
| Hazte Miembro | `.modal-trigger` → `#contactModal` |
| Clase de Prueba | `.trial-trigger` → `#trialModal` |
| Gi | con kimono |
| No Gi | sin kimono |
| Open Mat | entrenamiento libre |

---

## 11. Documentación y skills

- `docs/REVISION-2026-07.md` — revisión completa de la web: qué funciona, qué está roto y en qué orden arreglarlo
- `docs/PENDIENTE-archivos.md` — las fotos y vídeos que faltan por subir
- `.claude/skills/seguridad-datos/` — **obligatoria antes de tocar formularios o datos personales**
- `.claude/skills/producto/` — decisiones de producto y textos
- `.claude/skills/calidad/` — QA y filosofía de pruebas
- `.claude/skills/flujo-de-trabajo/` — ramas, PR y publicación
- `.claude/skills/patrones/` — cómo está montado el `index.html` y cómo tocarlo
- `.claude/skills/seguimiento/` — cosas importantes que hay que revisar de vez en cuando (hoy: Search Console) para que no se olviden entre sesiones
- `.claude/commands/` — `/estado`, `/migracion`, `/a-produccion`
