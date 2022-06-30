#!/usr/bin/env node

/** Remove sections from the README file */

import fs from 'fs';
import path from 'path';

// must be sorted according to their appearance
const sectionsToRemove = [
  '## Get started',
  '### `npm run docs`',
  '### `npm run docs:build`',
  '### `npm run docs:deploy`',
];

function main() {
  const filename = 'README.md';
  const packageFile = path.join(process.cwd(), filename);
  const readme = fs.readFileSync(packageFile, 'utf-8');

  let readmeLines = readme.split('\n');

  for (let s = sectionsToRemove.length - 1; s >= 0; s--) {
    let section = sectionsToRemove[s];
    const level = section.match(/(#+).*/m)[1];

    let start, end;
    for (let i = 0; i < readmeLines.length; i++) {
      const line = readmeLines[i];
      if (start && line.startsWith(level + ' ')) {
        end = i;
        break;
      }
      if (line.startsWith(section)) start = i;
    }

    if (!end) end = readmeLines.length - 1;

    readmeLines.splice(start, end - start);

    process.stdout.write(`Removed ${section}.\n`);
  }

  fs.writeFileSync(path.join(process.cwd(), filename), readmeLines.join('\n'));
  process.stdout.write(`Written to ${filename}\n`);
}

main();
