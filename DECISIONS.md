# 📋 DECISIONS.md — Registro Histórico de Decisiones y Reglas de Negocio
## ITACA JIU JITSU | Última actualización: 4 de agosto de 2026

> **Amnesia Cero:** Este archivo es la fuente de verdad persistente. Se actualiza después de cada decisión técnica o de negocio. El agente lo lee al iniciar cada sesión.

---

## 🎯 DECISIONES INQUEBRANTABLES (No pueden cambiar sin aprobación explícita)

### D1: Stack Técnico — HTML estático, sin framework
- **Decisión:** `index.html` (escritorio) y `movil.html` (móvil, app completa) con CSS y JavaScript incrustados. Comparten `js/itaca-horario.js`, `js/itaca-formularios.js` y las páginas de `legal/`.
- **Razón:** Sencillez, no hay dependencias, se abre con doble clic
- **Bloqueado:** SÍ — No refactorizar a React/Next/Astro sin aprobación de Cipri
- **Implicación:** Estilo en `<style>` de cada página. Lógica compartida en `js/`. No crear más archivos sueltos sin motivo.

### D2: Formularios — Web3Forms, No mailto:
- **Decisión:** Contacto y clase de prueba → Web3Forms → itacajiujitsu@gmail.com
- **Razón:** `mailto:` pierde mensajes en móvil y Gmail
- **Bloqueado:** SÍ — La clave vive en `js/itaca-formularios.js`, `CONFIG.claveWeb3Forms` (no en `index.html`)
- **Estado:** ✅ Clave puesta, formularios funcionales en las dos webs. Envío real hasta la bandeja de entrada NO verificado por el agente (no se ha probado para no generar un correo de prueba real).

### D3: Datos de Menores — Consentimiento Obligatorio
- **Decisión:** Formulario de clase de prueba recoge edad (4-6, 7-10 años)
- **Razón:** Requisito legal RGPD para datos de menores
- **Bloqueado:** SÍ — Casilla de consentimiento es mandatoria en los dos formularios (escritorio y móvil). Política de privacidad completa obligatoria.
- **Implicación:** Cualquier cambio en estos formularios pasa por la skill `seguridad-datos`

### D4: Deploy — Vercel con CD automático
- **Decisión:** Rama `claude/new-session-oa3wjo` → push automático a preview (PR #1). Main → producción
- **Razón:** Verificación rápida sin FTP manual
- **Bloqueado:** SÍ — No cambiar a AWS/Netlify sin aprobación
- **Implicación:** Cada git push redeploy en 2-3 min. `main` todavía no existe.

### D5: Media — WebP para fotos, MP4 para vídeos
- **Decisión:** Fotos optimizadas en WebP, vídeos en MP4, con `preload="none"` en los que no son la portada
- **Razón:** Velocidad de carga en móvil (target: IG)
- **Bloqueado:** SÍ — No subir JPG/PNG sin comprimir a WebP
- **Implicación:** Repositorio de media ~20MB (antes 24MB; se retiró un vídeo de portada que ya no se usaba — ver A3).

### D6: Paleta sin color — blanco, negro y grises
- **Decisión:** Sin beige, sin verde. Referencia de diseño: artofjiujitsu.com.
- **Razón:** Decisión estética explícita de Cipri (julio 2026), aplicada primero en `movil.html` y después extendida a `index.html`.
- **Bloqueado:** SÍ — No reintroducir color de marca sin que Cipri lo pida de nuevo.

---

## 🔧 DECISIONES ARQUITECTÓNICAS (Shared: agente propone, usuario aprueba)

### A1: Horarios Duplicados — ✅ RESUELTO (4 de agosto de 2026)
- **Estado anterior:** presente en 3 sitios (tabla HTML, objeto JS del formulario, y una tercera copia en `movil.html`).
- **Solución aplicada:** centralizado en `js/itaca-horario.js`, único origen que leen `index.html` y `movil.html`. Verificado comparando las 21 combinaciones (3 categorías × 7 días) contra el comportamiento anterior.
- **Sigue así:** cualquier cambio de horario se hace en ese archivo y sale solo en los dos sitios.

### A2: Contenido Draft (Borradores IA)
- **Secciones:** "Tu primer día" (`#firstday`), "Jiu Jitsu para niños" (`#kids`), leyenda de horarios — en las dos webs.
- **Estado:** Redactadas por IA, pendiente confirmación/corrección de Cipri. Sigue pendiente.
- **Autoridad:** Solo Cipri aprueba cambios de texto. Agente solo propone.

### A3: Vídeos e imágenes provisionales
- **Vídeo de portada de escritorio:** el original (`Itaca_Hero_Video.mp4`) resultó ser una animación de logo casi en negro, inservible como fondo en bucle. Se sustituyó por una foto fija (`Gym1.webp`) y **se borró el vídeo del repositorio** (no se usaba en ningún sitio — 4,5MB de peso muerto). Si se graba un vídeo apaisado del gimnasio, puede volver a activarse.
- **`images/Itaca/Portada.jpg`:** también se borró — era el poster pensado para el vídeo de portada de escritorio, que ya no existe. El poster de móvil (`Portada-movil.jpg`) sí sigue en uso.
- **Marta:** tiene su propio archivo de vídeo (`Marta_instagram.mp4`), ya no comparte archivo con Boris. Contenido del vídeo no verificado por el agente (no reproduce vídeo).

### A4: Accesibilidad y SEO técnico — mejoras aplicadas (4 de agosto de 2026)
- Contraste corregido en `movil.html` (`--grey` de `#8b8b8b` a `#707070`: pasaba 3.41:1, ahora ~4.95:1, cumple WCAG AA).
- Trampa de foco añadida a los modales de `index.html`: `Tab` ya no se escapa hacia botones tapados detrás del modal.
- `<main>` añadido en ambas webs para que un lector de pantalla distinga cabecera/contenido/pie.
- SEO: meta description, Open Graph, `favicon.svg`/`favicon.ico`/`apple-touch-icon.png` (marca provisional en blanco y negro — Cipri puede sustituirla por el logo real cuando lo tenga) y `robots.txt` añadidos a las dos webs.
- **Pendiente:** `sitemap.xml` no se ha creado porque necesita el dominio final, que todavía no está decidido (ver D4). Cuando haya dominio, añadirlo es trivial.

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

### B3: Clase de Prueba — ✅ ES GRATUITA (confirmado por Cipri, 4 de agosto de 2026)
- **Decisión:** La clase de prueba no tiene coste. Confirmado explícitamente por Cipri.
- **Dónde se dice:** meta description de las dos webs, y ahora también en el propio formulario (`index.html` y `movil.html`: "La primera clase no tiene coste").
- **No tocado:** los botones "Clase de Prueba" del menú/cabecera siguen sin la palabra "gratis" para no arriesgar que se corte el texto en pantallas estrechas — es un cambio de maquetación, no de contenido; si Cipri quiere que se vea también ahí, se hace aparte.

---

## 🚨 DEUDA TÉCNICA REGISTRADA

| ID | Descripción | Impacto | Prioridad | Estado |
|----|-------------|---------|-----------|--------|
| DT-1 | Horarios duplicados (HTML + JS) | MEDIA | — | ✅ Resuelto 2026-08-04 (A1) |
| DT-2 | Imagen Portada.jpg falta | BAJA | — | ✅ Obsoleto: el archivo ya no hace falta (A3) |
| DT-3 | Tipografías Google (privacidad) | BAJA | Privacidad/RGPD | Sigue en backlog |
| DT-4 | Razón social + NIF (legal) | MEDIA | — | ✅ Resuelto 2026-08-04: Cipri facilitó el NIF (G26554923) vía certificado de la FNMT-RCM. Añadido a `legal/privacidad.html`. La dirección fiscal del certificado (Avda. Colón 38, 8A) difiere de la dirección del gimnasio ya publicada (Polígono Cantabria); se ha dejado la del gimnasio por ser la de contacto real — si Cipri prefiere la fiscal, se cambia. Los datos personales del representante (DNI, domicilio, teléfono particular) NO se han publicado: no hacen falta en la web pública. |
| DT-5 | `legal/terminos.html` parece texto genérico sin revisar (cuotas, exención de responsabilidad por lesiones) | MEDIA | Riesgo legal si una cláusula no es válida en España | Nuevo — pendiente de que lo revise alguien con criterio legal, no la IA |
| DT-6 | Sin trampa antispam propia de Web3Forms confirmada (más allá del honeypot del formulario) | BAJA | Spam si se filtra la clave pública | No verificable desde el código — revisar en el panel de Web3Forms |

---

## 📝 HISTORIAL DE CAMBIOS

### 2026-08-04 — Auditoría prepublicación
- Consolidado el horario en `js/itaca-horario.js` (DT-1 resuelto)
- Formularios compartidos en `js/itaca-formularios.js`, con clave de Web3Forms ya puesta
- Extraídos los textos legales a `legal/privacidad.html` y `legal/terminos.html`
- `movil.html` pasó de mockup a app completa, con sus propios paneles y formularios
- Corregido el contraste de `--grey` en móvil, añadida trampa de foco a los modales de escritorio, añadido `<main>` en ambas webs
- Añadidos meta description, Open Graph, favicon y robots.txt (faltaba sitemap.xml: pendiente de dominio)
- Borrados `videos/Itaca_Hero_Video.mp4` e `images/Itaca/Portada.jpg` (huérfanos, ya no se usaban)
- Retirada la dependencia `@vercel/blob` de `package.json` (no se usaba en ningún archivo) y eliminado `package.json`/`package-lock.json` al quedar vacíos — el proyecto no usa npm
- Confirmado por Cipri: la clase de prueba es gratuita (B3 resuelto)
- `CLAUDE.md` puesto al día: describía un `WEB3FORMS_ACCESS_KEY` vacío y una web sin publicar que ya no correspondían a la realidad

### 2026-08-02
- Creado DECISIONS.md con estructura V5 COMPASS
- Documentadas 5 decisiones inquebrantables
- Registrada deuda técnica y fases futuras
- Autoridades clarificadas (User only / Shared / Agent)
