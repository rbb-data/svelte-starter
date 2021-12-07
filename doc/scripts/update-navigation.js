import fs from 'fs';
import path from 'path';

function main() {
  const filename = 'data/nav.json';
  const route = process.argv[2];

  const navSections = JSON.parse(fs.readFileSync(filename, 'utf-8'));

  const urlPrefix = route
    .replace('src/routes', '')
    .split('/')
    .slice(0, -1)
    .join('/');

  const navSection = navSections.find((s) => s.urlPrefix === urlPrefix);

  if (!navSection) {
    console.log('Navigation section not found for urlPrefix', urlPrefix);
    process.exit(0);
  }

  const item = path.basename(route).replace('.svelte.md', '');
  if (!navSection.items.includes(item)) {
    navSection.items.push(item);
    console.log('added', item, 'to navigation section', navSection.heading);
  }

  fs.writeFileSync(filename, JSON.stringify(navSections, null, 2));
}

main();
