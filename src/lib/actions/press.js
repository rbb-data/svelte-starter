/**
 * Unifies click and touchstart events for snappier mobile experiences
 *
 * @param {HTMLElement} node
 * @param {(e: Event) => void} handler - event handler called on:click and on:touchstart
 */
function press(node, handler) {
  /** @param {Event} e */
  function handleClick(e) {
    handler(e);
  }

  /** @param {TouchEvent} e */
  function handleTouchStart(e) {
    e.preventDefault();
    handler(e);
  }

  node.addEventListener('click', handleClick);
  node.addEventListener('touchstart', handleTouchStart);

  return {
    destroy: () => {
      node.removeEventListener('click', handleClick);
      node.removeEventListener('touchstart', handleTouchStart);
    },
  };
}

export default press;
