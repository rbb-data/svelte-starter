import fuzzysort from 'fuzzysort';
import { matchSorter } from 'match-sorter';

const numberFormatter = new Intl.NumberFormat('de-DE');

/**
 * Format number for German audience
 *
 * @param {number} n
 */
export function format(n) {
  return numberFormatter.format(n);
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
 * Search a data list with a given query using a set of deterministic rules
 *
 * @template T
 * @param {string} query
 * @param {T[]} data
 * @param {{ key?: string; limit?: number }} options
 */
export function search(query, data, { key, limit = 5 } = {}) {
  const results = matchSorter(data, query, {
    keys: key != undefined ? [key] : undefined,
  });
  return results.slice(0, limit);
}
