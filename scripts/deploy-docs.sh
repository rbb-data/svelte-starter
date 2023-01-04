#!/usr/bin/env bash

usage() {
  echo -e 'Usage: '"./$(basename $0)"' [--build]

Deploy Histoire documentation site to GitHub pages

  --build \t build before deploying
'
  exit
}

# show help
if [[ "${1-}" =~ ^-*h(elp)?$ ]]; then
  usage
fi

set -o errexit  # exit script when a command fails
set -o nounset  # fail when accessing an unset variable
set -o pipefail  # treats pipeline command as failed when one command in the pipeline fails 
set -o xtrace  # prints every command before execution

# make sure to run from project root
cd $(dirname $0)/..

main() {
  # re-build app if requested
  if [[ "${1-}" =~ ^-*b(uild)?$ ]]; then
    npm run docs:build
  fi

  # navigate into the build output directory
  cd .histoire/dist

  # disable jekyll
  touch .nojekyll

  # commit changes
  git init
  git add -A
  git commit -m 'deploy docs'

  # push to gh-pages branch
  git push -f git@github.com:rbb-data/svelte-starter.git main:gh-pages

  cd -
}

main "$@"
