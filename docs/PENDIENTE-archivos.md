# Archivos que faltan por subir

`index.html` está en el repositorio, pero **las fotos y los vídeos no**. Sin ellos la web
se abre y funciona, pero se ve con huecos grises.

Estos son los archivos que espera la web, con el nombre exacto. Si un nombre no coincide
(mayúsculas incluidas), esa foto o ese vídeo no aparece.

## Fotos del gimnasio — `images/Itaca/`

`Gym1.webp` · `Gym2.webp` · `Gym3.webp` · `Gym4.webp` · `Gym5.webp` · `Gym6.webp` ·
`Gym7.webp` · `Gym8.webp` · `Gym9.webp` · `Gym10.webp`

El código las trata como si fueran de 1200 × 800 píxeles (horizontales). Si son verticales
o de otra proporción, el zoom del carrusel las mostrará mal.

## Fotos de instructores — `images/Profesores/`

`Cipri.png` · `Boris.png` · `Marta_Pozo.png`

Se ven en vertical (proporción 3:4). Mejor fotos verticales y bien iluminadas: encima va
el nombre en grande, así que conviene que la cara no quede justo en el centro.

## Vídeos — `videos/`

| Archivo | Dónde sale |
|---|---|
| `Itaca_Hero_Video.mp4` | Fondo de la portada, a pantalla completa |
| `Boris_instagram.mp4` | Primer vídeo vertical |
| `Cipri_instagram.mp4` | Segundo vídeo vertical |
| `Marta_instagram.mp4` | Tercer vídeo vertical |
| `Boris2_instagram.mp4` | Cuarto vídeo vertical |

Los cuatro verticales son de proporción 9:16 (formato Instagram).

## Antes de subirlos

- **Comprime los vídeos.** El de la portada lo carga todo el mundo nada más entrar: si pesa
  mucho, la gente con datos móviles se va antes de verlo.
- Las fotos, en `.webp` y del tamaño en el que se ven, no el original de la cámara.
- Si algún vídeo pasa de unos 50 MB, dímelo antes de subirlo: probablemente convenga
  alojarlo fuera del repositorio.

## Además falta

- **Una imagen de respaldo para la portada** (`poster`), que es lo que se ve mientras el
  vídeo carga. Hoy se ve un rectángulo gris. Vale un fotograma bonito del propio vídeo.
- **Un favicon**, el iconito de la pestaña del navegador.
- **Una imagen de vista previa** para cuando se comparta el enlace por WhatsApp o Instagram.
