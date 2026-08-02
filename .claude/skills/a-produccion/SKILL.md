---
name: a-produccion
description: Checklist completo antes de publicar la web a producción (main branch). Verifica que nada falla en navegadores reales, que los formularios funcionan de verdad, que no hay contenido temporal, que las imágenes se cargan, que no hay errores en consola, y que el sitio es accesible en móvil. Úsala siempre antes de confirmar un push a main.
---

# A Producción — Checklist de Lanzamiento

Este checklist se ejecuta cuando la web está lista para ir a **main branch** y ser visible en producción en todos los navegadores del mundo. No es una prueba de detalles: es la verificación final de que nada está roto.

## Fase 1: Bloqueos Críticos (Debe cumplirse TODO)

- [ ] **¿Hay imágenes temporales o placeholders?** Ninguna foto debe decir "TEMP", "PLACEHOLDER" o tener watermark. Validar: `Portada.jpg` existe para hero video, todas las fotos de gym están en WebP, fotos de instructores son definitivas.
- [ ] **¿El video hero carga sin errores?** `videos/Itaca_Hero_Video.mp4` carga, suena muted, tiene `poster` image, se reproduce en móvil.
- [ ] **¿Los formularios envían de verdad?** 
  - [ ] Web3Forms `WEB3FORMS_ACCESS_KEY` está pegada y no vacía (línea ~60 de index.html).
  - [ ] Llenar contacto + clase de prueba completos en desktop y móvil, verificar que el email llega a `itacajiujitsu@gmail.com`.
  - [ ] Si no llega el email real, es un bloqueo absoluto.
- [ ] **¿Están todos los textos definitivos?** No puede haber:
  - [ ] "PROVISIONAL", "BORRADOR", "TEMPORAL" en ningún sitio.
  - [ ] Secciones `#firstday`, `#kids`, leyenda de horarios solo salen si Cipri las confirmó (sino quedan ocultas o con nota visual).
- [ ] **¿La razón social y NIF aparecen en la política de privacidad?** (Requisito legal para España).
- [ ] **¿Los horarios en HTML coinciden con el objeto JS?** (Ver DECISIONS.md DT-1). No más clases duplicadas/faltantes en el modal.
- [ ] **Ningún archivo sensible en el repo:**
  - [ ] No hay `.env` visible.
  - [ ] No hay claves API en `index.html` (salvo WEB3FORMS_ACCESS_KEY que es pública).
  - [ ] No hay contraseñas en comentarios.

## Fase 2: Funcionamiento en Navegadores Reales

Abrir la web en:

- [ ] **Chrome desktop (1920×1080):** Scroll suave, sin saltos, sin errores en consola.
- [ ] **Safari desktop (si es Mac):** Tipografías se ven igual, vídeos reproducen.
- [ ] **Firefox desktop:** Validar que las variables CSS de `:root` se aplican.
- [ ] **Chrome móvil (390×844, iPhone SE):** Todos los textos legibles sin zoom, botones son 48×48 mínimo.
- [ ] **Safari móvil (iPhone):** Vídeos no se quedan bloqueados, formularios se envían.
- [ ] **Samsung internet o navegador por defecto Android:** Responsive funciona.

**Checklist en cada navegador:**
- [ ] Consola sin errores (salvo warnings de terceros como Google Fonts).
- [ ] Ningún archivo 404 (rojo en red tab de DevTools).
- [ ] Vídeos cargan y se reproducen con poster image.
- [ ] Carousel de fotos responde al click/swipe.
- [ ] Los formularios se ven completos, sin campos cortados.
- [ ] Los campos `required` previenen envío vacío.

## Fase 3: Rutas Críticas de Usuario

**Ruta 1: Visita → Contacto → Email**
- [ ] Usuario abre portada en móvil.
- [ ] Usuario hace scroll, ve "HAZTE MIEMBRO".
- [ ] Clica botón → abre modal de contacto.
- [ ] Rellena nombre, email, teléfono, mensaje.
- [ ] Marca checkbox de consentimiento.
- [ ] Clica "Enviar".
- [ ] Aparece confirmación visual ("Mensaje enviado").
- [ ] El email llega a `itacajiujitsu@gmail.com` con los datos.

**Ruta 2: Visita → Clase de Prueba → Email**
- [ ] Usuario ve botón "CLASE DE PRUEBA".
- [ ] Clica → abre modal de clase de prueba.
- [ ] Selecciona categoría (adulto/niño).
- [ ] Si es niño 4-6 o 7-10: pide edad, ve aviso "lo rellena padre/madre/tutor".
- [ ] Selecciona día de semana → solo aparecen clases de ese día.
- [ ] Rellena todos los campos, marca consentimiento.
- [ ] Envía → confirmación + email en bandeja.

**Ruta 3: Información Legal**
- [ ] Usuario ve enlace "Política de privacidad" en los modales.
- [ ] Clica → abre modal con privacidad completa.
- [ ] Razón social + NIF visibles.
- [ ] Enlace a "Términos de servicio" funciona.

## Fase 4: Rendimiento y Carga

- [ ] Las fotos en WebP cargan sin delay observable (~1-2s en 4G móvil).
- [ ] El vídeo hero es muted y autoplay, no congela la página.
- [ ] Core Web Vitals (si se mide): LCP < 2.5s, FID < 100ms, CLS < 0.1.
- [ ] Lighthouse (Chrome DevTools) score en Móvil ≥ 90 en performance.

## Fase 5: Accesibilidad Básica

- [ ] Los botones tienen texto legible (no solo iconos).
- [ ] El contraste de texto es ≥ 4.5:1 (WCAG AA).
- [ ] La navegación se puede hacer con Tab (sin quedar atrapado).
- [ ] Los modales se pueden cerrar con Esc.
- [ ] Las imágenes tienen `alt` text descriptivo.

## Fase 6: Verificación de Secretos

- [ ] Buscar en todo el código: "password", "token", "api_key", "secret", "bearer".
- [ ] Ningún resultado debe estar en `index.html` en claro.
- [ ] Los únicos identificadores públicos que pueden estar: `WEB3FORMS_ACCESS_KEY` (es pública), Google Maps API key (si es pública), Google Fonts (es pública).

## Fase 7: Últimas Comprobaciones

- [ ] DECISIONS.md está actualizado con cualquier cambio nuevo.
- [ ] CLAUDE.md refleja el estado real del código.
- [ ] No hay ramas temporales sin fusionar.
- [ ] El último commit en `main` tiene mensaje claro y descriptivo.
- [ ] Vercel preview está verde (sin errores de build).
- [ ] El email de contacto `itacajiujitsu@gmail.com` está correcto en código y en políticas.
- [ ] El teléfono `664 78 41 21` es el correcto en sección de contacto.

## Fin de Checklist

Si TODO está marcado ✅, la web está lista para Vercel main → producción.

Si falta algo, **no se publica**. Se regresa a Fase correspondiente, se arregla, y se vuelve a este checklist de arriba.

---

**Última revisión:** 2 de agosto de 2026
**Responsable:** Agente COMPASS V5 + Cipri (verificación final)
