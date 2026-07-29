---
description: Comprobación completa antes de publicar
---

Comprobación antes de publicar. **Ejecuta todo de verdad**; no des por bueno nada que
no hayas visto pasar.

**1. Control de calidad** — ejecuta los cuatro y pega el resultado real:
`npm run lint` · `npm run typecheck` · `npm test` · `npm run build`
Si algo está en rojo, se para aquí. No se publica en rojo.

**2. Seguridad** — si este cambio toca permisos, autenticación o acceso a datos:
invoca la skill `seguridad-datos` y repasa su checklist entero. En especial:
¿hay alguna política que debería ser **restrictiva** y está puesta como permisiva?

**3. Base de datos** — ¿hay migraciones pendientes de aplicar? Se aplican **antes** de
que salga el código que las necesita, o la web se rompe en cuanto se publique.

**4. Estado del PR** — comprueba `mergeable_state`. Con conflicto de fusión GitHub
**no ejecuta** el control automático: verde por ausencia no es verde.

**5. La memoria** — ¿`CLAUDE.md` describe lo que hay ahora mismo? Si el modelo de datos,
las rutas o los permisos han cambiado, se actualiza antes de fusionar.

**6. Preview** — desplegada y probada a mano. Nada llega a producción sin haber pasado por ahí.

Termina con un veredicto claro:

- **Listo para publicar** — y qué debe mirar el dueño en producción justo después, paso a paso.
- **No listo** — qué falta exactamente, sin maquillar.
