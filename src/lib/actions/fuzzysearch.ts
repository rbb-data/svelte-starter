import fuzzysort from 'fuzzysort';

import type { ActionReturn, Suggestion } from '$lib/types';

interface SearchOptions {
  data: Array<string | Record<string, any>>;
  key?: string;
  limit?: number;
}

/**
 * Implements fuzzy searching on an input element
 *
 * @param node - input element for search
 * @param options.data - array of objects or strings to search through
 * @param options.key - key to search on if `data` is an array of objects
 * @param options.limit - max number of results to return
 */
export default function fuzzysearch(
  node: HTMLInputElement,
  { data, key, limit }: SearchOptions
): ActionReturn<void> {
  // by default, return all results
  if (!limit) limit = Infinity;

  let suggestions = [];

  function search(query: string): Array<Suggestion> {
    const results = fuzzysort.go(query, data, { key, limit });

    const suggestions = [];
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      suggestions.push(key ? result.obj : result.target);
    }

    return suggestions;
  }

  function handleInput(event: Event) {
    suggestions = search((event.target as HTMLInputElement).value);

    node.dispatchEvent(
      new CustomEvent('search', {
        detail: { suggestions },
      })
    );

    node.addEventListener('change', handleChange);
    node.addEventListener('keydown', handleKeyDown);
  }

  function handleChange() {
    const result = suggestions.length > 0 ? suggestions[0] : null;

    node.dispatchEvent(
      new CustomEvent('result', {
        detail: { result },
      })
    );

    node.removeEventListener('change', handleChange);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Escape') return;
    event.preventDefault();

    // clear input field
    node.value = '';

    // reset result
    node.dispatchEvent(
      new CustomEvent('result', {
        detail: { result: null },
      })
    );

    node.removeEventListener('keydown', handleKeyDown);
  }

  node.addEventListener('input', handleInput);

  return {
    destroy() {
      node.removeEventListener('input', handleInput);
    },
  };
}
