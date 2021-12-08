#!/usr/bin/env bash

META_DIR=data/meta

for f in $(find $META_DIR -name '*.json'); do
  base=${f#"$META_DIR/"}
  filename="${base##*/}"
  item="${filename%.json}"
  route="src/routes/${base%.json}.svelte"

  # skip if route exists
  [ -f "$route" ] && continue

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
  sed -i '' "s@${placeholder}@data/meta/${base}@g" $route

  echo "created $route"
done
