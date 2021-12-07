/**
 * @typedef {'mouse' | 'pen' | 'touch'} PointerType
 */

/**
 * Make an element pannable
 *
 * @param {HTMLElement | SVGElement} node - the element to make pannable
 * @param {Object} options - options
 * @param {Array<PointerType>} [options.ignorePointers] - a list of pointer types to ignore
 */
export default function pannable(
  node,
  options = {
    ignorePointers: [],
  }
) {
  /** @type {number} */
  let x;
  /** @type {number} */
  let y;

  /** @type {number} */
  let pointerId;

  /**
   * @param {PointerEvent} event
   */
  function handleStart(event) {
    if (!event.isPrimary) return;
    if (
      options.ignorePointers.includes(
        /** @type PointerType */ (event.pointerType)
      )
    )
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

  /**
   * @param {PointerEvent} event
   */
  function handleMove(event) {
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

  /**
   * @param {PointerEvent} event
   */
  function handleEnd(event) {
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
 * @param {import('svelte/store').Writable<number | { x: number, y: number }>} coords - a writable store that exposes an element's position
 * @param {Object} options
 * @param {'xy' | 'x' | 'y'} [options.axis] - the axis to move along (`x` or `y`), or `xy` for no restrictions (default)
 * @param {{ top?: number, right?: number, bottom?: number, left?: number }} [options.bounds] - if given, the element is restricted to move within these bounds
 * @returns {(event: CustomEvent<{ dx: number, dy: number }>) => void}
 */

export function drag(coords, options = { axis: 'xy' }) {
  const { bounds } = options;
  const axis = options.axis || 'xy';

  /**
   * Use `bounds` to constrain movement
   *
   * @param {number} value
   * @param {'x' | 'y'} axis
   * @returns
   */
  function bounded(value, axis) {
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
