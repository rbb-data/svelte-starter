#!/usr/bin/env bash

# this script deploys the build to Google Cloud Storage.
# it is meant to run after `npm run build`

set -x

# make sure to run from project root
cd $(dirname $0)/..

# skip when the project was not templated
[ $(basename $(pwd)) = 'svelte-starter' ] && exit 0

# read base path from command line
base_path=$1

# set google cloud project
gcloud config set project rbb-data-static-file-server

# destination folder in google cloud storage
dst=gs://rbb-data-static/$base_path

# remove folder if exists
gsutil -q stat ${dst}/* && gsutil -m rm -r $dst

# compress and upload files
gsutil -m cp -r -z html,css,js,png,svg,woff build/ $dst

# configure caching
gsutil setmeta -h 'Cache-Control:no-store' ${dst}/**/*.{html,js,css}
gsutil setmeta -h 'Cache-Control:public, max-age=31536000' ${dst}/**/*.png
# gsutil setmeta -h 'Cache-Control:public, max-age=31536000' ${dst}/**/*.{svg,woff}
