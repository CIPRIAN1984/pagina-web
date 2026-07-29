# [NOMBRE DEL PROYECTO] — Memoria del proyecto

> Referencia maestra para trabajar en este repositorio. Léela antes de proponer nada.
> Si algo contradice lo que ves en el código, **manda el código** — y avisa al dueño del conflicto.

> 🚧 **ESTADO: SIN RELLENAR.** El repositorio todavía no tiene código. Los apartados
> marcados con `[corchetes]` están pendientes de completar con los datos reales del
> proyecto (qué es, stack, tablas, rutas). El apartado 0 y el 5 ya valen tal cual.
> Al escribir la primera línea de código, se rellena esto **en el mismo cambio**.

---

## 0. CÓMO TRABAJAR CON [NOMBRE] (lo más importante)

**[NOMBRE] no es desarrollador.** Te habla en lenguaje natural, en castellano, y describe **lo que quiere conseguir**, no cómo hacerlo. Tú traduces eso a decisiones técnicas.

**Qué se espera de ti:**

1. **Decide tú lo técnico.** No le preguntes qué librería, qué patrón, qué nombre de tabla o si prefiere CSV o JSON. Elige lo mejor y explica en una línea por qué.
2. **Pregunta solo lo que él puede decidir mejor que tú**: qué debe hacer el producto, qué texto ve el usuario, qué prioridad tiene algo, si asume un riesgo. Nunca detalles de implementación.
3. **Explica en cristiano.** Nada de jerga sin traducir. Si dices una sigla, añade qué es en una frase. Si algo es un riesgo, dilo con consecuencias reales ("alguien bloqueado podría seguir viendo sus datos"), no con vocabulario técnico.
4. **Sé honesto con los fallos.** Si algo no funciona, no lo maquilles. Si te equivocaste, dilo claro y arréglalo. Él confía en lo que le dices y no puede verificarlo por su cuenta.
5. **Verifica antes de afirmar.** No digas "ya funciona" sin haberlo comprobado. Si no puedes comprobarlo (login, correos, base de datos en producción), **dilo y dile exactamente qué tiene que probar él**.
6. **Trabajo terminado = probado.** Lint, tipos, pruebas y build en verde antes de decir que está hecho.
7. **Los pasos manuales, dáselos masticados.** SQL listo para copiar y pegar, con dónde pegarlo. Nunca "aplica la migración".

**Cómo presentar el trabajo:** qué has hecho, qué tiene que hacer él (si algo), y qué queda pendiente. Sin volcados técnicos salvo que los pida.

---

## 1. Qué es [NOMBRE DEL PROYECTO]

[Una o dos frases: qué es y para quién.]

**Propósito real:** [qué problema resuelve de verdad, más allá de la descripción funcional]

**Tesis del producto:** [qué lo hace distinto. Lo que NO es también vale: "no es una app de X"]

**Decisiones de producto ya tomadas — no volver a proponerlas:**
- ❌ [funcionalidad descartada] — [por qué]
- ⏸️ [funcionalidad aparcada] — [por qué]

> Esta lista es de las partes más valiosas de este archivo. Cada vez que se descarte
> algo, se apunta aquí para no perder tiempo reproponiéndolo dentro de tres meses.

---

## 2. Stack

- **Framework:** [p. ej. Next.js 14 App Router, TypeScript]
- **UI:** [p. ej. Tailwind + componentes propios en `src/components/ui/`]
- **Auth + BD:** [p. ej. Supabase (Auth, PostgreSQL, RLS)]
- **Deploy:** [p. ej. Vercel]. Producción: `[url]`
- **Pruebas:** [p. ej. vitest (`npm test`)]
- **Control automático:** [p. ej. GitHub Actions en cada PR y cada cambio a `main`]

**Comandos:** `npm run lint` · `npm run typecheck` · `npm test` · `npm run build`

---

## 3. Modelo de datos (estado real)

> Mantén esto al día. Una memoria que describe un sistema que ya no existe
> hace que la IA tome decisiones sobre una realidad falsa. Ya ha pasado.

| Tabla | Para qué | Notas |
|---|---|---|
| `[tabla]` | [para qué sirve] | [relaciones, cascadas, trampas] |

---

## 4. Cuentas y permisos

> Separa siempre estos cuatro conceptos. Confundirlos es el fallo clásico.

| Concepto | Dónde vive | Qué es |
|---|---|---|
| **Rol** | `[tabla]` | Permiso real. Decide qué puedes hacer. |
| **Capacidad** | `[tabla]` | Funciones habilitadas. |
| **Modo** | `[campo]` | **Solo experiencia de UI.** Nunca da permisos. |
| **Estado** | `[campo]` | Si la cuenta está activa o bloqueada. |

**Reglas que no se tocan** (con pruebas que las vigilan):
- [regla 1]
- El **modo nunca eleva permisos**. Un modo no permitido cae al primero permitido.

---

## 5. Seguridad — reglas NO negociables

1. **No cambiar Auth, base de datos ni permisos sin avisar primero.** (Hay un automatismo que lo recuerda, ver §8.)
2. **Antes de tocar permisos, invoca la skill `seguridad-datos`** y sigue su checklist. No es opcional.
3. **No tocar producción sin preview.**
4. **Migraciones**: siempre `IF NOT EXISTS` / `DROP ... IF EXISTS`. Nunca destructivas sin confirmación.
5. **Claves de servidor (`service_role` o equivalente)**: solo servidor, nunca en cliente. Saltan todos los permisos: úsalas solo tras validar al llamante.
6. **No borrar datos de producción.** No renombrar tablas.

---

## 6. Rutas y flujos

**Públicas:** [listar]
**Protegidas:** [listar]

**Gates de acceso, en este orden:** [p. ej. sin sesión → login; bloqueado → pantalla de bloqueo; sin nombre → bienvenida]

**Configuración externa ya hecha** (no rehacer): [p. ej. URL del sitio, confirmación de email, plantillas de correo]

---

## 7. Pruebas y control automático

`tests/` con [herramienta] — [N] casos que vigilan:
- **Permisos**: quién entra dónde, que un modo no eleve permisos.
- **Datos que salen al exterior** (CSV, exportaciones): formato, escapes, fórmulas.
- **Validación de entradas externas** (destinos de redirección).
- **Invariantes de seguridad**: que el candado siga siendo el correcto.

**Si tocas permisos y una prueba falla, la prueba tiene razón.** Están puestas justo para eso.

⚠️ **Si un PR tiene conflicto de fusión, GitHub NO ejecuta el control y no avisa.** Comprueba `mergeable_state` antes de dar nada por verde.

---

## 8. Automatismos activos (`.claude/settings.json`)

- **Antes de `git commit`**: se ejecutan tipos y pruebas. Si fallan, **el commit se bloquea**.
- **Al editar archivos sensibles** (base de datos, permisos, autenticación): pide confirmación y recuerda invocar la skill de seguridad.

No dependen de que la IA se acuerde: los ejecuta la herramienta.

---

## 9. Convenciones

- [p. ej. Componentes de servidor por defecto; `"use client"` solo si hay interactividad]
- [p. ej. Usuario siempre vía `getSessionUser()`]
- Textos de UI en castellano. Jerga técnica interna en inglés.
- Comentarios solo para explicar el **porqué** no evidente.
- **No añadir dependencias sin permiso.**

### Flujo de ramas
Rama de trabajo: `[nombre-de-rama]`. Los PR se fusionan con **squash**.

⚠️ Tras cada fusión, **parte siempre de `main` actualizado**:
`git fetch origin main && git checkout -B <rama> origin/main`
Si no, la rama arrastra commits duplicados y provoca conflictos. Ver la skill `flujo-de-trabajo`.

---

## 10. Terminología (UI → código)

| Lo que ve el usuario | Cómo se llama en el código |
|---|---|
| [término UI] | [nombre técnico] |

---

## 11. Documentación y skills

- `docs/` — [qué hay]
- `.claude/skills/seguridad-datos/` — **obligatoria antes de tocar permisos**
- `.claude/skills/producto/` — decisiones de producto y textos
- `.claude/skills/calidad/` — QA y filosofía de pruebas
- `.claude/skills/flujo-de-trabajo/` — ramas, PR, migraciones, puesta en producción
- `.claude/skills/patrones/` — arquitectura reutilizable
- `.claude/commands/` — `/estado`, `/migracion`, `/a-produccion`
