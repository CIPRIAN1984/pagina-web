# Kit de arranque

Todo lo que hace falta para que Claude trabaje bien en un proyecto desde el primer día.
Sacado de lo aprendido construyendo ITACA OS, con los errores ya incluidos para no repetirlos.

## Cómo usarlo (la forma fácil)

Copia esta carpeta entera a la raíz de tu proyecto nuevo. Luego abre Claude y dile:

> Tengo un kit de arranque en el proyecto. Léelo entero, rellena `CLAUDE.md`
> con los datos reales de esta app y adapta las skills a lo que hay aquí.
> Te cuento de qué va el proyecto: [lo que quieras hacer].
>
> Yo no soy desarrollador: te digo lo que quiero conseguir y lo técnico lo decides tú.

Ya está. Él rellena los huecos entre corchetes.

## Qué hay dentro

```
CLAUDE.md                      ← memoria del proyecto (rellenar los [CORCHETES])
.claude/
  settings.json                ← automatismos
  hooks/
    antes-de-commit.sh         ← ejecuta tipos y pruebas antes de cada commit
    archivos-sensibles.sh      ← pide confirmación al tocar BD, permisos o login
  skills/
    seguridad-datos/           ← OBLIGATORIA antes de tocar permisos
    flujo-de-trabajo/          ← ramas, PR, migraciones, producción
    producto/                  ← decisiones y textos
    calidad/                   ← QA y filosofía de pruebas
    patrones/                  ← arquitectura reutilizable
  commands/
    estado.md                  ← /estado
    migracion.md               ← /migracion
    a-produccion.md            ← /a-produccion
```

**Importante:** todo esto vive **en el repositorio**, no en una conversación.
Por eso funciona en cualquier sesión futura, desde el móvil o desde el ordenador,
hoy o dentro de un año.

## Lo único que tienes que hacer tú, siempre

Cuando se decida algo importante — sobre todo cuando se **descarte** una idea — dile:

> Esto que acabamos de decidir, apúntalo para no repetirlo.

Esa lista de decisiones descartadas es de lo más valioso del archivo: evita que dentro
de tres meses le vuelvan a proponer lo mismo y se pierda el tiempo discutiéndolo otra vez.

## Los tres atajos

- `/estado` — foto del proyecto: qué hay en producción, qué está a medias, qué te toca a ti
- `/migracion [lo que quieres cambiar]` — cambio de base de datos, con el SQL listo para pegar
- `/a-produccion` — comprobación completa antes de publicar

## Qué hacen los automatismos

1. **Antes de cada `git commit`** ejecuta tipos y pruebas. Si fallan, **bloquea el commit**.
   Si el proyecto no tiene esos comandos, no molesta: se salta solo.
2. **Al editar archivos sensibles** (base de datos, permisos, autenticación) pide confirmación
   y recuerda invocar la skill de seguridad.

Lo importante de esto: **no dependen de que Claude se acuerde**. Los ejecuta la herramienta.

## Las tres lecciones que más caro han salido

1. **Permisos:** en PostgreSQL, para *quitar* acceso hace falta una política **RESTRICTIVA**.
   Una permisiva se suma con OR y no restringe nada. Un candado hecho mal estuvo en producción
   sin bloquear absolutamente nada.
2. **Pruebas:** una prueba que nunca falla es peor que no tenerla, porque da falsa seguridad.
   Rompe el código a propósito y comprueba que la prueba salta.
3. **Memoria desactualizada:** un `CLAUDE.md` que describe un sistema que ya no existe hace que
   la IA decida sobre una realidad falsa. Si cambia el modelo de datos, se actualiza en el mismo cambio.
