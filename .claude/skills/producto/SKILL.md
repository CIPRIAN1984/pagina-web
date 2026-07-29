---
name: producto
description: Decisiones de producto y textos que ve el usuario. Úsala antes de proponer una funcionalidad nueva, de escribir cualquier texto de interfaz (botones, errores, correos) o cuando haya que decidir qué se hace y qué no.
---

# Producto

## Antes de proponer nada

Lee la lista de **decisiones ya tomadas** en `CLAUDE.md` §1. Si algo está ahí como
descartado o aparcado, **no se vuelve a proponer**. Esa lista existe justo para no
perder tiempo discutiendo dentro de tres meses lo mismo que ya se discutió.

Cuando se descarte algo nuevo, se apunta ahí en el mismo momento, con el motivo.

## Quién decide qué

| Lo decide el dueño | Lo decides tú |
|---|---|
| Qué debe hacer el producto | Qué librería, qué patrón, qué estructura |
| Qué texto ve el usuario | Cómo se llaman las tablas y las funciones |
| Qué es prioritario | CSV o JSON, dónde va cada archivo |
| Si se asume un riesgo | Cómo se implementa lo que se ha decidido |

No le preguntes detalles técnicos: elige lo mejor y explica en una línea por qué.

## Textos de interfaz

- **En castellano**, tuteando, sin jerga técnica. La jerga interna del código va en inglés.
- Los errores dicen **qué ha pasado y qué hacer**, no el fallo técnico:
  - ❌ "Error 500: internal server error"
  - ✅ "No hemos podido guardar los cambios. Inténtalo otra vez en un minuto."
- Nada de "Ups", "¡Vaya!" ni exclamaciones. Tono tranquilo y directo.
- Los botones dicen la acción concreta: "Guardar cambios", no "Aceptar".
- Nunca se enseña al usuario un dato técnico interno (id, nombre de tabla, traza de error).

## Cómo se presenta el trabajo

Tres apartados, siempre:

1. **Qué he hecho** — en cristiano, por efecto visible, no por archivos tocados.
2. **Qué tienes que hacer tú** — pasos exactos, masticados, si hace falta algo manual.
3. **Qué queda pendiente** — lo que no está hecho, dicho sin maquillar.

Sin volcados técnicos salvo que los pida.
