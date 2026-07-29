---
name: patrones
description: Cómo está montado index.html y cómo tocarlo sin romperlo. Úsala antes de añadir una sección, un modal, una foto al carrusel, una clase al horario o cualquier estilo nuevo.
---

# Patrones

Toda la web es **un solo archivo**: `index.html`. Unas 2.800 líneas repartidas en tres
bloques: `<style>` en la cabecera, el contenido en el `<body>` y un `<script>` al final,
todo dentro de un `DOMContentLoaded`.

Eso es una decisión, no un descuido: la web se abre con doble clic, no hay que compilar
nada y se puede subir a cualquier sitio arrastrando la carpeta. **No la deshagas sin hablarlo.**

## La regla que manda

**Copia el patrón que ya está.** Antes de inventar, busca cómo está hecho lo parecido y
sigue esa forma. Ejemplos que ya existen y hay que imitar:

- **Un modal nuevo** → copia la estructura de `#infoContactModal`: `div.modal-overlay` >
  `div.modal-container` > botón `.modal-close` + `h2.modal-title`. Y sus tres líneas de
  JavaScript: abrir con el disparador, cerrar con la X, cerrar al clicar el fondo.
- **Una sección nueva** → `<section class="section" id="...">` con `<div class="container">`
  dentro, y las clases `reveal` / `delay-1` para que aparezca al hacer scroll.
- **Un botón** → `.btn` + `.btn-primary` (negro), `.btn-outline` (blanco sobre foto) o
  `.btn-dark-outline`. No inventes un cuarto estilo de botón.

## Los sitios donde es fácil equivocarse

| Si tocas… | Acuérdate de… |
|---|---|
| Un **horario** | Cambiarlo en **los dos sitios**: la tabla del HTML y el objeto `classesForAdult` / `classesForNino46` / `classesForNino710` del JS. Si no, el formulario ofrece clases que ya no existen. |
| Una **foto del carrusel** | Añadirla al array `photos` del JS. Las tarjetas se generan desde ahí, no desde el HTML. |
| Un **instructor** | Están escritos a mano en el HTML, y la rejilla es de 3 columnas. Un cuarto instructor descoloca el diseño. |
| Un **color o una tipografía** | Cambiar la variable en `:root`, nunca el valor suelto en medio del CSS. |
| Cualquier cosa **con `:hover`** | En móvil **no hay hover**. Si el contenido solo aparece al pasar el ratón, en el móvil no existe. |
| El **`z-index`** | Ya hay una escala en uso: cabecera 1000, menú móvil 999, zoom del carrusel 1500, modales 2000. Respétala. |

## Reglas de código

- **Estilos en el `<style>`, lógica en el `<script>`.** Nada de `onclick=` en el HTML.
- Los `style="..."` sueltos en el HTML existen en unos cuantos sitios (secciones, modales
  legales). Son deuda: si tocas uno, mejor pásalo a una clase, pero no hagas una limpieza
  general sin avisar.
- **Nada de librerías externas.** El carrusel, el zoom, el menú y el poema están escritos
  a mano y funcionan. No los sustituyas por un paquete de terceros.
- Textos que ve el visitante en castellano; clases, variables y funciones en inglés.
- Comentarios solo para el **porqué** no evidente.

## Nombres

- Secciones: `id` en inglés y en minúsculas (`about`, `academy`, `reels`, `schedule`).
- Clases CSS: en inglés con guiones (`instructor-card`, `class-block`, `reel-mute-btn`).
- Archivos de imagen: como están ya (`images/Itaca/GymN.webp`, `images/Profesores/Nombre.png`).
