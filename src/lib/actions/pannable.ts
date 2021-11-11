import type { Writable } from 'svelte/store';
import type { ActionReturn } from './types';

export default function pannable(
  node: HTMLElement | SVGElement
): ActionReturn<void> {
  let x: number;
  let y: number;

  function getClientXY(event: MouseEvent | TouchEvent) {
    if (event instanceof MouseEvent) return [event.clientX, event.clientY];
    return event.touches.length > 0
      ? [event.touches[0].clientX, event.touches[0].clientY]
      : [null, null];
  }

  function handleStart(event: MouseEvent | TouchEvent) {
    [x, y] = getClientXY(event);
    if (x === null) return;

    node.dispatchEvent(
      new CustomEvent('panstart', {
        detail: { x, y },
      })
    );

    window.addEventListener(
      event instanceof TouchEvent ? 'touchmove' : 'mousemove',
      handleMove
    );
    window.addEventListener(
      event instanceof TouchEvent ? 'touchend' : 'mouseup',
      handleEnd
    );
  }

  function handleMove(event: MouseEvent | TouchEvent) {
    const [clientX, clientY] = getClientXY(event);
    if (x === null) return;

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

  function handleEnd(event: MouseEvent | TouchEvent) {
    [x, y] = getClientXY(event);
    if (x === null) return;

    node.dispatchEvent(
      new CustomEvent('panend', {
        detail: { x, y },
      })
    );

    window.removeEventListener(
      event instanceof TouchEvent ? 'touchmove' : 'mousemove',
      handleMove
    );
    window.removeEventListener(
      event instanceof TouchEvent ? 'touchend' : 'mouseup',
      handleEnd
    );
  }

  node.addEventListener('mousedown', handleStart);
  node.addEventListener('touchstart', handleStart);

  return {
    destroy() {
      node.removeEventListener('mousedown', handleStart);
      node.removeEventListener('touchstart', handleStart);
    },
  };
}

export function handlePanMove(
  coords: Writable<{ x: number; y: number }>,
  options: {
    axis: 'xy' | 'x' | 'y';
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
