#!/usr/bin/env bash
# Al editar archivos sensibles (base de datos, permisos, autenticación):
# pide confirmación y recuerda invocar la skill `seguridad-datos`.
set -uo pipefail

entrada=$(cat)
ruta=$(printf '%s' "$entrada" | jq -r '.tool_input.file_path // .tool_input.notebook_path // ""')
[ -n "$ruta" ] || exit 0

sensible=""
case "$ruta" in
  *migration*|*migracion*|*supabase*|*.sql) sensible="base de datos / migraciones" ;;
  *auth*|*middleware*|*session*|*sesion*) sensible="autenticación y sesiones" ;;
  *rls*|*polic*|*permis*|*role*|*rol*) sensible="permisos y roles" ;;
  *.env*) sensible="claves y configuración secreta" ;;
esac
[ -n "$sensible" ] || exit 0

motivo="Archivo sensible ($sensible): $ruta. Antes de tocarlo, invoca la skill \`seguridad-datos\` y sigue su checklist (CLAUDE.md §5, regla 2). Confirma este cambio con el dueño del proyecto antes de aplicarlo."

jq -nc --arg r "$motivo" '{
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "ask",
    permissionDecisionReason: $r
  }
}'
exit 0
