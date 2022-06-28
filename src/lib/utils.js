import fuzzysort from 'fuzzysort';

/**
 * Constructs a translate(x,y) string for use with the `transform` CSS property
 *
 * @param {number[]} xy - x and y transforms
 */
export function translate(xy) {
  return `translate(${xy})`;
}

/**
 * Appends 'px' to a given number
 *
 * @param {number} n
 */
export function px(n) {
  return `${n}px`;
}

/**
 * Formats a number in German format
 *
 * @param {number} n
 */
export function toGermanString(n) {
  return n.toLocaleString('de-DE');
}

/**
 * Capitalizes the first letter of a string
 *
 * @param {string} str
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Minimal implementation of d3's linear scale function, supports .domain() and
 * .range() only
 */
export function scaleLinear() {
  let domain = [0, 1];
  let range = [0, 1];

  /** @param {number} value */
  function scale(value) {
    const multiplier = (range[1] - range[0]) / (domain[1] - domain[0]);
    return range[0] + multiplier * (value - domain[0]);
  }

  /** @type {(newDomain: [number, number]) => any} */
  scale.domain = function (newDomain) {
    if (arguments.length) {
      domain = Array.from(newDomain);
      return scale;
    }
    return domain.slice();
  };

  /** @type {(newRange: [number, number]) => any} */
  scale.range = function (newRange) {
    if (arguments.length) {
      range = Array.from(newRange);
      return scale;
    }
    return range.slice();
  };

  return scale;
}

/**
 * Transforms a hex color to its rgba equivalent with some given opacity
 *
 * @param {string} colorHex
 * @param {number} opacity
 */
export const computeTransparentColor = (colorHex, opacity = 0.3) => {
  if (!colorHex) return null;
  const colorRgb = hex2rgba(colorHex);
  return `rgba(${colorRgb.slice(0, 3)}, ${opacity})`;
};

/**
 * Search a data list with a given query using fuzzy matching
 *
 * @template T
 * @param {string} query
 * @param {T[]} data
 * @param {{ key?: string; limit?: number }} options
 */
export function fuzzysearch(query, data, { key, limit = 5 } = {}) {
  const results = fuzzysort.go(query, data, { key, limit });

  const suggestions = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    suggestions.push(key ? result.obj : result.target);
  }

  return suggestions;
}

/**
 * Convert hex to rgba colors
 *
 * from
 * https://github.com/gka/chroma.js/blob/75ea5d8a5480c90ef1c7830003ac63c2d3a15c03/src/io/hex/hex2rgb.js
 *
 * @param {string} hex
 */
const hex2rgba = (hex) => {
  const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

  if (hex.match(RE_HEX)) {
    // remove optional leading #
    if (hex.length === 4 || hex.length === 7) {
      hex = hex.substr(1);
    }
    // expand short-notation to full six-digit
    if (hex.length === 3) {
      // @ts-ignore
      hex = hex.split('');
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const u = parseInt(hex, 16);
    const r = u >> 16;
    const g = (u >> 8) & 0xff;
    const b = u & 0xff;
    return [r, g, b, 1];
  }

  // match rgba hex format, eg #FF000077
  if (hex.match(RE_HEXA)) {
    if (hex.length === 5 || hex.length === 9) {
      // remove optional leading #
      hex = hex.substr(1);
    }
    // expand short-notation to full eight-digit
    if (hex.length === 4) {
      // @ts-ignore
      hex = hex.split('');
      hex =
        hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    const u = parseInt(hex, 16);
    const r = (u >> 24) & 0xff;
    const g = (u >> 16) & 0xff;
    const b = (u >> 8) & 0xff;
    const a = Math.round(((u & 0xff) / 0xff) * 100) / 100;
    return [r, g, b, a];
  }

  // we used to check for css colors here
  // if _input.css? and rgb = _input.css hex
  //     return rgb

  throw new Error(`unknown hex color: ${hex}`);
};

/**
 * Helper to navigate through list items using arrow keys
 *
 * @typedef {'Home' | 'End' | 'ArrowUp' | 'ArrowDown'} Key
 * @param {Key} key
 * @param {number} index
 * @param {number} length
 */
export function getNextIndexInList(key, index, length) {
  switch (key) {
    case 'Home':
      return 0;
    case 'End':
      return length - 1;
    case 'ArrowUp':
      return index - 1 >= 0 ? index - 1 : index;
    case 'ArrowDown':
      return index + 1 < length ? index + 1 : index;
  }
}
