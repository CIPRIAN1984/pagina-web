# Historial de SEO

Una línea por revisión mensual (el primer lunes de cada mes), escrita por el
ayudante de SEO (`.claude/skills/seo/`). Sirve para comparar mes a mes sin
depender de la memoria de nadie. Lo más reciente, arriba.

Con una web pequeña los números bailan mucho de un mes a otro: no se sacan
conclusiones de un solo mes. A partir de tres meses, sí hay tendencia.

## Web — Google Search Console (`https://www.itacajiujitsu.com/`)

| Mes | Clics | Impresiones | Posición media | «jiu jitsu logroño» | Páginas indexadas | Notas |
|---|---|---|---|---|---|---|
| oct 2026 | — | — | — | — | — | Propiedad dada de alta el 2 de octubre. Todavía no hay datos: tardan 2-3 días en aparecer y unas 4 semanas en tener sentido. |

## Punto de partida (antes de que la web estuviera en Search Console)

No son datos de la web: son de la ficha de Google y de Instagram. Se guardan
para tener con qué comparar.

**Perfil de Empresa de Google** (la ficha del mapa), mayo-octubre 2026:

- 3.658 personas vieron la ficha. 86% desde el móvil (61% búsqueda en móvil,
  25% Maps en móvil).
- Unas 200 interacciones al mes (llamadas, cómo llegar, visitas a la web),
  estables en agosto y septiembre: la web nueva no hizo caer nada.
- Búsquedas que mostraron la ficha: «jiu jitsu» 282, «mma logroño» 217,
  «itaca jiu jitsu, calle barriguelo…» 157, «itaca» 152, «grappling» 91.
  Más de la mitad son de gente que todavía no conocía Itaca.

**Instagram en Google** (Search Console, propiedad `instagram.com/itacabjj`),
2-29 de septiembre de 2026:

- 54 clics desde Google al Instagram, 677 impresiones, posición media ~4.
  8 de cada 10 clics desde el móvil.
- «itaca jiu jitsu» posición 4 · «jiu jitsu logroño» 5,9 · «itaca logroño»
  2,2 · «bjj logroño» 1,9.
- Los reels salen 765 veces en los resultados de vídeo pero casi nadie pincha
  (5 clics).

**Revisión técnica de la web**, 5 de octubre de 2026 (`auditoria.py`): sin
fallos graves. Aviso: la web sirve archivos internos del proyecto
(`CLAUDE.md`, `docs/`, `.claude/`). Los datos de negocio para Google
(JSON-LD, tipo gimnasio con dirección, teléfono y horario) **sí están**: los
crea un script al cargar la página. La primera auditoría dijo que faltaban
porque solo leía el HTML; corregido el 6 de octubre.
