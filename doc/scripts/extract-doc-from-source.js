#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import glob from 'glob';

import { makeDirectories } from './utils.js';
import {
  extractDocFromJsFile,
  extractDocFromSvelteFile,
} from './source-code-analysis.js';

import config from '../doc.config.js';

const srcPrefix = '../src/lib/';
const outPrefix = 'data/meta/';

function ignore(file, folders = []) {
  // ignore index files
  const basename = path.basename(file);
  if (basename === 'index.js') return true;

  // ignore given folders
  const dir = path.dirname(file).replace(srcPrefix, '');
  if (folders.some((folder) => dir.startsWith(folder))) return true;

  return false;
}

function main() {
  const files = glob
    .sync(srcPrefix + '**/*.{js,svelte}')
    .filter((file) => !ignore(file, config.ignoreFolders));

  files.forEach((file) => {
    console.log('extract doc from', file);

    // extract data for documentation
    const data = file.endsWith('.js')
      ? extractDocFromJsFile(file)
      : extractDocFromSvelteFile(file);

    // write to file
    const out = file
      .replace(srcPrefix, outPrefix)
      .replace(path.extname(file), '.json');
    makeDirectories(out);
    fs.writeFileSync(out, JSON.stringify(data, null, 2));
  });
}

main();
