/**
 * Sets or removes focus from an element
 *
 * @param {HTMLElement} node - the element to set focus on
 * @param {boolean} active - if true, set focus on the element, otherwise remove focus
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
