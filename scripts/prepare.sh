#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="axelar cosmos google "

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./build/$dir" ./
done

# Copy typeRegistry files from build root to package root
cp "./build/typeRegistry.js" ./
cp "./build/typeRegistry.d.ts" ./
cp "./build/typeRegistry.js.map" ./
