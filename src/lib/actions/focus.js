/**
 * Focuses or blurs an element
 *
 * @template {boolean} T
 * @param {HTMLElement} node - the node to focus/blur
 * @param {T} active - if true, focus the node, otherwise blur it
 */
export default function focus(node, active) {
  function setFocus() {
    active ? node.focus() : node.blur();
  }

  setFocus();

  return {
    /** @type {(newActive: T) => void} */
    update(newActive) {
      active = newActive;
      setFocus();
    },
  };
}
