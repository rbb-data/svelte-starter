#!/usr/bin/env node

/**
 * This script loads design tokens exported from Figma and
 * merges them with the design tokens defined in this project.
 */

const fs = require('fs');
const path = require('path');

const FIGMA_FILE = 'style-dictionary/figma-export.json';
const TOKENS_FILE = 'style-dictionary/tokens.json';

function extractKeyValuePairs(node, keys = [], styles = []) {
  if (node.value) {
    styles.push({ keys, value: node.value });
  } else {
    for (const [key, value] of Object.entries(node)) {
      extractKeyValuePairs(value, [...keys, key], styles);
    }
  }
  return styles;
}

function getPropertyByKeys(object, keys) {
  if (object == undefined) return undefined;
  if (keys.length === 0) return object;
  else return getPropertyByKeys(object[keys[0]], keys.slice(1));
}

function setPropertyByKeys(object, keys, value) {
  if (object == undefined) return;
  if (keys.length === 0) return;
  if (typeof object !== 'object') return;

  const key = keys[0];
  if (keys.length === 1) {
    object[key] = value;
  } else {
    object[key] = object[key] || {};
    setPropertyByKeys(object[key], keys.slice(1), value);
  }
}

async function main() {
  // make sure to run from project root
  process.chdir(path.join(__dirname, '..'));

  // load tokens from files
  const figmaTokens = JSON.parse(fs.readFileSync(FIGMA_FILE));
  const tokens = JSON.parse(fs.readFileSync(TOKENS_FILE));

  // get key-value pairs from Figma exported styles
  let pairs = extractKeyValuePairs(figmaTokens.color, ['c']);

  // ignore the alpha channel
  pairs = pairs.map((d) => ({
    keys: d.keys,
    value: d.value.slice(0, 7),
  }));

  // merge Figma tokens with tokens defined in this project
  for (const { keys, value } of pairs) {
    const property = getPropertyByKeys(tokens, keys);
    const figmaValue = value.toUpperCase();

    if (property == undefined) {
      // if the design token does not exist, create it
      setPropertyByKeys(tokens, keys, { value: figmaValue });
      process.stdout.write(`added ${keys.join('-')} ${value}\n`);
    } else {
      // else, update an existing design token
      const currentValue = property.value;
      if (figmaValue !== currentValue) {
        property.value = figmaValue;
        process.stdout.write(
          `updated ${keys.join('-')} from ${currentValue} to ${figmaValue}\n`
        );
      }
    }
  }

  fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2));
}

main();
