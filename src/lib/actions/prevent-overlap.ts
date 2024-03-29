import { ascending, range } from 'd3-array';

/**
 * Prevent overlap of children nodes along the x- or y-axis
 */
export function preventOverlap(
  node: HTMLElement | SVGGraphicsElement,
  { axis, gap = 0 }: { axis: 'x' | 'y'; gap?: number }
) {
  const children = [...node.children];
  const n = children.length;

  // no overlap possible
  if (n < 2) return;

  const dimension: 'width' | 'height' = axis === 'x' ? 'width' : 'height';

  const positions: number[] = new Array(n).fill(0);
  const sizes: number[] = new Array(n).fill(0);

  function updateCoordinates() {
    // get dimensions
    for (let i = 0; i < n; i++) {
      const bbox = getBoundingBox(children[i]);
      positions[i] = bbox[axis] - gap / 2;
      sizes[i] = bbox[dimension] + gap;
    }

    // compute non-overlapping positions
    const updatedPositions = computeNonOverlappingPositions(positions, sizes);

    // update dom elements
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const diff = updatedPositions[i] - positions[i];

      // no need to update
      if (diff === 0) continue;

      if (isHTMLElement(child)) {
        const key = axis === 'x' ? 'left' : 'top';
        const styleString = child.style[key];
        const newStyleString = `calc(${styleString} + ${diff}px)`;

        // update position
        child.style[key] = newStyleString;
      } else {
        // get current value
        let currValue = 0;
        const attr = child.getAttribute(axis);
        if (attr) currValue = +attr;

        child.setAttribute(axis, (currValue + diff).toString());
      }
    }
  }

  // run once
  updateCoordinates();

  // update when the container size changes
  const observer = new ResizeObserver(() => updateCoordinates());
  if (isHTMLElement(node)) {
    observer.observe(node);
  } else {
    // SVG elements like <g /> don't have a size
    // so we track the parent <svg /> instead
    observer.observe(node.closest('svg') as SVGElement);
  }

  return {
    destroy: () => {
      observer.disconnect();
    },
  };
}

function computeNonOverlappingPositions(
  positions: number[],
  sizes: number[],
  { gap = 0, maxTicks = 10 }: { gap?: number; maxTicks?: number } = {}
) {
  if (positions.length < 2) return positions;

  // sort positions and remember original order
  const sorted = positions
    .map((_p, i) => ({ value: _p, index: i }))
    .sort((a, b) => ascending(a.value, b.value));
  let p = sorted.map((d) => d.value);
  const order = sorted.map((d) => d.index);

  // sync sizes order with new positions order
  let s = order.map((i) => sizes[i]);

  // overlaps
  const o = new Array(p.length - 1).fill(0);

  // add gap
  p = p.map((_p) => _p - gap / 2);
  s = s.map((_s) => _s + gap);

  let tick = 0;
  while (tick < maxTicks) {
    let overlaps = false;

    // compute overlaps
    for (let i = 0; i < p.length - 1; i++) {
      o[i] = Math.max(0, p[i] + s[i] - p[i + 1]);
      if (o[i] > 0) overlaps = true;
    }

    // stop if none of the labels are overlapping
    if (!overlaps) break;

    // re-position labels to prevent overlap
    for (let i = 0; i < o.length; i++) {
      if (o[i] > 0) {
        p[i] -= o[i] / 2;
        p[i + 1] += o[i] / 2;
      }
    }

    tick += 1;
  }

  // return positions in original order
  return range(p.length).map((i) => p[order.indexOf(i)]);
}

function isHTMLElement(element: Element): element is HTMLElement {
  return element instanceof HTMLElement;
}

function isSVGGraphicsElement(element: Element): element is SVGGraphicsElement {
  return element instanceof SVGGraphicsElement;
}

function getBoundingBox(element: Element) {
  if (isHTMLElement(element)) return element.getBoundingClientRect();
  else if (isSVGGraphicsElement(element)) return element.getBBox();
  else throw new Error('Unknown element type: ' + element);
}
