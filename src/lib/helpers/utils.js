/**
 * Constructs a translate(x,y) string for use with the `transform` CSS property
 *
 * @param {number[]} xy - x and y transforms
 * @returns {string} string that can be used in CSS to translate an element
 */
export function translate(xy) {
  return `translate(${xy})`;
}

/**
 * Appends 'px' to a given number
 *
 * @param {number} n
 * @returns {string} unit in pixels
 */
export function px(n) {
  return `${n}px`;
}
