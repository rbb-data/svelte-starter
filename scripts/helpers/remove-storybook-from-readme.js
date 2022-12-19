#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import removeSectionsFromMarkdown from './remove-sections-from-markdown.js';

function main() {
  const filename = 'README.md';
  const readmeFile = path.join(process.cwd(), filename);

  // must be sorted according to their appearance
  const sectionsToRemove = [
    '### `npm run docs`',
    '### `npm run docs:build`',
    '### `npm run docs:deploy`',
  ];

  let readme = fs.readFileSync(readmeFile, 'utf-8');
  readme = removeSectionsFromMarkdown(readme, sectionsToRemove);

  fs.writeFileSync(readmeFile, readme);
  process.stdout.write(`Written to ${filename}\n`);
}

main();
