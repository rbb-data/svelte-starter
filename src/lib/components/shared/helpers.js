/**
 * @param {number} index
 * @param {number} length
 * @param {{ circular?: boolean }} options
 */
export function getIndexBefore(index, length, { circular = false } = {}) {
  const fallback = circular ? length - 1 : index;
  return index - 1 >= 0 ? index - 1 : fallback;
}

/**
 * @param {number} index
 * @param {number} length
 * @param {{ circular?: boolean }} options
 */
export function getIndexAfter(index, length, { circular = false } = {}) {
  const fallback = circular ? 0 : index;
  return index + 1 < length ? index + 1 : fallback;
}
