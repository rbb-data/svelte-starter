#!/usr/bin/env bash

META_DIR=data/meta

for f in $(find $META_DIR -name '*.json'); do
  base=${f#"$META_DIR/"}
  filename="${base##*/}"
  item="${filename%.json}"
  route="src/routes/${base%.json}.svelte.md"

  node scripts/add-route-to-nav.js $route
done
