#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import archieml from 'archieml';

import loadGoogleDoc from './_loadGoogleDoc.js';

async function main() {
  const googleDocId = process.env.GOOGLE_DOC_ID;
  if (!googleDocId) {
    process.stderr.write(
      'Google doc id missing. Set `GOOGLE_DOC_ID` in .env.\n'
    );
    process.exit(1);
  }

  const privateKey = process.env.GOOGLE_DOC_PRIVATE_KEY;
  if (!privateKey) {
    process.stderr.write(
      'Credentials are missing. Set `GOOGLE_DOC_PRIVATE_KEY` in .env.local.\n'
    );
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const preserveStyles = args.length > 0 && args[0] === '--preserve-styles';

  const root = process.cwd();
  let content;
  try {
    content = await loadGoogleDoc(googleDocId, privateKey, preserveStyles);
  } catch {
    process.stderr.write(
      "Content from Google doc couldn't be loaded. " +
        "Check that (i) the doc's id is correct (specified as `GOOGLE_DOC_ID` in .env) and " +
        '(ii) the email address connect@rbb-datenteam.iam.gserviceaccount.com is given read permission.\n'
    );
    process.exit(1);
  }

  const googleDoc = archieml.load(content);
  const out = './src/data/googleDoc.json';
  fs.writeFileSync(path.join(root, out), JSON.stringify(googleDoc, null, 2));
  process.stdout.write(`Written to ${out}\n`);
}

dotenv.config();
dotenv.config({ path: '.env.local' });

main();
