/**
 * Focuses or blurs an element
 *
 * @param {HTMLElement} node - the node to focus/blur
 * @param {boolean} active - if true, focus the node, otherwise blur it
 * @return {import('$lib/types').ActionReturn<boolean>}
 */
export default function focus(node, active) {
  function setFocus() {
    active ? node.focus() : node.blur();
  }

  setFocus();

  return {
    update(newActive) {
      active = newActive;
      setFocus();
    },
  };
}
