---
name: seguridad-datos
description: OBLIGATORIA antes de tocar permisos, roles, autenticación, políticas RLS, migraciones de base de datos o cualquier consulta que devuelva datos de un usuario. Úsala también al revisar si un cambio puede filtrar datos entre cuentas. Contiene el checklist que hay que seguir sin saltarse pasos.
---

# Seguridad de datos — checklist obligatorio

Esta skill existe porque el fallo más caro de este tipo de proyectos no es que algo
no funcione: es que **funcione de más** y alguien vea datos que no son suyos.

## Antes de tocar nada

1. **Avisa primero.** Cambios en autenticación, base de datos o permisos se anuncian
   antes de hacerlos, en lenguaje llano y con la consecuencia real
   ("si esto sale mal, un usuario bloqueado seguiría viendo sus datos").
2. **Escribe la regla en una frase** antes de escribir el código:
   *"Un usuario solo puede leer las filas donde `user_id` es el suyo."*
   Si no sabes escribirla en una frase, todavía no entiendes el permiso que vas a poner.
3. **Di quién queda fuera.** Toda regla de acceso deja a alguien fuera. Nómbralo.

## La lección más cara: permisiva ≠ restrictiva

En PostgreSQL (la base de datos que usa Supabase) las políticas de acceso se suman con **O**:

- Una política **PERMISIVA** *concede* acceso. Añadir otra permisiva **amplía** el acceso, nunca lo reduce.
- Para **quitar** acceso hace falta una política **RESTRICTIVA** (`AS RESTRICTIVE`), que se suma con **Y**.

Un candado escrito como permisiva estuvo en producción sin bloquear absolutamente nada.
Si el objetivo es *impedir* algo (cuenta bloqueada, cuenta sin verificar), la política es
`AS RESTRICTIVE`. Sin excepción.

```sql
-- Candado: una cuenta bloqueada no lee nada, pase lo que pase.
DROP POLICY IF EXISTS bloqueo_lectura ON public.[tabla];
CREATE POLICY bloqueo_lectura ON public.[tabla]
  AS RESTRICTIVE FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.[perfiles] p
    WHERE p.id = auth.uid() AND p.estado = 'activo'
  ));
```

## Checklist (no se salta ningún punto)

- [ ] ¿Está `ROW LEVEL SECURITY` **activado** en la tabla? Sin eso, las políticas no se aplican.
- [ ] ¿La política es del tipo correcto? Conceder → permisiva. Impedir → **restrictiva**.
- [ ] ¿Cubre las cuatro operaciones que hagan falta (`SELECT`, `INSERT`, `UPDATE`, `DELETE`)?
- [ ] ¿`INSERT`/`UPDATE` llevan `WITH CHECK`? Sin él se puede escribir una fila a nombre de otro.
- [ ] ¿El **rol** decide el permiso, y el **modo** solo cambia la apariencia? (CLAUDE.md §4)
- [ ] ¿Se usa alguna clave de servidor (`service_role`)? Si sí: ¿solo en servidor, y **después**
      de comprobar quién llama? Esa clave se salta todos los permisos.
- [ ] ¿Hay una prueba que falla si se quita el candado? Quítalo a propósito y compruébalo.
- [ ] ¿La migración es no destructiva (`IF NOT EXISTS` / `DROP ... IF EXISTS`)?
- [ ] ¿Se ha probado en preview antes que en producción?

## Cómo se comprueba de verdad

No basta con leer el SQL. Se comprueba con dos cuentas:

1. Cuenta A crea un dato.
2. Cuenta B intenta leerlo, editarlo y borrarlo. Las tres cosas deben fallar.
3. Se bloquea la cuenta A y se comprueba que deja de ver lo suyo.

Si no puedes hacer esto tú (hace falta iniciar sesión de verdad), **dilo claramente**
y dale al dueño los pasos exactos que tiene que probar él, uno a uno.

## Lo que nunca se hace

- Desactivar RLS "un momento para probar".
- Poner la clave `service_role` en algo que llegue al navegador.
- Borrar o renombrar tablas de producción.
- Decir "ya está seguro" sin haberlo comprobado con dos cuentas.
