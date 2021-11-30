import type { Writable } from 'svelte/store';
import type { ActionReturn } from '$lib/types';

type PointerType = 'mouse' | 'pen' | 'touch';

/**
 * Make an element pannable
 *
 * @param node - the element to make pannable
 * @param options.ignorePointers - a list of pointer types to ignore
 *
 * @see [Docs](https://github.com/rbb-data/svelte-starter/wiki/Docs#usepannable)
 */
export default function pannable(
  node: HTMLElement | SVGElement,
  options: { ignorePointers: Array<PointerType> } = {
    ignorePointers: [],
  }
): ActionReturn<void> {
  let x: number;
  let y: number;

  let pointerId: number;

  function handleStart(event: PointerEvent) {
    if (!event.isPrimary) return;
    if (options.ignorePointers.includes(event.pointerType as PointerType))
      return;

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

/**
 * Creates a function that updates an element's coordinates
 * according to the information exposed by some custom event
 *
 * @param coords - a writable store that exposes an element's position
 * @param options.axis - the axis to move along (`x` or `y`), or `xy` for no restrictions (default)
 * @param options.bounds - if given, the element is restricted to move within these bounds
 * @returns function that consumes a custom event and keeps the given coordinates in sync
 */

export function drag(
  coords: Writable<number | { x: number; y: number }>,
  options: {
    axis?: 'xy' | 'x' | 'y';
    bounds?: { top?: number; right?: number; bottom?: number; left?: number };
  } = { axis: 'xy' }
): (event: CustomEvent<{ dx: number; dy: number }>) => void {
  const { bounds } = options;
  const axis = options.axis || 'xy';

  // use `bounds` to constrain movement
  function bounded(value: number, axis: 'x' | 'y') {
    if (!options.bounds) return value;
    const [min, max] = {
      x: [bounds.left, bounds.right],
      y: [bounds.top, bounds.bottom],
    }[axis];
    return Math.min(Math.max(value, min), max);
  }

  return (event) => {
    coords.update(($coords) => {
      //if the coords are just one number, we check how to interpret this
      if (typeof $coords === 'number') {
        if (axis !== 'xy') {
          const delta = axis === 'x' ? event.detail.dx : event.detail.dy;
          return bounded($coords + delta, axis);
        } else {
          throw new Error(
            'Please specify an appropriate axis (x or y), if you only pass on one coord'
          );
        }
      }
      return {
        //otherwise, we just turn this into an x,y object
        x: bounded($coords.x + (axis !== 'y' ? event.detail.dx : 0), 'x'),
        y: bounded($coords.y + (axis !== 'x' ? event.detail.dy : 0), 'y'),
      };
    });
  };
}
