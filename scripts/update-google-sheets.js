#!/usr/bin/env node

/**
 * This script loads and parses content from a Google sheet. The parsed data
 * tables are then written to `src/data/google-sheets/*.csv`.
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { csvFormat } from 'd3-dsv';

import { loadGoogleSheet } from './helpers/load-from-google.js';

async function main() {
  // read sheet id from environment
  const googleSheetId = process.env.GOOGLE_SHEET_ID;
  if (!googleSheetId) {
    process.stderr.write(
      'Google sheet id missing. Set `GOOGLE_SHEET_ID` in .env.\n'
    );
    process.exit(1);
  }

  // read Google client email from environment
  const clientEmail = process.env.GOOGLE_CONNECT_EMAIL;
  if (!clientEmail) {
    process.stderr.write(
      'Google client email is missing. Set `GOOGLE_CONNECT_EMAIL` in .env.\n'
    );
    process.exit(1);
  }

  // read private key from environment
  const privateKey = process.env.GOOGLE_CONNECT_KEY;
  if (!privateKey) {
    process.stderr.write(
      'Credentials are missing. Set `GOOGLE_CONNECT_KEY` in .env.local.\n'
    );
    process.exit(1);
  }

  // parse data from Google sheet
  let data;
  try {
    data = await loadGoogleSheet(googleSheetId, { clientEmail, privateKey });
  } catch {
    process.stderr.write(
      "Content from Google sheet couldn't be loaded. " +
        "Check that (i) the sheet's id is correct (specified as `GOOGLE_SHEET_ID` in .env) and " +
        '(ii) the email address connect@rbb-data-api-access.iam.gserviceaccount.com is given read permission.\n'
    );
    process.exit(1);
  }

  const outFolder = 'src/data/google-sheets';

  // create out folder if necessary
  if (!fs.existsSync(outFolder)) {
    fs.mkdirSync(outFolder);
  }

  // remove all files to make sure there are no stale ones
  fs.readdirSync(outFolder).forEach((file) => {
    fs.unlinkSync(path.join(outFolder, file));
  });

  // write data to file
  for (const [name, _data] of Object.entries(data)) {
    if (name.startsWith('_')) {
      process.stdout.write(`Ignored sheet ${name}\n`);
    } else {
      const out = path.join(outFolder, `${name}.csv`);
      fs.writeFileSync(path.join(process.cwd(), out), csvFormat(_data));
      process.stdout.write(`Written to ${out}\n`);
    }
  }
}

dotenv.config();
dotenv.config({ path: '.env.local' });

main();
