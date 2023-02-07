export function typeahead(
  node: HTMLElement,
  {
    handleInput,
    clearAfterMs = 600,
  }: { handleInput: (input: string) => void; clearAfterMs?: number }
) {
  let input = '';
  let timestamp: number;

  function handleKeyDown(e: KeyboardEvent) {
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
