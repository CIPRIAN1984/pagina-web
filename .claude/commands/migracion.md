---
description: Cambio de base de datos, con el SQL listo para pegar
argument-hint: [lo que quieres cambiar]
---

Cambio pedido en la base de datos: **$ARGUMENTS**

Sigue este orden, sin saltarte pasos:

1. **Mira el estado real primero.** Lee `CLAUDE.md` §3 y comprueba contra la base de
   datos de verdad. Si no coinciden, manda la base de datos y avisa del desfase.
2. **Si el cambio toca permisos, roles o acceso a datos: invoca la skill `seguridad-datos`**
   y sigue su checklist entero. No es opcional.
3. **Escribe el SQL**:
   - No destructivo: `IF NOT EXISTS`, `DROP ... IF EXISTS`, `ADD COLUMN IF NOT EXISTS`.
   - Nada de `DROP TABLE` ni `DROP COLUMN` ni renombrar tablas sin confirmación explícita.
   - Si crea una tabla nueva: activa `ROW LEVEL SECURITY` y añade sus políticas en el mismo SQL.
     Una tabla sin RLS activado la puede leer cualquiera que tenga la clave pública.
4. **Guarda la migración** en `supabase/migrations/` con fecha y nombre descriptivo.
5. **Actualiza `CLAUDE.md` §3** en este mismo cambio. No en el siguiente.
6. **Añade o ajusta las pruebas** que vigilan la regla nueva, y comprueba que fallan
   si se quita el candado.

Termina con el bloque de pasos manuales, masticado:

> **Lo que tienes que hacer tú:**
> 1. Entra en Supabase → tu proyecto → **SQL Editor** → **New query**
> 2. Pega esto tal cual y pulsa **Run**:
> ```sql
> [el SQL completo, listo para copiar]
> ```
> 3. Deberías ver: `Success. No rows returned`
> 4. Para comprobar que ha funcionado: [qué mirar exactamente]

Nunca digas solo "aplica la migración".
