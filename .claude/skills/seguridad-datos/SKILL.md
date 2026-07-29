---
name: seguridad-datos
description: OBLIGATORIA antes de tocar los formularios de contacto o clase de prueba, los textos legales (términos, privacidad), cualquier cosa que recoja nombre, email, teléfono o datos de menores, o antes de añadir analítica, cookies, píxeles de seguimiento o servicios externos. Contiene el checklist que hay que seguir sin saltarse pasos.
---

# Seguridad de datos — checklist obligatorio

En esta web no hay base de datos ni cuentas de usuario, así que es fácil pensar que
no hay nada que proteger. **Falso.** La web recoge nombre, email, teléfono y **la edad
de niños de 4 a 10 años**. Eso son datos personales de verdad, con obligaciones de verdad.

## Antes de tocar nada

1. **Avisa primero.** Cambios en los formularios, en los textos legales o en lo que se
   envía a un servicio externo se anuncian antes de hacerlos, con la consecuencia real
   ("si esto falla, un padre rellena el formulario de su hijo y el mensaje no llega a nadie").
2. **Di qué dato nuevo se recoge y para qué.** Si no sabes justificar por qué hace falta
   un campo, ese campo sobra. El dato que no se pide es el que nunca se pierde.
3. **Datos de menores = máximo cuidado.** El formulario de clase de prueba pregunta la
   edad del niño. Cualquier cambio ahí necesita consentimiento explícito del padre,
   madre o tutor, y decirlo con claridad en el propio formulario.

## Checklist (no se salta ningún punto)

- [ ] ¿El formulario tiene **casilla de consentimiento** con enlace a la política de privacidad?
- [ ] Si recoge datos de un menor, ¿deja claro que **lo rellena el padre, madre o tutor**?
- [ ] ¿Pide **solo** los datos que hacen falta para responder? Nada de "por si acaso".
- [ ] ¿El visitante ve **confirmación** de que su mensaje se ha enviado? Un formulario que
      no confirma nada hace que la gente lo rellene dos veces o se vaya pensando que falló.
- [ ] ¿Hay alguna clave, contraseña o token en `index.html`? **Nunca puede haberla**:
      es un archivo estático, cualquiera lo lee entero con el botón derecho → ver código.
- [ ] Si se añade un servicio externo (formularios, analítica, chat, píxel de Instagram):
      ¿está en la política de privacidad? ¿hace falta aviso de cookies? ¿se ha avisado a Cipri?
- [ ] ¿La política de privacidad sigue diciendo la verdad después del cambio?
- [ ] ¿Se ha probado el formulario **entero**, hasta el final, en escritorio y en móvil?

## Lo que ya sabemos que está flojo

Está detallado en `docs/REVISION-2026-07.md`. En resumen: los formularios envían por
`mailto:` (se pierden mensajes), no hay casilla de consentimiento, y la política de
privacidad está incompleta para lo que la ley española exige. Al tocar cualquiera de
esas tres cosas, arréglalo entero, no a medias.

## Cómo se comprueba de verdad

No basta con leer el código. Se abre la web y se rellena el formulario hasta el final:

1. Desde un ordenador **sin programa de correo configurado** (que es la mayoría).
2. Desde un móvil.
3. Con el formulario a medias, para ver qué avisa.

Si no puedes hacerlo tú (hace falta un correo real llegando a la bandeja de Cipri),
**dilo claramente** y dale los pasos exactos que tiene que probar él, uno a uno.

## Lo que nunca se hace

- Meter una clave o contraseña en el HTML.
- Añadir analítica, cookies o píxeles sin avisar y sin aviso de cookies.
- Recoger un dato nuevo sin actualizar la política de privacidad en el mismo cambio.
- Publicar fotos o vídeos de alumnos menores sin permiso firmado de sus padres.
- Decir "ya está bien" sin haber rellenado el formulario entero.

---

## Si algún día hay base de datos (todavía no la hay)

Cuando llegue el día de guardar inscripciones o reservas de verdad, esta lección ya
se pagó cara una vez y no hace falta repetirla:

En PostgreSQL (la base de datos que usa Supabase) las políticas de acceso se suman con **O**:

- Una política **PERMISIVA** *concede* acceso. Añadir otra permisiva **amplía** el acceso, nunca lo reduce.
- Para **quitar** acceso hace falta una política **RESTRICTIVA** (`AS RESTRICTIVE`), que se suma con **Y**.

Un candado escrito como permisiva estuvo en producción sin bloquear absolutamente nada.
Si el objetivo es *impedir* algo, la política es `AS RESTRICTIVE`. Sin excepción.
Y `ROW LEVEL SECURITY` tiene que estar **activado** en la tabla, o las políticas no se aplican.
