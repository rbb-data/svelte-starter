#!/usr/bin/env bash

META_DIR=data/meta

for f in $(find $META_DIR -name '*.json'); do
  base=${f#"$META_DIR/"}
  filename="${base##*/}"
  item="${filename%.json}"
  route="src/routes/${base%.json}.svelte.md"

  # skip if route exists
  [ -f "$route" ] && continue

  # retrieve appropriate template svelte file
  template=""
  case "$base" in 
    actions*)
      template=src/routes/_templates/Action.svelte.md
      ;;
    components*)
      template=src/routes/_templates/Component.svelte.md
      ;;
    stores*)
      template=src/routes/_templates/Store.svelte.md
      ;;
  esac

  # log if no template could be found
  [ $template ] || ( echo "no template found for $route" && continue )

  # copy template file to the route
  mkdir -p "${route%/*}" && cp "$template" "$route"

  # replace placeholder text
  placeholder=%rbb-data.placeholder%
  sed -i '' "s/${placeholder}/${item}/g" $route

  # update navigation
  node scripts/update-navigation.js $route

  echo "created $route"
done
