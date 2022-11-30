import fuzzysort from 'fuzzysort';
import { matchSorter } from 'match-sorter';

const numberFormatter = new Intl.NumberFormat('de-DE');

/** Format number for a German audience */
export function format(n: number) {
  return numberFormatter.format(n);
}

/** Capitalizes the first letter of a string */
export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
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
