/**
 * This action makes an element pannable.
 * It listens to the respective mouse and touch
 * events, tracks an element's position and dispatches
 * three custom events: panstart, panmove and panend.
 *
 * `handlePanMove` is a convenience function to use on
 * panmove that implements drag & drop.
 *
 * See src/lib/components/demo/DraggableCircle.svelte
 * for an example of how to use this action.
 */

import type { Writable } from 'svelte/store';
import type { ActionReturn } from './types';

export default function pannable(
  node: HTMLElement | SVGElement
): ActionReturn<void> {
  let x: number;
  let y: number;

  let pointerId: number;

  function handleStart(event: PointerEvent) {
    if (!event.isPrimary) return;

    x = event.clientX;
    y = event.clientY;

    pointerId = event.pointerId;

    node.dispatchEvent(
      new CustomEvent('panstart', {
        detail: { x, y },
      })
    );

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleEnd);
    window.addEventListener('pointercancel', handleEnd);
  }

  function handleMove(event: PointerEvent) {
    if (event.pointerId !== pointerId) return;

    const { clientX, clientY } = event;

    const dx = clientX - x;
    const dy = clientY - y;
    x = clientX;
    y = clientY;

    node.dispatchEvent(
      new CustomEvent('panmove', {
        detail: { x, y, dx, dy },
      })
    );
  }

  function handleEnd(event: PointerEvent) {
    if (event.pointerId !== pointerId) return;

    const { clientX, clientY } = event;

    node.dispatchEvent(
      new CustomEvent('panend', {
        detail: { x: clientX, y: clientY },
      })
    );

    window.removeEventListener('pointermove', handleMove);
    window.removeEventListener('pointerup', handleEnd);
    window.removeEventListener('pointercancel', handleEnd);
  }

  node.addEventListener('pointerdown', handleStart);

  return {
    destroy() {
      node.removeEventListener('pointerdown', handleStart);
    },
  };
}

export function handlePanMove(
  coords: Writable<{ x: number; y: number }>,
  options: {
    /** move along the `x` or `y` axis, or both (`xy`) */
    axis: 'xy' | 'x' | 'y';
    /** if given, the element is restricted to move within these bounds */
    bounds?: { top?: number; right?: number; bottom?: number; left?: number };
  } = { axis: 'xy' }
): (event: CustomEvent) => void {
  const { axis, bounds } = options;

  function bounded(value: number, axis: 'x' | 'y') {
    if (!options.bounds) return value;
    const [min, max] = {
      x: [bounds.left, bounds.right],
      y: [bounds.top, bounds.bottom],
    }[axis];
    return Math.min(Math.max(value, min), max);
  }

  return (event) => {
    coords.update(($coords) => ({
      x: bounded($coords.x + (axis !== 'y' ? event.detail.dx : 0), 'x'),
      y: bounded($coords.y + (axis !== 'x' ? event.detail.dy : 0), 'y'),
    }));
  };
}
