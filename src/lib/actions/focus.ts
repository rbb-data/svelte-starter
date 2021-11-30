import type { ActionReturn } from '$lib/types';

/**
 * Focuses or blurs an element
 *
 * @param node - the node to focus/blur
 * @param active - if true, focus the node, otherwise blur it
 *
 * @see [Docs](https://github.com/rbb-data/svelte-starter/wiki/Docs#usefocus)
 */
export default function focus(
  node: HTMLElement,
  active: boolean
): ActionReturn<boolean> {
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
