#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

async function main() {
  const packageFile = path.join(process.cwd(), 'package.json');
  const pck = JSON.parse(fs.readFileSync(packageFile));

  const devDeps = Object.keys(pck.devDependencies);
  let depsToRemove = ['@babel/core', 'babel-loader', 'svelte-loader'];
  depsToRemove.push(...devDeps.filter((dep) => dep.startsWith('@storybook/')));

  for (const dep of depsToRemove) {
    if (pck.devDependencies[dep]) {
      delete pck.devDependencies[dep];
      process.stdout.write(`Removed ${dep}.\n`);
    } else {
      process.stdout.write(`Skipped ${dep}.\n`);
    }
  }

  fs.writeFileSync(
    path.join(process.cwd(), 'test.json'),
    JSON.stringify(pck, null, 2)
  );
}

main();
