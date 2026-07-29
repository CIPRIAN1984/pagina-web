---
name: flujo-de-trabajo
description: Ramas, pull requests y publicación de la web. Úsala antes de crear una rama, abrir o fusionar un PR, subir archivos pesados (fotos, vídeos) o publicar la web, y siempre justo después de que se fusione un PR.
---

# Flujo de trabajo

## Estado actual del repositorio

⚠️ **Todavía no hay rama `main`.** El repositorio se creó vacío y la rama de trabajo
(`claude/new-session-oa3wjo`) es la única que existe, así que no se puede abrir un pull
request contra nada. En cuanto exista `main`, aplica todo lo de abajo.

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

- Uno por cambio con sentido propio. Un PR gigante no se puede revisar ni deshacer.
- Título en castellano, describiendo el efecto: *"El horario ya se ve entero en el móvil"*.
- En el cuerpo: qué cambia, qué tiene que probar Cipri a mano, qué queda pendiente.

⚠️ **Si un PR tiene conflicto de fusión, GitHub NO ejecuta ningún control y no avisa.**
El PR parece "sin problemas" porque no hay nada en rojo — pero es que no se ha ejecutado nada.
Comprueba `mergeable_state` antes de dar nada por verde.

## Fotos y vídeos

Los vídeos ocupan mucho y Git no los maneja bien: una vez subido un archivo pesado, se
queda en el historial para siempre aunque lo borres después.

- **Antes de subir un vídeo, comprímelo.** Un vídeo de portada por encima de 5 MB hace
  que la web tarde en cargar en el móvil y consuma datos del visitante.
- Las fotos, en `.webp` y a la medida en la que se ven; no subir originales de la cámara.
- Si algún vídeo pasa de ~50 MB, para y habla con Cipri antes de subirlo: probablemente
  convenga alojarlo fuera del repositorio.

## Publicación

La web todavía no está publicada en ningún sitio. Cuando se decida dónde:

1. Abrirla en local y comprobarla entera (ver la skill `calidad`).
2. Comprobarla en móvil, no solo en escritorio.
3. Publicar.
4. Abrir la dirección real y comprobar lo que se pueda; lo que no, decirle a Cipri
   exactamente qué abrir y qué debe ver.

**Trabajo terminado = probado.** Si no se ha comprobado, no está terminado, y se dice así.
