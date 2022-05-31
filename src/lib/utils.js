/**
 * Constructs a translate(x,y) string for use with the `transform` CSS property
 *
 * @param {number[]} xy - x and y transforms
 */
export function translate(xy) {
  return `translate(${xy})`;
}

/**
 * Appends 'px' to a given number
 *
 * @param {number} n
 */
export function px(n) {
  return `${n}px`;
}

/**
 * Formats a number in German format
 *
 * @param {number} n
 */
export function toGermanString(n) {
  return n.toLocaleString('de-DE');
}

/**
 * Minimal implementation of d3's linear scale function, supports .domain() and
 * .range() only
 */
export function scaleLinear() {
  let domain = [0, 1];
  let range = [0, 1];

  /** @param {number} value */
  function scale(value) {
    const multiplier = (range[1] - range[0]) / (domain[1] - domain[0]);
    return range[0] + multiplier * (value - domain[0]);
  }

  /** @type {(newDomain: [number, number]) => any} */
  scale.domain = function (newDomain) {
    if (arguments.length) {
      domain = Array.from(newDomain);
      return scale;
    }
    return domain.slice();
  };

  /** @type {(newRange: [number, number]) => any} */
  scale.range = function (newRange) {
    if (arguments.length) {
      range = Array.from(newRange);
      return scale;
    }
    return range.slice();
  };

  return scale;
}
