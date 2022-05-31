#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { csvFormat } from 'd3-dsv';

import { loadGoogleSheet } from './_loadFromGoogle.js';

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
      'Google client email is missing. Set `GOOGLE_CONNECT_EMAIL` in .env.local.\n'
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
        '(ii) the email address connect@rbb-datenteam.iam.gserviceaccount.com is given read permission.\n'
    );
    process.exit(1);
  }

  // write to file
  const outFolder = 'src/data';
  const outPrefix = 'google-sheet';
  for (const [name, _data] of Object.entries(data)) {
    const out = path.join(outFolder, `${outPrefix}-${name}.csv`);
    fs.writeFileSync(path.join(process.cwd(), out), csvFormat(_data));
    process.stdout.write(`Written to ${out}\n`);
  }
}

dotenv.config();
dotenv.config({ path: '.env.local' });

main();
