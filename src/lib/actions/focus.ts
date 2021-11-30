/**
 * This action focuses or blurs an element. Use as:
 *
 * <div use:focus={true}>...</div>
 *
 * focuses the element while
 *
 * <div use:focus={false}>...</div>
 *
 * blurs the element.
 */

import type { ActionReturn } from '$lib/types';

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
