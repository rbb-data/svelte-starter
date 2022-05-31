#!/usr/bin/env bash

# this script is meant to run once after having cloned the repository.
# because it is setup in `.scripts.postinstall` in `package.json`, it will
# automatically run when doing an `npm install`.

# print every executed line and abort when one fails
set -ex

# skip when running in CI
[ -z "$CI" ] || exit 0

# make sure to run from project root
cd $(dirname $0)/..

# skip when the project was not templated
[ $(basename $(pwd)) = 'svelte-starter' ] && exit 0

# prevent script from running multiple times
if [ -d .git ]; then
  [ "$(git log --oneline | wc -l)" -eq 1 ] || exit 0
fi

# remove documentation
[ -d docs ] && rm -rf docs/

# substitute '{project-name}' with the current folder name
sed -i '' 's/{project-name}/'"$(basename $(pwd))"'/g' package.json .env iframe.html scripts/deploy-to-gc-storage.sh
