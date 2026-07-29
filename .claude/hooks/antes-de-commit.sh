#!/usr/bin/env bash
# Antes de cada `git commit`: tipos y pruebas. Si fallan, el commit se bloquea.
# Si el proyecto todavía no tiene esos comandos, no molesta: se salta solo.
set -uo pipefail

entrada=$(cat)
comando=$(printf '%s' "$entrada" | jq -r '.tool_input.command // ""')

# Solo nos interesan los commits de verdad, no `git log`, `git commit --help`, etc.
case "$comando" in
  *"git commit"*) ;;
  *) exit 0 ;;
esac
case "$comando" in
  *"--help"*|*"--dry-run"*) exit 0 ;;
esac

raiz="${CLAUDE_PROJECT_DIR:-$(pwd)}"
[ -f "$raiz/package.json" ] || exit 0

fallos=""
for tarea in typecheck test lint; do
  if jq -e --arg t "$tarea" '.scripts[$t] // empty' "$raiz/package.json" >/dev/null 2>&1; then
    salida=$(cd "$raiz" && npm run --silent "$tarea" 2>&1)
    if [ $? -ne 0 ]; then
      fallos="${fallos}

--- npm run ${tarea} ha fallado ---
$(printf '%s' "$salida" | tail -n 40)"
    fi
  fi
done

if [ -n "$fallos" ]; then
  echo "COMMIT BLOQUEADO: el control de calidad no está en verde.${fallos}

Arregla esto antes de volver a intentar el commit. No uses --no-verify." >&2
  exit 2
fi

exit 0
