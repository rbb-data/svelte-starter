import fs from 'fs';

export function makeDirectories(path) {
  if (fs.existsSync(path)) return;
  const dirs = path.split('/').slice(0, -1);
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs.slice(0, i + 1).join('/');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
}
