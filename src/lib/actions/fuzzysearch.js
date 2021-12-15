import fuzzysort from 'fuzzysort';

/** @typedef {string | Record<string, unknown>} Item */

/**
 * Implements fuzzy searching on an input field
 *
 * @param {HTMLInputElement} node - search field
 * @param {{ data: Item[]; key: string; limit: number }} searchOptions - search
 *   options where `data` is an array of objects or strings to search through,
 *   `key` is the key to search on if `data` is an array of objects, and `limit`
 *   is the maximum number of results to return
 */
export default function fuzzysearch(node, searchOptions) {
  const { data, key } = searchOptions;
  let { limit } = searchOptions;

  // by default, return all results
  if (!limit) limit = Infinity;

  /** @type {Item[]} */
  let suggestions = [];

  /**
   * @param {string} query
   * @returns {Item[]}
   */
  function search(query) {
    const results = fuzzysort.go(query, data, { key, limit });

    const suggestions = [];
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      suggestions.push(key ? result.obj : result.target);
    }

    return suggestions;
  }

  /** @param {Event} event */
  function handleInput(event) {
    suggestions = search(/** @type {HTMLInputElement} */ (event.target).value);

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

  /** @param {KeyboardEvent} event */
  function handleKeyDown(event) {
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
