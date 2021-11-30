/**
 * Constructs a translate(x,y) string for use with the `transform` CSS property
 *
 * @param xy - x and y transforms
 * @returns string that can be used in CSS to translate an element
 */
export function translate(xy: Array<number>): string {
  return `translate(${xy})`;
}

/**
 * Appends 'px' to a given number
 *
 * @param n - number
 * @returns unit in pixels
 */
export function px(n: number): string {
  return `${n}px`;
}
