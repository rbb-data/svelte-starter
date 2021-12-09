#!/usr/bin/env bash

META_DIR=data/meta

for f in $(find $META_DIR -name '*.json'); do
  base=${f#"$META_DIR/"}
  item="${base%.json}"
  route="src/routes/${item}.svelte"
  custom="src/lib/custom/${item}/Custom.svelte"

  # retrieve appropriate template svelte file
  template=""
  case "$base" in 
    actions*)
      template=src/routes/_templates/Action.svelte
      ;;
    components*)
      template=src/routes/_templates/Component.svelte
      ;;
    stores*)
      template=src/routes/_templates/Store.svelte
      ;;
  esac

  # log if no template could be found
  [ $template ] || ( echo "no template found for $route" && continue )

  # copy template file to the route
  mkdir -p "${route%/*}" && cp "$template" "$route"

  # replace placeholder text
  placeholder=%rbb-data.placeholder%
  sed -i '' "s@${placeholder}@${item}@g" $route

  # skip if custom route exists
  [ -f "$custom" ] && continue

  # create empty custom component
  mkdir -p "${custom%/*}" && touch "$custom"

  echo "created $route"
done