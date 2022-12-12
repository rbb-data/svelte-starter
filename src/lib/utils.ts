import fuzzysort from 'fuzzysort';
import { matchSorter } from 'match-sorter';
import chroma from 'chroma-js';
import { maxIndex } from 'd3-array';

const numberFormatter = new Intl.NumberFormat('de-DE');

/** Format number for a German audience */
export function format(n: number) {
  return numberFormatter.format(n);
}

/** Capitalizes the first letter of a string */
export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** From a set of colors, choose the one that has highest contrast to a given target color */
export function getHighestContrastColor(
  color: string,
  options = ['black', 'white']
) {
  const contrastList = options.map((o) => chroma.contrast(color, o));
  const index = maxIndex(contrastList);
  return options[index];
}

/** Search a data list with a given query using fuzzy matching */
export function fuzzysearch<D>(
  query: string,
  data: D[],
  { key, limit = 5 }: { key?: string; limit?: number } = {}
) {
  // @ts-ignore
  const results = fuzzysort.go(query, data, { key, limit });

  const suggestions = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    // @ts-ignore
    suggestions.push(key ? result.obj : result.target);
  }

  return suggestions as D[];
}

/** Search a data list with a given query using a set of deterministic rules */
export function search<D>(
  query: string,
  data: D[],
  { key, limit = 5 }: { key?: string; limit?: number } = {}
) {
  const results = matchSorter(data, query, {
    keys: key != undefined ? [key] : undefined,
  });
  return results.slice(0, limit);
}
