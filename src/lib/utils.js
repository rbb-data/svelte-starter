import Color from 'colorjs.io';
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
 * Adds opacity to a given color
 *
 * @param {string} color
 * @param {number} opacity
 */
export const makeTransparent = (color, opacity = 0.3) => {
  if (!color) return '';
  const colorObj = new Color(color);
  colorObj.alpha = opacity;
  // @ts-ignore
  return colorObj.toString({ format: 'rgba' });
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
  // @ts-ignore
  const results = fuzzysort.go(query, data, { key, limit });

  const suggestions = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    // @ts-ignore
    suggestions.push(key ? result.obj : result.target);
  }

  return suggestions;
}

/**
 * @param {import('$lib/types').AccentColor} accentColor
 * @returns {import('$lib/types').TokenKey}
 */
export function cAccentId(accentColor) {
  return /** @type {import('$lib/types').TokenKey} */ (
    'cUiAccent' + capitalize(accentColor)
  );
}

/**
 * @param {Exclude<import('$lib/types').AccentColor, 'black'>} accentColor
 * @returns {import('$lib/types').TokenKey}
 */
export function c100Id(accentColor) {
  return /** @type {import('$lib/types').TokenKey} */ (
    `c${capitalize(accentColor)}100`
  );
}

/**
 * @param {Exclude<import('$lib/types').AccentColor, 'black'>} accentColor
 * @returns {import('$lib/types').TokenKey}
 */
export function c300Id(accentColor) {
  return /** @type {import('$lib/types').TokenKey} */ (
    `c${capitalize(accentColor)}300`
  );
}

/**
 * @param {number} index
 * @param {number} length
 * @param {{ circular?: boolean }} options
 */
export function getIndexBefore(index, length, { circular = false } = {}) {
  const fallback = circular ? length - 1 : index;
  return index - 1 >= 0 ? index - 1 : fallback;
}

/**
 * @param {number} index
 * @param {number} length
 * @param {{ circular?: boolean }} options
 */
export function getIndexAfter(index, length, { circular = false } = {}) {
  const fallback = circular ? 0 : index;
  return index + 1 < length ? index + 1 : fallback;
}
