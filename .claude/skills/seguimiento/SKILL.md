---
name: seguimiento
description: Lista de cosas importantes que hay que revisar de vez en cuando para que no se olviden entre sesiones — comprobaciones periódicas, seguimientos pendientes que no dependen de que Cipri se acuerde. Consúltala al empezar una sesión si no está claro qué toca revisar, y añade aquí cualquier cosa nueva que Cipri diga que "no se puede olvidar".
---

# Seguimiento

Cosas que no dependen de que Cipri se acuerde. Si surge algo que "no se puede
olvidar", se añade aquí en el momento — no queda solo en el chat de esa sesión.

## Activo

### Search Console — revisión periódica

- **Por qué:** la web nueva (no la antigua de Webador) lleva poco tiempo
  publicada. Hasta que Google la rastree e indexe del todo, los datos de
  Search Console tardan en tener sentido — hay que ir comprobando cómo
  evoluciona, no solo mirarlo una vez.
- **Cada cuánto:** cada 3-4 semanas. Automatizado con una rutina programada
  (`create_trigger`, día 1 de cada mes) que pregunta directamente a Cipri sin
  que él tenga que acordarse — ver `mcp__Claude_Code_Remote__list_triggers`.
- **Qué pedirle a Cipri:** una captura de **Rendimiento** (últimos 28 días) y
  de **Indexación → Páginas**.
- **Qué mirar en la respuesta:**
  - Si ya hay datos reales de la web nueva o si todavía es rastro de la vieja
    (mirar la fecha de publicación frente al rango de datos).
  - Evolución de la posición media y de los clics en "jiu jitsu logroño" y
    consultas parecidas.
  - Si el número de páginas indexadas tiene sentido para una web de una sola
    página más las 2 legales (`legal/privacidad.html`, `legal/terminos.html`)
    — no debería haber muchas más "no indexadas" sin motivo claro.
- **Dejar de repetir esto cuando:** los datos ya sean estables y reflejen la
  web nueva con al menos 4-6 semanas de rastreo — a partir de ahí, sacarlo de
  "activo" y dejarlo solo como referencia histórica más abajo.

## Cómo añadir algo aquí

Cuando Cipri diga algo tipo "que no se me olvide X" o "esto hay que
revisarlo de vez en cuando": añadir una entrada nueva con el mismo formato
— por qué importa, cada cuánto, qué hace falta comprobar, y si hace falta
una rutina programada o basta con anotarlo para que la próxima sesión lo
vea aquí.

## Resuelto / ya no aplica

(vacío por ahora — aquí se mueven las entradas de arriba cuando dejan de
necesitar seguimiento, para no perder el porqué de las decisiones pasadas)
