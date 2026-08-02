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
ITACA JIU JITSU — Estado de Salud
═════════════════════════════════════════════════════════════
✅ Código funciona:  index.html (3.4KB LOC, sin errores)
⚠️  Deuda técnica:   4 items (ver DECISIONS.md: DT-1 a DT-4)
📊 Pruebas:         No hay suite automática (manual en navegador)
🔴 Bloqueadores:    Portada.jpg falta, Web3Forms key pendiente
📦 Deploy:          Vercel preview OK, main no existe todavía
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

- **Framework:** ninguno. HTML, CSS y JavaScript a pelo, todo dentro de `index.html` (~2.800 líneas: estilos en un `<style>`, lógica en un `<script>` al final).
- **UI:** CSS propio con variables en `:root`. Tipografías **Bebas Neue** (títulos) y **Montserrat** (texto), más **Special Elite** y **Crimson Pro** solo para el poema. Se cargan desde Google Fonts.
- **Auth + BD:** **no hay.** Ni base de datos, ni cuentas, ni servidor propio. Es una web estática.
- **Servicios externos:** Google Fonts (tipografías) · Google Maps (mapa incrustado en un `iframe`) · **Web3Forms** (envío de los dos formularios).
  - ⚠️ La constante `WEB3FORMS_ACCESS_KEY`, al principio del `<script>`, **está vacía**. Mientras lo esté, los formularios se caen al comportamiento antiguo (abrir el programa de correo). En cuanto Cipri pegue su clave, se envían de verdad. No es una contraseña: es un identificador público que solo sirve para entregar el mensaje en itacajiujitsu@gmail.com.
- **Deploy:** **pendiente de decidir.** Todavía no está publicada en ningún sitio.
- **Pruebas:** no hay pruebas automáticas todavía. La comprobación se hace abriendo la web (§7).
- **Control automático:** no hay GitHub Actions. Los automatismos locales sí están puestos (§8).

**Comandos:** no hay `npm`, ni `build`, ni `lint`. Para verla:

```bash
python3 -m http.server 8899   # y abrir http://127.0.0.1:8899/index.html
```

---

## 3. Contenido y archivos (estado real)

> Mantén esto al día. Una memoria que describe un sistema que ya no existe
> hace que la IA tome decisiones sobre una realidad falsa. Ya ha pasado.

No hay base de datos. Lo que hace las veces de "modelo de datos" son los archivos y los bloques de contenido dentro del HTML.

| Qué | Dónde vive | Notas / trampas |
|---|---|---|
| Toda la web | `index.html` | Estilos y JavaScript incluidos. Un solo archivo. |
| Fotos del gimnasio | `images/Itaca/Gym1.webp` … `Gym10.webp` | Las lee el array `photos` del JS (línea ~2582). Si añades una foto, hay que añadirla **también** ahí o no sale. |
| Fotos de instructores | `images/Profesores/Cipri.png`, `Boris.png`, `Marta_Pozo.png` | Puestas a mano en el HTML. |
| Vídeo de portada | `videos/Itaca_Hero_Video.mp4` | Lleva `muted` (obligatorio para que arranque solo) y `poster="images/Itaca/Portada.jpg"`. |
| Imagen de respaldo de portada | `images/Itaca/Portada.jpg` | Lo que se ve mientras carga el vídeo. **Todavía no existe.** |
| Vídeos verticales | `videos/Boris_instagram.mp4`, `Cipri_instagram.mp4`, `Marta_instagram.mp4`, `Boris2_instagram.mp4` | Solo se reproducen al pasar el ratón por encima. |
| **Horarios** | **duplicados en dos sitios** | La tabla visible (HTML, ~línea 1820) **y** el objeto `classesForAdult` / `classesForNino46` / `classesForNino710` del JS (~línea 2324). ⚠️ Si cambias un horario en un sitio y no en el otro, el formulario de clase de prueba ofrece clases que ya no existen. |
| Textos legales | dentro de `index.html`, modales `#termsModal` y `#privacyModal` | |

⚠️ **Los archivos de `images/` y `videos/` no están en el repositorio todavía.** Están en el ordenador de Cipri. Ver `docs/PENDIENTE-archivos.md`.

**Secciones de la página, en orden:** portada (`#home`) · filosofía y poema (`#about`) · carrusel de fotos (`#academy`) · vídeos verticales (`#reels`) · instructores (`#instructors`) · horarios y leyenda (`#schedule`) · tu primer día (`#firstday`) · niños (`#kids`) · ubicación (`#location`) · llamada final (`#join`) · pie (`#contact`).

⚠️ **Los textos de `#firstday`, `#kids` y la leyenda del horario los redactó la IA a partir de lo que es habitual en un gimnasio de BJJ, no de datos que diera Cipri.** Están pendientes de que él los confirme o los corrija: qué clases admiten a alguien sin experiencia, si hay kimonos de préstamo, si los padres pueden ver la clase. Hasta entonces, tratarlos como borrador.

**Modales:** contacto (`#contactModal`) · clase de prueba (`#trialModal`) · datos de contacto (`#infoContactModal`) · términos (`#termsModal`) · privacidad (`#privacyModal`).

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
- ⏳ **Pendiente:** falta la razón social completa y el NIF en la política de privacidad. Hay un comentario en el HTML marcándolo.

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

**Cómo se comporta la cabecera:** transparente sobre la portada; al bajar de 50 píxeles se vuelve blanca, encoge, el logo se va a la izquierda y aparece el menú.

⚠️ **El menú de enlaces va centrado en posición absoluta, así que no empuja al logo ni al botón: si no cabe, se les monta encima.** Por eso encoge en dos escalones (1550 px y 1330 px) y por debajo de **1180 px** desaparece y manda el menú de las tres rayas. Si añades un enlace más, hay que volver a comprobar todos los anchos. La maquetación del resto (instructores, vídeos) sigue cambiando en 1024 px y 768 px, que es independiente.

**Los dos caminos que importan:**
1. "HAZTE MIEMBRO" (portada, cabecera, menú móvil y llamada final) → abre el modal de **contacto**.
2. "CLASE DE PRUEBA" (portada y llamada final) → abre el modal de **clase de prueba**, que filtra las clases disponibles según categoría y día de la semana.

**Configuración externa ya hecha** (no rehacer): el mapa de Google ya apunta a la dirección correcta (Polígono Cantabria, C. Barriguelo 4, 26009 Logroño).

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

⚠️ **El repositorio todavía no tiene rama `main`.** Se creó vacío y la rama de trabajo es la única que existe. En cuanto haya `main`, tras cada fusión **parte siempre de `main` actualizado**:
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
- `.claude/commands/` — `/estado`, `/migracion`, `/a-produccion`
