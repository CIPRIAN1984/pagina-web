# Material para la web — lista para el fotógrafo

Medidas sacadas del código de `index.html`, no estimadas. Si cambia el diseño,
cambian: revisar antes de una sesión grande.

Versión enlazable para reenviar:
https://claude.ai/code/artifact/1767c637-dbf6-4290-ab13-d5ff98db3f82

## Resumen

| Material | Cantidad | Formato | Orientación |
|---|---|---|---|
| Fotos del gimnasio | 25 – 40 | JPEG | Vertical 3:4 |
| Retratos de instructores | 6 | JPEG | Vertical 3:4 |
| Vídeo portada (ordenador) | 1 – 2 | MP4 | Horizontal 16:9 |
| Vídeo portada (móvil) | 1 – 2 | MP4 | Vertical 9:16 |
| Vídeos cortos (reels) | 4 – 8 | MP4 | Vertical 9:16 |

**Casi todo en vertical.** La web está pensada para el móvil. Lo horizontal se
recorta por los lados y se pierde media escena.

## Detalle

### Fotos del gimnasio — 25 a 40
Carrusel de portada + galería completa. Se rotan cada pocos meses.
- Proporción **3:4 vertical** (`.gallery__item` y `.card` usan `aspect-ratio: 3/4`)
- Mínimo **1600 × 2133 px**, ideal **2400 × 3200 px**
- JPEG calidad máxima, sRGB. Sin límite de peso: se optimizan aquí.
- Contenido: entrenamiento real, detalle de técnica, sala vacía y limpia,
  recepción, kimonos, manos y agarres de cerca. Adultos e infantil.

### Retratos de instructores — 6
Cipri, Boris, Marta y los tres que faltan (infantiles y mañanas).
- Proporción **3:4 vertical** (`.instructor-card`)
- Mínimo **1200 × 1600 px**, ideal **1800 × 2400 px**
- Plano medio o de cintura para arriba, fondo del propio gimnasio.
- ⚠️ El nombre se escribe **sobre el centro** de la foto: la cara debe quedar en
  la mitad superior.
- Mismo criterio de luz y encuadre en las seis.

### Vídeo de portada, ordenador — 1 o 2
Ahora hay una foto fija porque no existe ningún vídeo horizontal aprovechable.
- **16:9 horizontal**, mínimo 1920 × 1080 (mejor 3840 × 2160)
- 15 – 25 segundos, MP4 (H.264 o H.265)
- Se reproduce **en silencio**: el audio da igual.
- Movimiento continuo para que el bucle no se note.
- **Centro despejado**: encima van el título y dos botones.
- Sin texto ni logos quemados, sin intro ni fundido a negro.

### Vídeo de portada, móvil — 1 o 2
Un horizontal en móvil se ve al 19 % del centro del fotograma; por eso va aparte.
- **9:16 vertical**, mínimo 1080 × 1920
- 15 – 25 segundos, MP4. Mismas reglas que el de ordenador.
- Ya hay uno funcionando (`videos/Itaca_Hero_Mobile.mp4`).

### Vídeos cortos (reels) — 4 a 8
Sección «Itaca en movimiento». En móvil se abren a pantalla completa.
- **9:16 vertical**, mínimo 1080 × 1920 (`.reel-item` usa `aspect-ratio: 9/16`)
- 15 – 30 segundos, MP4, **con audio**
- Aquí **sí** valen montajes con música y texto encima: es el formato esperado.
- Los archivos originales, no descargados de Instagram.

## Entrega

- **Originales, sin tocar.** Nada de comprimir, redimensionar ni "guardar para
  web". Sin marcas de agua.
- Por Google Drive a la carpeta `Material Pagina Web`, o WeTransfer a
  itacajiujitsu@gmail.com
- Nombres que digan qué son: `tatami-adultos-01.jpg`, `retrato-boris.jpg`,
  `portada-horizontal-01.mp4`

## Luz y tono — lo que más se va a notar

La referencia que le gusta a Cipri (artofjiujitsu.com) va sobre **fondo blanco**.
Ahí la foto oscura se convierte en una mancha; la foto luminosa se funde con el
papel y parece de revista. Ellos graban kimonos blancos sobre tatami claro con
mucha luz. El material actual de Itaca es lo contrario: rashguard negro, tatami
gris, luz de fluorescente.

**Esto no se arregla con diseño, se arregla al disparar.** Lo que pedimos:

- **Sobreexponer ligeramente**, más de lo que pediría el instinto. Buscamos
  imagen luminosa, no dramática.
- **Clases con kimono (Gi) para la mayoría de las fotos.** El blanco del kimono
  es lo que da el aire de las webs premium. El No Gi, en negro, para unas pocas.
- **Fondos limpios**: pared blanca, tatami despejado. Sin bolsas, botellas ni
  mochilas en el encuadre.
- **Luz difusa**, no flash directo. Si se puede, con las persianas abiertas.
- **Sin filtros ni virados de color.** Se entrega neutro y ya se ajusta aquí.

## Avisos

- **Nada horizontal salvo la portada de ordenador.** Hoy 6 de las 7 fotos del
  gimnasio están en horizontal y hay que recortarlas por los lados.
- **Caras de menores: permiso firmado.** Hay clases de 4 a 10 años. Sin
  autorización escrita del tutor, grabar de espaldas o en plano general.

## Defectos actuales que esto arregla

| Archivo | Problema |
|---|---|
| `Gym1–Gym6.webp` | 1800×1200 horizontal, se recortan a 3:4 |
| `Marta_Pozo.png` | 800×534 **horizontal y de baja resolución** para una ficha vertical |
| `Itaca_Hero_Video.mp4` | Animación de logo, casi todo negro: no vale de fondo |
