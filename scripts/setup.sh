#!/usr/bin/env bash

usage() {
  echo 'Usage: '"./$(basename $0)"'

Initializes newly templated project:
  - fills in environment variables
  - updates README
  - updates iframe snippet
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


update_environment_variables() {
  # store current year and month as environment variable
  sed -i.bak 's/{project-creation-date}/'"$project_creation_date"'/g' .env

  # substitute '{project-name}' with the actual project name
  sed -i.bak 's/{project-name}/'"$project_name"'/g' .env
}

update_readme() {
  # update readme
  node scripts/helpers/update-readme.js

  # substitute '{project-creation-date}' with the current date
  sed -i.bak 's/{project-creation-date}/'"$project_creation_date"'/g' README.md

  # substitute '{project-name}' with the actual project name
  sed -i.bak 's/{project-name}/'"$project_name"'/g' README.md

  # substitue README heading with the project name
  sed -i.bak '1s/.*/# '"$project_name"'/' README.md
}

update_iframe_snippet() {
  # substitute '{project-creation-date}' in the iframe snippet
  sed -i.bak 's/{project-creation-date}/'"$project_creation_date"'/g' iframe.html

  # substitute '{project-name}' in the iframe snippet
  sed -i.bak 's/{project-name}/'"$project_name"'/g' iframe.html
}

update_page_title() {
  # substitute '{project-name}' in the html root file
  sed -i.bak 's/{project-name}/'"$project_name"'/g' src/app.html
}

main() {
  # get the current folder name
  project_name=$(basename $(pwd))

  # get the current year and month
  project_creation_date=$(date '+%Y-%m')

  # skip when the project was not templated
  if [[ "$project_name" = 'svelte-starter' ]]; then
    echo 'Project was not templated (current folder name: '"$project_name"')'  >&2
    exit 1
  fi

  update_environment_variables
  update_readme
  update_iframe_snippet
  update_page_title

  # remove all backup files that were created on the fly
  find . -name '*.bak' -type f -delete
}

main "$@"
