#!/usr/bin/env bash
# Al tocar formularios, datos personales o textos legales: pide confirmación y
# recuerda invocar la skill `seguridad-datos`.
#
# En este proyecto toda la web vive en un único index.html, así que no basta con
# mirar el nombre del archivo: hay que mirar QUÉ parte del archivo se está tocando.
set -uo pipefail

entrada=$(cat)
ruta=$(printf '%s' "$entrada" | jq -r '.tool_input.file_path // .tool_input.notebook_path // ""')
[ -n "$ruta" ] || exit 0

sensible=""

# 1) Archivos sensibles por su nombre (por si algún día los hay).
case "$ruta" in
  *.env*) sensible="claves y configuración secreta" ;;
  *migration*|*migracion*|*supabase*|*.sql) sensible="base de datos" ;;
  *auth*|*session*|*sesion*) sensible="autenticación y sesiones" ;;
esac

# 2) Contenido sensible dentro del HTML: formularios, datos personales, textos legales.
if [ -z "$sensible" ]; then
  texto=$(printf '%s' "$entrada" | jq -r '[.tool_input.new_string?, .tool_input.old_string?, .tool_input.content?, (.tool_input.edits? // [] | .[] | .new_string?, .old_string?)] | map(select(. != null)) | join("\n")' 2>/dev/null)
  if printf '%s' "$texto" | grep -qiE 'mailto:|contactForm|trialForm|<form|<input|privacyModal|termsModal|política de privacidad|politica de privacidad|términos y condiciones|terminos y condiciones|consentimiento|RGPD|datos personales|subCategoriaNino|tipoNino|trialEmail|trialTelefono'; then
    sensible="formularios, datos personales o textos legales"
  fi
fi

[ -n "$sensible" ] || exit 0

motivo="Cambio sensible ($sensible) en: $ruta

Antes de aplicarlo, invoca la skill \`seguridad-datos\` y sigue su checklist (CLAUDE.md §5, regla 2). Recuerda que el formulario de clase de prueba recoge datos de MENORES. Confirma este cambio con Cipri antes de aplicarlo."

jq -nc --arg r "$motivo" '{
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "ask",
    permissionDecisionReason: $r
  }
}'
exit 0
