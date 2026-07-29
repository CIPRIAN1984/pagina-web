---
name: flujo-de-trabajo
description: Ramas, pull requests, migraciones de base de datos y puesta en producción. Úsala antes de crear una rama, abrir o fusionar un PR, aplicar una migración o publicar en producción, y siempre justo después de que se fusione un PR.
---

# Flujo de trabajo

## Ramas — la trampa que más tiempo cuesta

Los PR se fusionan con **squash**: los commits de la rama se aplastan en uno solo en `main`.
Eso significa que la rama vieja **ya no coincide** con `main` aunque el contenido sea el mismo.

**Después de cada fusión, siempre:**

```bash
git fetch origin main
git checkout -B <rama> origin/main
```

Si no se hace, la rama arrastra los commits antiguos, el siguiente PR muestra cambios que
ya estaban fusionados y aparecen conflictos que no tienen ninguna causa real.

## Pull requests

- Uno por cambio con sentido propio. Un PR gigante no se puede revisar ni revertir.
- Título en castellano, claro, describiendo el efecto: *"El usuario bloqueado ya no ve sus datos"*.
- En el cuerpo: qué cambia, qué tiene que probar el dueño a mano, qué queda pendiente.

⚠️ **Si un PR tiene conflicto de fusión, GitHub NO ejecuta el control automático y no avisa.**
El PR parece "sin problemas" porque no hay nada en rojo — pero es que no se ha ejecutado nada.
Comprueba `mergeable_state` antes de dar nada por verde.

## Migraciones de base de datos

1. SQL **no destructivo**: `IF NOT EXISTS`, `DROP ... IF EXISTS`, `ADD COLUMN IF NOT EXISTS`.
2. Nada de `DROP TABLE` ni `DROP COLUMN` sin confirmación explícita del dueño.
3. El SQL se entrega **listo para copiar y pegar**, diciendo dónde se pega
   (Supabase → SQL Editor → New query → pegar → Run). Nunca "aplica la migración".
4. Si toca permisos → primero la skill `seguridad-datos`.
5. En el mismo cambio se actualiza la tabla del §3 de `CLAUDE.md`. Una memoria
   desactualizada hace que la IA decida sobre una realidad que ya no existe.

## Puesta en producción

Orden, sin saltarse pasos:

1. `npm run lint` · `npm run typecheck` · `npm test` · `npm run build` — los cuatro en verde.
2. Preview desplegada y probada a mano.
3. Migraciones aplicadas **antes** de que salga el código que las necesita.
4. Fusionar a `main`.
5. Comprobar en producción lo que se pueda comprobar; lo que no, decirle al dueño
   exactamente qué debe abrir y qué debe ver.

**Trabajo terminado = probado.** Si no se ha comprobado, no está terminado, y se dice así.
