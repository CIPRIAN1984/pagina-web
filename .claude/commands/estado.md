---
description: Foto del proyecto — qué funciona, qué está a medias, qué te toca a ti
---

Haz una foto del estado real de la web. **Comprueba, no supongas**: abre la web de verdad
antes de escribir nada.

Revisa:

1. Rama actual, si hay cambios sin guardar, y si existe ya rama `main`.
2. Pull requests abiertos: cuáles tienen conflicto de fusión
   (⚠️ con conflicto GitHub no ejecuta ningún control y no avisa).
3. **Levanta la web y ábrela** (`python3 -m http.server 8899`), en escritorio y en móvil:
   - ¿carga todo? ¿hay fotos o vídeos que falten?
   - ¿hay errores en la consola del navegador?
   - ¿los dos formularios se abren y se pueden rellenar?
4. Si `CLAUDE.md` §3 sigue describiendo lo que hay de verdad en `index.html`. Si no,
   dilo: es el fallo que hace que se tomen decisiones sobre una realidad falsa.
5. Qué queda pendiente de `docs/REVISION-2026-07.md` y de `docs/PENDIENTE-archivos.md`.

Preséntalo en tres apartados, en castellano y sin jerga:

**Qué está funcionando** — comprobado abriendo la web, no leyendo el código.
**Qué está a medias** — con lo que falta para cerrarlo.
**Qué te toca a ti** — pasos masticados: qué archivo enviar, dónde entrar, qué mirar.

Si algo no lo puedes comprobar desde aquí (que llegue un correo real, el vídeo definitivo),
dilo claramente en lugar de suponerlo.
