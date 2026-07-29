---
description: Cambiar horarios, fotos, instructores o textos de la web sin romper nada
argument-hint: [lo que quieres cambiar]
---

Cambio pedido: **$ARGUMENTS**

Esta web no tiene base de datos: los "datos" son bloques dentro de `index.html` y archivos
en `images/` y `videos/`. Varios están **duplicados en dos sitios**, y ahí es donde se rompe.

Sigue este orden, sin saltarte pasos:

1. **Mira el estado real primero.** Lee `CLAUDE.md` §3 y compruébalo contra `index.html`.
   Si no coinciden, manda el archivo y avisa del desfase.

2. **Comprueba si lo que cambias vive en más de un sitio:**

   | Si cambias… | Hay que tocarlo también en… |
   |---|---|
   | Un **horario** | La tabla del HTML (~línea 1820) **y** los objetos `classesForAdult`, `classesForNino46`, `classesForNino710` del JS (~línea 2324) |
   | Una **foto del carrusel** | El array `photos` del JS (~línea 2582) — las tarjetas se generan desde ahí |
   | Un **instructor** | El HTML de `#instructors`. Ojo: la rejilla es de 3 columnas |
   | Un **dato de contacto** | Aparece en `#location`, en `#infoContactModal`, en `#privacyModal` y en los dos `mailto:` |

3. **Si toca formularios, datos personales o textos legales: invoca la skill `seguridad-datos`**
   y sigue su checklist entero. No es opcional.

4. **Haz el cambio** siguiendo el patrón que ya existe (skill `patrones`).

5. **Actualiza `CLAUDE.md` §3** en este mismo cambio. No en el siguiente.

6. **Compruébalo abriendo la web**, en escritorio **y** en móvil (skill `calidad`).
   Si has tocado horarios, abre el formulario de clase de prueba y comprueba que ofrece
   exactamente las clases nuevas en el día correcto.

Termina con el bloque de pasos manuales, masticado:

> **Lo que tienes que hacer tú:**
> 1. [qué archivo tienes que enviar o dónde tienes que mirar]
> 2. [qué deberías ver exactamente]

Nunca digas solo "ya está cambiado".
