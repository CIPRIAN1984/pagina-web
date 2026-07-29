---
description: Foto del proyecto — qué hay en producción, qué está a medias, qué te toca a ti
---

Haz una foto del estado real del proyecto. **Comprueba, no supongas**: mira el
repositorio de verdad antes de escribir nada.

Revisa:

1. Rama actual, si está al día con `main`, y si hay cambios sin guardar.
2. Pull requests abiertos: cuáles están en verde, cuáles tienen conflicto de fusión
   (⚠️ con conflicto el control automático **no se ejecuta** y no avisa: no cuenta como verde).
3. `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` — ejecuta los que existan.
4. Si `CLAUDE.md` §3 (modelo de datos) coincide con la base de datos real. Si no, dilo:
   es el fallo que hace que se tomen decisiones sobre una realidad falsa.
5. Migraciones escritas pero todavía sin aplicar en producción.

Preséntalo en tres apartados, en castellano y sin jerga:

**Qué está funcionando** — lo que está en producción y comprobado.
**Qué está a medias** — con lo que falta para cerrarlo.
**Qué te toca a ti** — pasos manuales masticados: qué abrir, qué pegar, qué mirar.

Si algo no lo puedes comprobar desde aquí, dilo claramente en lugar de suponerlo.
