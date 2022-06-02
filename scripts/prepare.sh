#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="axelar-core"

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./build/$dir" ./
done
