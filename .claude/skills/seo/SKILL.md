---
name: seo
description: El ayudante de SEO de Itaca — revisión automática semanal de la web publicada y análisis mensual de Google Search Console. Úsala cuando lo lance la rutina programada, cuando Cipri pregunte cómo le va en Google, o antes de tocar títulos, descripciones, sitemap o datos estructurados.
---

# Ayudante de SEO

Trabaja solo. Cipri **no tiene que hacer nada** cada semana: ni capturas, ni
exportaciones, ni recordatorios. Lo lanza una rutina programada cada lunes y
lo único que le llega a Cipri es el informe final, en el móvil y en el correo.

El objetivo no es "subir en Google" en abstracto: es que alguien que busca
**"jiu jitsu Logroño"** (o "bjj logroño", "artes marciales logroño") encuentre
la web, entienda qué es Itaca y acabe escribiendo. Todo se mide contra eso.

## Ritmo

| Cuándo | Qué |
|---|---|
| **Cada lunes** | Revisión técnica de la web publicada (`auditoria.py`). Si algo grave se ha roto, se arregla ese mismo día. |
| **El primer lunes de cada mes** (día 1-7) | Además: análisis de Search Console (`search_console.py`), comparación con el mes anterior y una línea nueva en `docs/seo-historial.md`. |

## Paso a paso

1. **Prepara el repositorio.** La rutina te despierta dentro de la sesión de
   trabajo con Cipri, que ya tiene `ciprian1984/pagina-web` con permiso para
   publicar. Antes de nada, `git status`: si hay cambios sin guardar que no
   son tuyos, **no los toques** y no sigas; dilo en el informe. Si está limpio,
   parte de `main` actualizado en la rama de la sesión
   (`git fetch origin main && git checkout -B claude/new-session-oa3wjo origin/main`).

   ⚠️ No la lances como sesión nueva cada vez: se probó el 5 de octubre de
   2026 y una sesión nueva de rutina **no tiene el repositorio** ni forma de
   añadirlo, así que no puede publicar nada.
2. **Lee** `CLAUDE.md` (sobre todo §1 "decisiones que no se reproponen",
   §4 datos personales y §5 seguridad) y la última entrada de
   `docs/seo-historial.md`, para comparar con lo que hubo.
3. **Revisión técnica:** `python3 .claude/skills/seo/auditoria.py`.
   Sale con código 1 si hay algún GRAVE.
4. **Primer lunes del mes:** `python3 .claude/skills/seo/search_console.py --json`.
   - Código 2: falta la llave (ver "La llave" abajo). Dilo en el informe, una
     línea, y sigue con lo demás.
   - Código 3: Google rechaza el acceso. Dilo con el mensaje exacto y qué tiene
     que comprobar Cipri. No reintentes en bucle.
5. **Arregla lo que te toca** (ver "Qué puedes tocar") y publícalo siguiendo
   "Cómo publicar".
6. **Primer lunes del mes:** añade una línea a `docs/seo-historial.md` y
   publícala (es documentación, no cambia la web).
7. **Escribe el informe** (formato abajo). Es tu último mensaje: es lo que le
   llega a Cipri.

## Qué puedes tocar

### Lo arreglas y lo publicas tú solo

Cosas técnicas que el visitante **no lee** y que no cambian lo que la web dice:

- Datos estructurados (JSON-LD) de negocio local — **solo con datos que ya
  estén en la web o en `CLAUDE.md`** (nombre, dirección `C. Barigüelo 4, 26009
  Logroño`, teléfono, email, horario de `js/itaca-horario.js`, redes). Nada
  inventado: si un dato no está, no se pone. **Ya existen**: los crea un
  pequeño script al final de `index.html` (tipo `ExerciseGym`, con el horario
  sacado de `ItacaHorario.horarioSchemaOrg()`). No los dupliques escribiendo
  otro bloque en el HTML: corrige ese script.
- `sitemap.xml`, `robots.txt`, la etiqueta `canonical`, redirecciones en
  `vercel.json`.
- Etiquetas para compartir (`og:*`) cuando falten, copiando título y
  descripción que ya existen.
- Rutas rotas de fotos o archivos, cuando el archivo correcto exista en el
  repositorio.
- Texto alternativo de imágenes que no lo tengan, describiendo lo que se ve
  sin adornos.

### Lo preparas, pero NO lo publicas: queda en un PR en borrador para Cipri

Todo lo que el visitante lee o que es una decisión de producto:

- El **título** y la **descripción** que salen en Google. Son el escaparate:
  los propones con el porqué (qué consulta mejoraría y con qué datos).
- Cualquier texto visible de la web.
- Secciones o páginas nuevas.

### Lo que no tocas nunca

- **Formularios, textos legales y cualquier cosa con datos personales**
  (§4 y §5 de `CLAUDE.md`). Ni para "mejorar el SEO".
- **Precios.** Decisión de Cipri: no aparecen en la web (§1).
- **Servicios que Itaca no ha confirmado.** Si en las búsquedas sale "MMA",
  "defensa personal" u otra cosa, se le **pregunta** a Cipri en el informe; no
  se escribe en la web.
- El panel (`panel/`), el script de Google y la hoja de solicitudes.
- `google2a711415f28faa26.html`: es la verificación de Search Console. Si
  desaparece, Google deja de dar datos.
- **Fotos y vídeos originales**: no se borran ni se sustituyen (§5.6). Si una
  imagen pesa demasiado, se propone una versión optimizada al lado.

## Cómo publicar

1. Cambios mínimos, solo lo que el hallazgo pide.
2. **Antes de publicar, prueba en local:** sirve la web
   (`python3 -m http.server 8899`) y pasa la auditoría contra la copia local
   (`SEO_BASE=http://127.0.0.1:8899/ python3 .claude/skills/seo/auditoria.py`):
   el hallazgo tiene que desaparecer y no puede aparecer ninguno nuevo. Si
   tocas JSON-LD, comprueba además que es JSON válido.
3. Commit claro en castellano, PR contra `main`.
   - Arreglo técnico: PR normal, fusiona con **squash**.
   - Propuesta de texto: PR **en borrador**, no lo fusionas.
4. Tras fusionar, espera a que Vercel publique y **vuelve a pasar la auditoría
   contra la web real**. Si sigue fallando, no digas que está arreglado.
5. Si algo falla 3 veces seguidas, para y explícalo en el informe.

## El informe

Para Cipri, en castellano llano, sin jerga. Corto: se lee en el móvil.

```
SEO Itaca · lunes 6 de octubre

✅ La web está bien.            (o: ⚠️ Había X, ya está arreglado / 🔴 Y, necesito que…)

Lo que he hecho: …              (solo si hiciste algo; con el enlace al PR)
Lo que propongo: …              (solo si dejaste un borrador; qué y por qué)
Lo que necesito de ti: …        (solo si de verdad hace falta algo suyo)

[Solo el primer lunes del mes]
Este mes en Google: X personas entraron a la web desde Google (el mes pasado Y).
"jiu jitsu logroño": posición media N (antes M).
Qué significa: … (una o dos frases, con la conclusión, no los números)
```

Reglas del informe:

- **Si todo está bien y no es primer lunes de mes, una línea basta.** Nada de
  rellenar.
- Un número sin explicación no sirve: di qué significa ("salir en la posición
  6 es salir en la primera página, abajo del todo").
- Las cifras de una semana a otra bailan mucho con una web pequeña: no saques
  conclusiones de un solo mes. A partir de tres meses, sí hay tendencia.
- Nunca digas que algo está arreglado sin haberlo comprobado en la web real.

## La llave de Search Console

`search_console.py` entra con una **cuenta de servicio de Google de solo
lectura**. La llave está en la variable de entorno `GSC_SERVICE_ACCOUNT_JSON`
(el contenido entero del archivo JSON de la llave), puesta por Cipri en la
configuración del entorno. **Nunca vive en el repositorio y nunca se pide por
el chat.**

Para que funcione, la cuenta de servicio tiene que estar añadida como usuario
(permiso *Restringido* basta) de la propiedad `https://www.itacajiujitsu.com/`
en Search Console → Configuración → Usuarios y permisos.

## Lo ya sabido (no lo reportes como nuevo cada semana)

- **Los datos de negocio para Google (JSON-LD) se crean con JavaScript, no
  están escritos en el HTML.** Google los ve porque ejecuta la página.
  `auditoria.py` los saca ejecutando ese script con `node`; si dice que no
  hay, es que de verdad han desaparecido o se han roto. (La primera versión
  de la auditoría solo leía el HTML y daba un falso aviso de que faltaban.)

- **La web sirve archivos internos** (`CLAUDE.md`, `docs/`, `.claude/`). No es
  un problema de SEO sino de seguridad, y está pendiente de que Cipri dé el
  visto bueno. Menciónalo una vez al mes, en una línea, mientras siga así.
- **La web se dio de alta en Search Console el 2 de octubre de 2026.** Antes
  de esa fecha no hay datos de la web; lo que se había mirado era el Perfil de
  Empresa y la propiedad de Instagram (`docs/seo-historial.md`).
- **El 86% de quien encuentra a Itaca en Google lo hace desde el móvil**
  (Perfil de Empresa, mayo-octubre 2026). Cualquier propuesta se piensa
  primero para el móvil.
- **Hay búsquedas de "mma logroño"** (217 en el Perfil de Empresa). Cipri aún
  no ha dicho si Itaca ofrece algo para ese público: no se escribe nada sobre
  MMA hasta que lo confirme.
