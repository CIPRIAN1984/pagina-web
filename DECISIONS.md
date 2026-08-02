# 📋 DECISIONS.md — Registro Histórico de Decisiones y Reglas de Negocio
## ITACA JIU JITSU | Última actualización: 2 de agosto de 2026

> **Amnesia Cero:** Este archivo es la fuente de verdad persistente. Se actualiza después de cada decisión técnica o de negocio. El agente lo lee al iniciar cada sesión.

---

## 🎯 DECISIONES INQUEBRANTABLES (No pueden cambiar sin aprobación explícita)

### D1: Stack Técnico — Single HTML File
- **Decisión:** El sitio es un único `index.html` (~3.4KB LOC) con CSS y JavaScript incrustados
- **Razón:** Sencillez, no hay dependencias, se abre con doble clic
- **Bloqueado:** SÍ — No refactorizar a React/Next/Astro sin aprobación de Cipri
- **Implicación:** Todos los cambios van en index.html. Estilo en `<style>`. Lógica en `<script>` final.

### D2: Formularios — Web3Forms, No mailto:
- **Decisión:** Contacto y clase de prueba → Web3Forms → itacajiujitsu@gmail.com
- **Razón:** `mailto:` pierde mensajes en móvil y Gmail
- **Bloqueado:** SÍ — La clave `WEB3FORMS_ACCESS_KEY` debe pegarse en línea ~60 de index.html
- **Implicación:** Sin clave = fallback a mailto (temporal). Con clave = funcional.

### D3: Datos de Menores — Consentimiento Obligatorio
- **Decisión:** Formulario de clase de prueba recoge edad (4-6, 7-10 años)
- **Razón:** Requisito legal RGPD para datos de menores
- **Bloqueado:** SÍ — Casilla de consentimiento es mandatoria. Política de privacidad completa obligatoria.
- **Implicación:** Cualquier cambio en este formulario pasa por skill `seguridad-datos`

### D4: Deploy — Vercel con CD automático
- **Decisión:** Rama `claude/new-session-oa3wjo` → push automático a preview. Main → producción
- **Razón:** Verificación rápida sin FTP manual
- **Bloqueado:** SÍ — No cambiar a AWS/netlify sin aprobación
- **Implicación:** Cada git push redeploy en 2-3 min. PR automático si falta.

### D5: Media — WebP para fotos, MP4 para vídeos
- **Decisión:** Fotos optimizadas en WebP (~2-5MB), vídeos en MP4
- **Razón:** Velocidad de carga en móvil (target: IG)
- **Bloqueado:** SÍ — No subir JPG sin comprimir a WebP
- **Implicación:** Reducción 135MB → 31MB en assets

---

## 🔧 DECISIONES ARQUITECTÓNICAS (Shared: agente propone, usuario aprueba)

### A1: Horarios Duplicados (DEUDA TÉCNICA)
- **Estado:** Presente en 2 lugares: tabla HTML (~línea 1820) + objeto JS (`classesForAdult`, etc, ~línea 2324)
- **Riesgo:** Si cambias uno sin actualizar el otro, formulario ofrece clases inexistentes
- **Solución Propuesta:** Centralizar en JS, tabla genera desde JS (refactor futuro)
- **Prioridad:** MEDIA — No bloquea MVP, pero requiere auditoría cada cambio de horario

### A2: Contenido Draft (Borradores IA)
- **Secciones:** "Tu primer día" (#firstday), "Jiu Jitsu para niños" (#kids), leyenda de horarios
- **Estado:** Redactadas por IA, pendiente confirmación/corrección de Cipri
- **Autoridad:** Solo Cipri aprueba cambios de texto. Agente solo propone.

### A3: Vídeos Provisionales
- **Marta:** El vídeo actual es placeholder (reutilizado de Boris2). Requiere contenido final.
- **Resto:** Videos OK, pero compresión posible si presupuesto permite

---

## 📊 DECISIONES DE NEGOCIO (User only: Cipri decide)

### B1: Precios NO en web
- **Decisión:** Los precios no aparecen. La conversación se tiene en persona o por correo.
- **Razón:** Vende ambiente/nivel, no tarifa. Conversación de precio en persona.
- **Autoridad:** Cambiar esto requiere decisión explícita de Cipri.

### B2: No hay Plataforma de Pago
- **Decisión:** Descartada: plataforma de vídeo de pago, masterclass, tienda online.
- **Razón:** MVP simple, no overcomplicate.
- **Autoridad:** Solo Cipri puede reabrir esta decisión.

### B3: Clase de Prueba: ¿Gratuita?
- **Estado:** PENDIENTE de definir. El botón no dice si es gratuita.
- **Acción:** Cipri debe confirmar: ¿"Clase de prueba GRATIS" o solo "Clase de prueba"?

---

## 🎯 PRÓXIMAS FASES (Ordenadas por prioridad)

### Fase 1 (YA HECHA):
- ✅ 4 issues críticos arreglados (formularios, consentimiento, rueda ratón, muted+poster)
- ✅ 3 secciones nuevas añadidas (leyenda, tu primer día, niños)
- ✅ 7 fotos gym (WebP, 1.7-5.1MB)
- ✅ 3 fotos instructores (PNG, 442-734KB)
- ✅ 5 vídeos descargados (225MB total)

### Fase 2 (PENDIENTE):
- ⏳ Cipri confirma/corrige textos de borradores (firstday, kids, leyenda)
- ⏳ Vídeo final para Marta (reemplazar placeholder)
- ⏳ Imagen Portada.jpg (fotograma del hero video, 1920×1080)
- ⏳ Cipri pega clave Web3Forms (itacajiujitsu@gmail.com funcione)
- ⏳ Completar razón social + NIF en política de privacidad

### Fase 3 (FUTURA):
- 📅 Favicon (icono de pestaña)
- 📅 Imagen de vista previa (1200×630, para compartir en redes)
- 📅 Tipografías autohospedadas (Google Fonts → local, privacidad)
- 📅 SEO avanzado (LocalBusiness schema, meta description)

---

## 🚨 DEUDA TÉCNICA REGISTRADA

| ID | Descripción | Impacto | Prioridad | Estado |
|----|-------------|---------|-----------|--------|
| DT-1 | Horarios duplicados (HTML + JS) | MEDIA | Bloqueador a largo plazo | Registrado |
| DT-2 | Imagen Portada.jpg falta | BAJA | Visual durante carga | Pendiente archivo |
| DT-3 | Tipografías Google (privacidad) | BAJA | Privacidad/RGPD | Backlog futuro |
| DT-4 | Razón social + NIF (legal) | MEDIA | Requisito legal España | Pendiente info Cipri |

---

## 📝 HISTORIAL DE CAMBIOS

### 2026-08-02
- Creado DECISIONS.md con estructura V5 COMPASS
- Documentadas 5 decisiones inquebrantables
- Registrada deuda técnica y fases futuras
- Autoridades clarificadas (User only / Shared / Agent)
