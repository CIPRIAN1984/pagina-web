# Revisión de la web — julio de 2026

> ## ✅ Estado: los cuatro primeros puntos ya están arreglados
>
> Arreglado y comprobado en navegador (escritorio y móvil) el 29 de julio de 2026:
>
> - **nº 1 Formularios** — ya no usan `mailto:`. Envían por Web3Forms, con confirmación
>   visible y, si algo falla, el correo y el teléfono del gimnasio.
>   ⚠️ **Falta pegar la clave de acceso**: hasta entonces siguen abriendo el programa de correo.
> - **nº 2 Consentimiento y textos legales** — casilla obligatoria en los dos formularios,
>   aviso de tutor legal en el de menores y política de privacidad completa.
>   ⚠️ **Falta la razón social y el NIF** para completar la identificación del responsable.
> - **nº 3 Rueda del ratón** — el zoom se abre con un clic. La rueda vuelve a bajar la página.
> - **nº 4 Vídeo de portada** — `muted` y `poster`. ⚠️ Falta la imagen `images/Itaca/Portada.jpg`.
> - **nº 5 Contenido invisible en móvil** — fichas de instructores, etiquetas del carrusel y
>   botón de sonido de los vídeos ya se ven sin ratón; los vídeos se reproducen al tocarlos.
> - **nº 7 Fechas pasadas** — resuelto de paso, era una línea.
>
> ### Además, tras mirar artofjiujitsu.com (29 de julio)
>
> Añadido lo que allí funciona y aquí faltaba, adaptado a Ítaca:
>
> - **Leyenda del horario** — qué es Gi, No Gi y Open Mat, y a quién va dirigida cada clase.
> - **Sección "Tu primer día"** (`#firstday`) — las seis preguntas que frenan a un principiante.
> - **Sección "Jiu Jitsu para niños"** (`#kids`) — escrita para un padre, no para un practicante.
>
> ⚠️ **Esos textos son un borrador escrito por la IA**, no información que diera Cipri.
> Pendiente de que los confirme o los corrija.
>
> Descartado por decisión suya: plataforma de vídeo de pago, masterclass y tienda.
> Queda pendiente decidir si la clase de prueba es gratuita y decirlo en el botón.
>
> Además aparecieron y se arreglaron dos fallos que esta revisión no había detectado:
>
> - **En el móvil no se podía enviar la clase de prueba**: el formulario era más alto que la
>   pantalla y el botón quedaba fuera, sin posibilidad de desplazarse. Ahora el modal se desplaza.
> - **El fondo del zoom no recibía clics** (`pointer-events: none`), así que no se podía cerrar
>   pulsando fuera. Ahora se cierra con la X, con un clic fuera o con `Escape`.
>
> Lo de abajo se conserva como registro de la revisión original.

Revisión completa de `index.html` (2.800 líneas), abierta en un navegador de verdad
(Chromium) en escritorio (1440 px) y en móvil (390 px).

**Qué se ha podido comprobar de verdad y qué no.** Las fotos y los vídeos no estaban
disponibles, así que se probó con imágenes de relleno del mismo tamaño. Eso permite
comprobar el diseño, el comportamiento y los fallos de lógica, **pero no** cómo se ve
con el material real ni cuánto tarda en cargar. Las tipografías de Google y el mapa
tampoco cargaban en el entorno de pruebas.

Todo lo marcado como **comprobado** se verificó ejecutándolo en el navegador, no leyendo el código.

---

## Lo que está bien

No es cortesía: son cosas que normalmente están mal y aquí están bien.

- **El diseño tiene criterio.** No parece una plantilla. La cabecera que se transforma al
  bajar (logo centrado → a la izquierda, aparece el menú) está bien resuelta y es lo
  primero que ve un visitante.
- **El poema de Kavafis escribiéndose solo** es la mejor idea de la web. Además está bien
  hecho: se pausa cuando no se ve en pantalla, así que no gasta batería de fondo.
- **El carrusel, el zoom, el menú y los modales están escritos a mano**, sin librerías
  externas. Eso significa cero dependencias que se rompan o se queden obsoletas.
- **Detalles que casi nadie cuida y aquí están:** `lang="es"`, textos alternativos en las
  imágenes, `aria-label` en los botones sin texto, `loading="lazy"` en las fotos del
  carrusel, `100svh` en la portada para que encaje bien en el móvil, y `prefers`-friendly
  uso de `scroll-behavior`.
- **El formulario de clase de prueba filtra las clases por día y por categoría.** Es la
  parte más lista de la web: evita que alguien pida una clase de niños un miércoles.

---

## 🔴 Hay que arreglarlo antes de publicar

### 1. Los formularios se van a perder mensajes — **comprobado**

Los dos formularios envían por `mailto:`, es decir, **abren el programa de correo del
visitante**. El de contacto además lo hace de la peor forma posible
(`action="mailto:..." method="post"`), que Chrome bloquea o convierte en un aviso raro.

Qué pasa en la práctica: alguien entra desde Instagram con el móvil, rellena sus datos,
pulsa "Enviar"… y no pasa nada, o se le abre una aplicación de correo que no usa y con la
que no ha iniciado sesión. **Se va y tú nunca te enteras de que existió.**

En un ordenador sin programa de correo configurado (que es la mayoría hoy: la gente usa
Gmail en el navegador) el resultado es el mismo: nada.

> **Es el fallo más caro de la web**, porque rompe justo lo único que convierte una visita
> en un alumno. Todo lo demás de esta lista es secundario comparado con esto.

**Solución:** un servicio de formularios que envíe el correo de verdad. Para una web
estática como esta, lo estándar es Formspree o Web3Forms: se cambia una línea del HTML,
tienen plan gratuito suficiente para el volumen de un gimnasio, y el mensaje te llega a
itacajiujitsu@gmail.com sin que el visitante tenga que hacer nada.

### 2. La web recoge datos de menores sin consentimiento — riesgo legal real

El formulario de clase de prueba pide nombre, email, teléfono y **la edad de un niño de
entre 4 y 10 años**. No tiene casilla de consentimiento, ni enlace a la política de
privacidad, ni menciona que lo debe rellenar el padre, la madre o el tutor.

La política de privacidad que hay está escrita, pero le falta lo que la ley española pide:
base legal del tratamiento, cuánto tiempo se conservan los datos, y el derecho a reclamar
ante la Agencia Española de Protección de Datos.

No es un tecnicismo: es el tipo de cosa por la que llega una sanción, y con datos de
menores el listón es más alto.

**Solución:** casilla de consentimiento obligatoria con enlace a la política, una frase
que diga que en el caso de menores lo rellena el tutor, y completar la política de
privacidad. Es media hora de trabajo.

### 3. El carrusel secuestra la rueda del ratón — **comprobado**

Al bajar por la sección "SOMOS ITACA", si el puntero queda encima de la foto central, la
rueda deja de bajar la página y se pone a hacer zoom. **Comprobado en navegador: 5 giros
de rueda hacia abajo movieron la página 0 píxeles.**

El visitante no sabe eso. Lo que percibe es que la web se ha quedado colgada. Y la foto
central ocupa el centro exacto de la pantalla, que es justo por donde pasa el ratón al bajar.

**Solución:** que el zoom se active con un clic, no con la rueda. Se mantiene la idea
(que es buena) sin atrapar a nadie.

---

## 🟠 Importante, aunque no bloquea

### 4. El vídeo de portada probablemente no arranca — **comprobado en el código**

El `<video>` de la portada tiene `autoplay` pero **no tiene `muted`**. Ningún navegador
actual reproduce automáticamente un vídeo con sonido: lo bloquea siempre.

Hay un remiendo en el JavaScript que lo detecta y lo silencia para poder arrancarlo, así
que probablemente acabe funcionando — pero con un parpadeo, y dependiendo del navegador
puede quedarse el primer fotograma congelado.

Además **no hay imagen de respaldo** (`poster`): mientras el vídeo carga, la portada —lo
primero que ve todo el mundo— es un rectángulo gris.

*No se ha podido comprobar con el vídeo real porque el archivo no estaba disponible.*

**Solución:** añadir `muted` y `poster="images/portada.jpg"`. Dos palabras.

### 5. En el móvil hay contenido invisible — **comprobado**

Tres partes de la web solo aparecen al **pasar el ratón por encima**. En un móvil no hay
ratón, así que ahí ese contenido sencillamente no existe:

- **Instructores:** solo se ve el nombre. Toda la descripción (cinturón negro, campeón
  nacional, 10 años de experiencia) está en opacidad 0. *Comprobado en móvil.*
- **Etiquetas del carrusel** ("Instalaciones", "Tatami"…): nunca se ven.
- **Vídeos verticales:** solo se reproducen al pasar el ratón. En móvil se quedan quietos.

Como el grueso del tráfico de un gimnasio llega desde Instagram, es decir desde un
teléfono, esto significa que **la mayoría de tus visitantes no llega a leer el currículum
de tus profesores**, que es justo lo que les convence.

### 6. El horario está escrito dos veces

Los horarios están en la tabla que se ve **y**, por separado, dentro del JavaScript que
alimenta el formulario de clase de prueba. Si algún día cambias una clase y solo tocas
uno de los dos sitios, la tabla dirá una cosa y el formulario ofrecerá otra.

Es el fallo que aparece dentro de seis meses y nadie entiende. Está anotado en
`CLAUDE.md` §3 y en el comando `/migracion` para que no se olvide.

### 7. Se puede pedir clase de prueba para una fecha pasada — **comprobado**

El campo de fecha no tiene límite inferior. **Comprobado: poniendo el 6 de enero de 2020
la web ofrece tranquilamente las clases de aquel lunes.** Una línea (`min`) lo arregla.

### 8. La web es casi invisible para Google

Falta lo que hace que un negocio local aparezca en las búsquedas:

- No hay descripción (`meta description`): en Google saldría un texto elegido al azar.
- No hay imagen de vista previa: al compartir el enlace por WhatsApp o Instagram sale un
  enlace pelado, sin foto ni texto.
- No hay favicon: en la pestaña del navegador sale un icono en blanco.
- No hay ficha de negocio local (`LocalBusiness`), que es lo que ayuda a salir en
  búsquedas tipo "jiu jitsu Logroño" y en el mapa.

Para un gimnasio de barrio esto es, después de los formularios, lo que más alumnos trae.

---

## 🟡 Mejoras

- **`Escape` no cierra los modales** — *comprobado*. Se cierran con la X o clicando fuera,
  pero no con el teclado. Son tres líneas y es lo que todo el mundo intenta.
- **El horario en el móvil se ve de lado.** La tabla obliga a arrastrar horizontalmente y
  solo caben lunes y martes, sin ninguna pista de que hay más días a la derecha. Es la
  sección que más gente busca. Un formato de tarjetas apiladas por día iría mucho mejor.
- **Los párrafos largos EN MAYÚSCULAS cuestan de leer**, sobre todo el de la portada.
  Estéticamente encaja, pero es el primer texto que lee un desconocido.
- **Peso de la página:** hay 5 vídeos (portada + 4 verticales) y 10 fotos. Sin verlos no
  se puede medir, pero si el de portada pasa de unos pocos megas, en un móvil con datos
  la web tarda y la gente se va antes de que cargue.
- **Las tipografías se cargan desde Google.** Alojarlas en el propio repositorio hace la
  web más rápida y evita mandar la dirección IP de cada visitante a Google, que en Europa
  ha dado problemas legales.
- **Falta el aviso legal** (nombre fiscal o razón social y NIF). En España es obligatorio
  en la web de cualquier actividad económica, junto con términos y privacidad.
- **La traducción del poema de Kavafis** puede tener derechos del traductor, aunque el
  poema original sea de dominio público. Merece una comprobación rápida.
- **Nadie confirma nada al enviar.** Aunque se arregle el envío, hace falta un mensaje de
  "hemos recibido tu mensaje, te contestamos en 24 h". Sin eso la gente lo envía dos veces.

---

## En qué orden lo haría

1. **Formularios que funcionen de verdad** (nº 1) — sin esto, la web no sirve para lo que existe.
2. **Consentimiento y textos legales** (nº 2) — riesgo legal, y se arregla en la misma tarde.
3. **Rueda del ratón y `muted` + `poster` del vídeo** (nº 3 y 4) — rápido, y quita dos tropiezos.
4. **Contenido visible en móvil** (nº 5) — es donde está la mayoría de tu público.
5. **SEO y compartir en redes** (nº 8) — lo que hace que te encuentren.
6. El resto.

Los cuatro primeros puntos son un día de trabajo. La web de fondo está bien hecha: lo que
falla no es el diseño, es el último metro, el que convierte a un visitante en un alumno.
