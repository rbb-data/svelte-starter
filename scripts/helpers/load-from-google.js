// helper functions to load and parse content from Google docs and sheets
// partly adapted from https://github.com/rdmurphy/doc-to-archieml (MIT licensed)

import { GoogleAuth } from 'google-auth-library';
import { docs } from '@googleapis/docs';
import { sheets } from '@googleapis/sheets';
import sanitizeHtml from 'sanitize-html';

/**
 * Load content from a Google doc
 *
 * @param {string} documentId Google doc ID
 * @param {{ clientEmail: string; privateKey: string }} credentials Google credentials
 * @param preserveStyles if true, preserve some formatting
 * @returns {Promise<string>} sanitized doc contents
 */
export async function loadGoogleDoc(
  documentId,
  credentials,
  preserveStyles = false
) {
  const auth = await authorize(credentials);
  const client = docs({ version: 'v1', auth });
  const { data } = await client.documents.get({
    documentId,
  });
  return parseGoogleDoc(data, preserveStyles);
}

/**
 * Load data from a Google spreadsheet
 *
 * @param {string} spreadsheetId Google sheets ID
 * @param {{ clientEmail: string; privateKey: string }} credentials Google credentials
 */
export async function loadGoogleSheet(spreadsheetId, credentials) {
  const auth = await authorize(credentials);
  const client = sheets({ version: 'v4', auth });
  const { data } = await client.spreadsheets.get({
    spreadsheetId,
    includeGridData: true,
  });
  return parseGoogleSheets(data);
}

/**
 * @param {import('googleapis/build/src/apis/sheets/v4').sheets_v4.Schema$Spreadsheet} spreadsheet
 *   Google Doc spreadsheet object
 */
function parseGoogleSheets(spreadsheet) {
  if (!spreadsheet.sheets) return {};

  const sheets = {};
  for (const sheet of spreadsheet.sheets) {
    const { title } = sheet.properties;
    const sheetName = title.toLowerCase().replace(' ', '-');
    sheets[sheetName] = parseGoogleSheet(sheet);
  }

  return sheets;
}

/**
 * @param {import('googleapis/build/src/apis/sheets/v4').sheets_v4.Schema$Sheet} sheet
 *   Google Doc sheet object
 */
function parseGoogleSheet(sheet) {
  if (
    !sheet.data ||
    sheet.data.length === 0 ||
    sheet.data[0].rowData.length === 0
  )
    return [];

  const sheetRows = sheet.data[0].rowData;

  let columnNames = [];
  for (const col of sheetRows[0].values) {
    if (col.formattedValue) {
      columnNames.push(col.formattedValue);
    }
  }

  let data = [];
  for (let rowIndex = 1; rowIndex < sheetRows.length; rowIndex++) {
    const sheetRow = sheetRows[rowIndex];
    let dataRow = {};
    for (let colIndex = 0; colIndex < columnNames.length; colIndex++) {
      if (!sheetRow.values) continue;
      const cell = sheetRow.values[colIndex];
      dataRow[columnNames[colIndex]] = cell ? cell.formattedValue : undefined;
    }
    if (!Object.values(dataRow).every((x) => x === undefined)) {
      data.push(dataRow);
    }
  }

  return data;
}

/**
 * Sanitize HTML
 *
 * @param {string} input possibly dirty HTML
 * @param preserveStyles if true, allow few decorative tags; else, strip everything
 * @returns clean HTML
 */
function sanitize(input, preserveStyles = false) {
  return sanitizeHtml(input, {
    allowedTags: preserveStyles ? ['b', 'i', 'u', 's', 'sub', 'sup', 'a'] : [],
    allowedAttributes: preserveStyles ? { a: ['href'] } : {},
  });
}

/**
 * Connect to Google Docs
 *
 * @param {{ clientEmail: string; privateKey: string }} credentials Google credentials
 * @returns authenticated Google doc client
 */
async function authorize(credentials) {
  return new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/documents.readonly',
      'https://www.googleapis.com/auth/spreadsheets.readonly',
    ],
    credentials: {
      client_email: credentials.clientEmail,
      private_key: credentials.privateKey,
    },
  }).getClient();
}

/**
 * Transform Google Doc object into content string
 *
 * @param {import('googleapis/build/src/apis/docs/v1').docs_v1.Schema$Document} document
 *   Google Doc object
 * @param preserveStyles if true, preserve some formatting
 * @returns sanitized doc contents
 */
function parseGoogleDoc(document, preserveStyles = false) {
  let text = '';

  // sanity checks
  if (!document.body) return text;
  if (!document.body.content) return text;

  document.body.content.forEach((element) => {
    if (element.paragraph) {
      const paragraph = element.paragraph;

      // this is a list
      const needsBullet = paragraph.bullet != null;

      if (paragraph.elements) {
        const values = paragraph.elements;

        values.forEach((value, idx) => {
          // prepend an asterisk if this is a list item
          const prefix = needsBullet && idx === 0 ? '* ' : '';

          // concat the text
          text += `${prefix}${parseParagraphElement(value, preserveStyles)}`;
        });
      }
    }
  });

  return sanitize(text, preserveStyles);
}

/**
 * Parse Google doc element
 *
 * @param {import('googleapis/build/src/apis/docs/v1').docs_v1.Schema$ParagraphElement} element
 *   Google doc element
 * @param preserveStyles if true, preserve some formatting
 * @returns content parsed as HTML
 */
function parseParagraphElement(element, preserveStyles = false) {
  if (!element.textRun) return '';

  const { textRun } = element;
  let { content } = textRun;

  if (!content) return '';

  // return early if no styles specified or styles are to be ignored
  if (!preserveStyles) return content;
  if (!textRun.textStyle) return content;

  const { textStyle } = textRun;

  // apply text styles
  if (textStyle.bold) content = wrap(content, 'b');
  if (textStyle.italic) content = wrap(content, 'i');
  if (textStyle.underline) content = wrap(content, 'u');
  if (textStyle.strikethrough) content = wrap(content, 's');

  // apply sub- or superscript
  if (textStyle.baselineOffset) {
    const { baselineOffset } = textStyle;
    if (baselineOffset === 'SUBSCRIPT') content = wrap(content, 'sub');
    else if (baselineOffset === 'SUPERSCRIPT') content = wrap(content, 'sup');
  }

  // return early if no link information associated
  if (!textStyle.link) return content;
  if (!textStyle.link.url) return content;

  // add link
  const { url } = textStyle.link;
  return `<a href="${url}">${content}</a>`;
}

/**
 * Wrap content in tags
 *
 * @param {string} content text
 * @param {string} tag name of the tag (e.g. "b" for <b>)
 * @returns HTML tag
 */
function wrap(content, tag) {
  // there is no content to be wrapped
  if (content.trim().length == 0) return content;

  // initialize whitespace before and after content
  const ws = { start: '', end: '' };

  /** @type {(char: string) => boolean} */
  const isWhitespace = (char) => /\s/.test(char);

  // record whitespace before content
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (!isWhitespace(char)) break;
    ws.start += char;
  }

  // record whitespace after content
  for (let i = content.length - 1; i >= 0; i--) {
    const char = content[i];
    if (!isWhitespace(char)) break;
    ws.end += char;
  }

  return [ws.start, `<${tag}>`, content.trim(), `</${tag}>`, ws.end].join('');
}
