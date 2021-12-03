/**
 * @typedef {Record<string, unknown>} MapElementStyle
 * @typedef {{ version?: string, settings?: MapElementStyle, elements?: Record<string, MapElementStyle> }} MapStyleSheet
 */

/**
 * Transforms a MapStyleSheet object into a string
 * that can be consumed by Microsoft's API
 *
 * @param {MapStyleSheet} mapStyleSheet - Microsoft's MapStyleSheet object
 * @returns {string} string representation of `mapStyleSheet`
 *
 * @see https://docs.microsoft.com/en-us/bingmaps/styling/map-style-sheet-entries#settings-and-elements
 */
export default function toStyleString(mapStyleSheet) {
  const s = [];

  /**
   * @param {string} name
   * @param {string} style
   * @returns {string}
   */
  const createStyleItem = (name, style) => {
    return `${name}|${style}`;
  };

  /**
   * @param {unknown} value
   * @returns {unknown}
   */
  const removeHash = (value) =>
    typeof value === 'string' ? value.replace('#', '') : value;

  /** @type {(mapElementStyle: MapElementStyle) => string} */
  const _toStyleString = (mapElementStyle) =>
    Object.entries(mapElementStyle)
      .map(([key, value]) => `${key}:${removeHash(value)}`)
      .join(';');

  if (mapStyleSheet.settings) {
    s.push(createStyleItem('global', _toStyleString(mapStyleSheet.settings)));
  }

  if (mapStyleSheet.elements) {
    for (const element in mapStyleSheet.elements) {
      s.push(
        createStyleItem(
          element,
          _toStyleString(mapStyleSheet.elements[element])
        )
      );
    }
  }

  return s.join('_');
}
