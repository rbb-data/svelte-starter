/**
 * @param {HTMLElement} node
 * @param {{
 *   handleInput: (input: string) => void;
 *   clearAfterMs?: number;
 * }} options
 */
export default function typeahead(node, { handleInput, clearAfterMs = 600 }) {
  let input = '';
  /** @type {number} */
  let timestamp;

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
    const ignoredKeys = [
      'Enter',
      ' ',
      'Spacebar',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ];

    if (ignoredKeys.includes(e.key)) return;

    const now = Date.now();
    if (timestamp && now - timestamp > clearAfterMs) input = '';
    input += e.key;
    timestamp = now;

    handleInput(input);
  }

  node.addEventListener('keydown', handleKeyDown);

  return {
    destroy: () => {
      node.removeEventListener('keydown', handleKeyDown);
    },
  };
}
