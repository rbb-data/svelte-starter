// adapted from https://github.com/rdmurphy/doc-to-archieml (MIT licensed)

import fs from 'fs';
import { google } from 'googleapis';
import sanitizeHtml from 'sanitize-html';

/**
 * Sanitize HTML
 *
 * @param {string} input possibly dirty HTML
 * @param preserveStyles if true, allow few decorative tags; else, strip everything
 * @returns clean HTML
 */
async function sanitize(input, preserveStyles = false) {
  return sanitizeHtml(input, {
    allowedTags: preserveStyles ? ['b', 'i', 'u', 's', 'sub', 'sup', 'a'] : [],
    allowedAttributes: preserveStyles ? { a: ['href'] } : {},
  });
}

/**
 * Connect to Google Docs
 *
 * @param {string} keyFile path to secret credential file
 * @returns authenticated Google doc client
 */
async function connect(keyFile) {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/documents.readonly'],
    keyFile,
  });

  return google.docs({ version: 'v1', auth });
}

/**
 * Load content from a Google doc
 *
 * @param {string} documentId Google doc ID
 * @param preserveStyles if true, preserve some formatting
 * @returns {Promise<string>} sanitized doc contents
 */
async function loadGoogleDoc(
  documentId,
  preserveStyles = false,
  keyFile = 'google-credentials.json'
) {
  // check if credentials file exists
  if (!fs.existsSync(keyFile)) return null;

  const client = await connect(keyFile);
  const { data } = await client.documents.get({
    documentId,
  });
  return parseGoogleDoc(data, preserveStyles);
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

export default loadGoogleDoc;
