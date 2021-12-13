/**
 * Focuses or blurs an element
 *
 * @param {HTMLElement} node - the node to focus/blur
 * @param {boolean} active - if true, focus the node, otherwise blur it
 */
export default function focus(node, active) {
  function setFocus() {
    active ? node.focus() : node.blur();
  }

  setFocus();

  return {
    /** @type {(newActive: boolean) => void} */
    update(newActive) {
      active = newActive;
      setFocus();
    },
  };
}
