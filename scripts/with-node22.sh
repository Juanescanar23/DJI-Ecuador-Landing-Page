#!/usr/bin/env bash

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: scripts/with-node22.sh <node-script> [args...]" >&2
  exit 1
fi

REQUIRED_NODE=">=20.9.0"

if node -e 'const [major, minor] = process.versions.node.split(".").map(Number); process.exit(major > 20 || (major === 20 && minor >= 9) ? 0 : 1)'; then
  NODE_BIN="$(command -v node)"
elif [[ -x "/usr/local/opt/node@22/bin/node" ]]; then
  NODE_BIN="/usr/local/opt/node@22/bin/node"
elif [[ -x "/opt/homebrew/opt/node@22/bin/node" ]]; then
  NODE_BIN="/opt/homebrew/opt/node@22/bin/node"
else
  echo "Node.js ${REQUIRED_NODE} is required for this project." >&2
  echo "Install Node 22 with: brew install node@22" >&2
  echo "Then add it to your shell PATH with:" >&2
  echo "  echo 'export PATH=\"\$(brew --prefix node@22)/bin:\$PATH\"' >> ~/.zshrc" >&2
  echo "  source ~/.zshrc" >&2
  exit 1
fi

exec "$NODE_BIN" "$@"
