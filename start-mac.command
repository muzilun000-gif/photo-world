#!/bin/bash
cd "$(dirname "$0")" || exit 1
if ! command -v python3 >/dev/null 2>&1; then
  echo "Install Python 3 from https://www.python.org/downloads/ or open index.html for basic viewing."
  read -r -p "Press Enter to close..."
  exit 1
fi
python3 scripts/serve.py "$@"
