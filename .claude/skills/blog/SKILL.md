---
name: blog
description: Convierte el material que manda Cipri (texto, notas, audio transcrito, fotos, enlace de YouTube) en una publicación nueva del blog de Itaca, y la primera vez monta el blog. Úsala siempre que Cipri mande material "para el blog", pida un artículo nuevo o escriba /blog.
---

# Blog de Itaca

Cipri manda el material por el chat y aquí sale una publicación nueva en la web.
Él no toca nada técnico. Tú haces todo lo demás, pero **el texto que lee el
visitante lo aprueba él antes de publicarse** (CLAUDE.md, matriz de autoridad:
el contenido es suyo).

## Lo que ya está decidido (no lo vuelvas a proponer)

Decidido con Cipri el 9 de octubre de 2026:

- **En el blog va texto y, como mucho, fotos.** No se sube ningún vídeo.
- **Los vídeos viven en YouTube.** Desde el artículo hay una tarjeta (foto
  + ▶ + «Ver la entrevista completa en YouTube ↗») que **enlaza** al vídeo.
  **Nunca se incrusta el reproductor de YouTube**: pone cookies de Google, y la
  web hoy no lleva ninguna y por eso no necesita aviso de cookies (CLAUDE.md §1).
  La miniatura se descarga y se guarda en el repositorio; no se carga desde
  `i.ytimg.com`.
- **Si el artículo sale de una entrevista en vídeo, el texto es un resumen
  escrito con las mejores frases**, no un "mira el vídeo". Quien no puede poner
  sonido se entera igual, y Google necesita texto para leer.
- **El ritmo es uno al mes, siempre.** Mejor uno al mes que diez de golpe y
  luego nada: un blog con el último artículo de hace un año da imagen de
  academia parada. Si Cipri manda mucho de golpe, propón escalonarlo.
- **El blog no se abre al público hasta que haya 3 artículos.**
- **El diseño es la maqueta de `maqueta/`** (portada del blog + artículo):
  blanco y negro, Archivo/Montserrat, esquina viva, titulares en mayúscula.
  Cipri la vio en ordenador y en móvil y dijo que sí.
- Tipos de artículo (son los filtros): **Personas de Ítaca** (entrevistas),
  **Primeros pasos** (responder lo que pregunta quien aún no ha venido:
  esto es lo que trae gente desde Google) y **Comunidad** (crónicas,
  Community Day, competiciones).

**Pendiente de Cipri**, pregúntalo la primera vez si sigue sin decidir:
el nombre del blog (en la maqueta, «Diario de Ítaca»; en el menú, «DIARIO»).

## Cómo está montado

| Qué | Dónde |
|---|---|
| Portada del blog (lista de artículos) | `blog/index.html` |
| Cada artículo | `blog/<slug>.html` (slug en minúsculas, sin tildes, con guiones: `que-llevar-primera-clase`) |
| Estilos comunes del blog | `blog/blog.css` (sale de `maqueta/estilo.css`) |
| Fotos de cada artículo | `images/blog/<slug>/` en WebP |
| Lista para Google | `sitemap.xml` (una `<url>` por artículo) |
| En la página principal | sección `#diario` con los 3 últimos artículos y enlace al menú |

- **Páginas HTML a mano, sin JavaScript para pintar contenido y sin
  generadores.** Cada artículo es un archivo completo, igual que
  `legal/privacidad.html`. Así Google lo lee entero sin ejecutar nada y la web
  sigue sin compilación (CLAUDE.md §1: nada de frameworks).
- `blog/blog.css` es la excepción a la regla de "estilos en el `<style>`": la
  comparten muchas páginas, y copiarlos en cada una haría que se
  contradijeran al cambiar algo. Sigue usando las variables de `:root`.
- Cada artículo lleva: `<title>` y `<meta name="description">` propios,
  `canonical`, etiquetas `og:` (con la foto principal), datos para Google
  `BlogPosting` en un `<script type="application/ld+json">` **escrito en el
  HTML** (no generado con JS), `lang="es"`, un solo `<h1>`, y `alt` en cada
  foto.
- Al final de cada artículo, siempre, la llamada «¿Te ves aquí?» con el botón
  de clase de prueba. Enlaza a `../index.html#join` (el formulario está en la
  portada; no se copia el formulario al blog).

## Paso a paso: publicación nueva

1. **Prepara la rama.** Parte de `main` actualizado
   (`git fetch origin main && git checkout -B <rama de la sesión> origin/main`).
   Si estás en una conversación solo para el blog, usa la rama que te dé esa
   sesión, nunca `claude/new-session-oa3wjo`: es la de la conversación
   principal, y dos conversaciones en la misma rama se pisan.
2. **Lee lo que ha mandado y ordénalo.** Puede llegar como texto hecho, notas
   sueltas, la transcripción de un audio o una entrevista. Decide el tipo
   (Personas / Primeros pasos / Comunidad).
3. **Escribe el borrador** y **enséñaselo a Cipri en el chat antes de
   publicar**: título, frase de entrada y texto. Pregúntale solo lo que falte
   de verdad.
   - **No inventes nada.** Ni frases entre comillas que nadie ha dicho, ni
     edades, ni datos del gimnasio. Las citas salen literales del material.
     Si falta un dato, se pregunta o se queda fuera.
   - Nada de precios (CLAUDE.md §1). Nada de servicios que Itaca no ha
     confirmado (por ejemplo MMA).
   - Tono de la web: editorial, directo, sin exclamaciones ni emojis.
   - En los de Primeros pasos, piensa en qué escribe en Google alguien de
     Logroño que duda ("jiu jitsu niños Logroño", "qué llevar primera clase
     jiu jitsu") y que el título y la entrada respondan a eso.
4. **Permisos, antes de publicar ninguna foto o nombre:**
   - **Persona entrevistada:** que Cipri confirme que ha firmado la
     autorización de uso de imagen y nombre.
   - **Si sale un menor** (foto, nombre o historia): permiso firmado del padre,
     madre o tutor. Sin confirmación explícita de Cipri, no se publica. Pasa
     por la skill `seguridad-datos`.
   - Para la gente que sale de fondo en una foto vale lo que ya está aceptado
     en las fotos de la web; si se le ve la cara a un niño que no es de las
     fotos ya autorizadas, pregunta.
5. **Fotos:** a WebP, 1600 px de lado largo como máximo, por debajo de unos
   300 KB, con calidad ~80. Usa lo que haya en la sesión (`cwebp`, `ffmpeg` o
   Pillow); si no hay nada, `pip install pillow` y conviértelas con Python. Guárdalas en `images/blog/<slug>/`.
   El original no se borra (CLAUDE.md §5.6). Si no hay foto, la ficha usa el
   recuadro negro con el título (`.sin-foto` de la maqueta).
6. **YouTube:** descarga la miniatura
   (`https://i.ytimg.com/vi/<ID>/maxresdefault.jpg`, o `hqdefault.jpg` si esa
   no existe), pásala a WebP y guárdala junto a las fotos del artículo. La
   tarjeta enlaza a `https://www.youtube.com/watch?v=<ID>` con
   `target="_blank" rel="noopener"`.
7. **Monta la página** `blog/<slug>.html` a partir de `maqueta/articulo.html`.
   Después actualiza:
   - `blog/index.html`: el nuevo arriba como destacado, y el que estaba
     destacado pasa a la rejilla.
   - La sección `#diario` de `index.html`: los 3 últimos.
   - `sitemap.xml`: la URL nueva.
8. **Compruébalo de verdad** (skill `calidad`): sirve la web en local, ábrela
   en ordenador y a 390 px, mira que no haya scroll horizontal
   (`scrollWidth` igual que `innerWidth`), que no haya errores en la consola,
   que cargan todas las fotos y que los enlaces van donde deben. Pasa
   `SEO_BASE=http://127.0.0.1:8899/ python3 .claude/skills/seo/auditoria.py`.
   Valida que el JSON-LD es JSON correcto.
9. **Publica:** PR contra `main`, y mándale a Cipri el enlace de la vista
   previa de Vercel. **Se fusiona cuando él diga que sí**, con squash. Después
   vuelve a partir la rama de `main` y comprueba el artículo en
   `www.itacajiujitsu.com`.
10. **Díselo en dos líneas:** qué se ha publicado, el enlace, y si hace falta
    algo suyo (por ejemplo, compartirlo en Instagram).

## La primera vez: montar el blog

Solo una vez, cuando estén los 3 primeros artículos:

1. Pregunta el nombre si sigue pendiente.
2. Crea `blog/blog.css` desde `maqueta/estilo.css` (quita el aviso
   «Maqueta» y el `noindex`) y `blog/index.html` desde `maqueta/blog.html`.
3. La caja de la newsletter **no se pone** hasta que la newsletter exista de
   verdad. Cuando exista, eso es un formulario nuevo: casilla de
   consentimiento aparte, enlace a privacidad y actualizar la política para
   nombrar el servicio de envío. Antes, skill `seguridad-datos`.
4. Añade «DIARIO» al menú de `index.html` y la sección `#diario`. ⚠️ Añadir un
   enlace al menú obliga a volver a medir el solape con el botón «Hazte
   Miembro» entre 1180 y 2000 px (CLAUDE.md §6). No te fíes de dos capturas.
5. Actualiza en el mismo cambio la tabla de archivos de `CLAUDE.md` §3 y
   §10 (terminología), y quita de aquí lo que ya no esté pendiente.
