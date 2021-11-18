import fuzzysort from 'fuzzysort';

import type { ActionReturn } from '$lib/types';

interface SearchOptions {
  data: Array<string | Record<string, any>>;
  key?: string;
  highlight?: boolean;
}

interface Suggestion {
  item: string | Record<string, any>;
  highlight?: string;
}

export default function fuzzysearch(
  node: HTMLInputElement,
  { data, key, highlight }: SearchOptions
): ActionReturn<void> {
  if (!highlight) highlight = false;

  function search(query: string, top?: number): Array<Suggestion> {
    let results = fuzzysort.go(query, data, { key });

    if (top) results = results.slice(0, top) as any;

    const suggestions = [];
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      suggestions.push({
        item: key ? result.obj : result.target,
        highlight: highlight ? fuzzysort.highlight(result) : undefined,
      });
    }

    return suggestions;
  }

  function handleInput(event: Event) {
    const suggestions = search((event.target as HTMLInputElement).value);
    node.dispatchEvent(
      new CustomEvent('search', {
        detail: { suggestions },
      })
    );
  }

  function handleChange(event: Event) {
    const suggestions = search((event.target as HTMLInputElement).value, 1);
    const result = suggestions.length > 0 ? suggestions[0] : null;
    node.dispatchEvent(
      new CustomEvent('result', {
        detail: { result },
      })
    );
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
  }

  node.addEventListener('input', handleInput);
  node.addEventListener('change', handleChange);
  node.addEventListener('keydown', handleKeyDown);

  return {
    destroy() {
      node.removeEventListener('input', handleInput);
      node.removeEventListener('change', handleChange);
      node.removeEventListener('keydown', handleKeyDown);
    },
  };
}
