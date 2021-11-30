type MapElementStyle = Record<string, unknown>;

export interface MapStyleSheet {
  version?: string;
  settings?: MapElementStyle;
  elements?: Record<string, MapElementStyle>;
}

/**
 * Transforms a MapStyleSheet object into a string
 * that can be consumed by Microsoft's API
 *
 * @see https://docs.microsoft.com/en-us/bingmaps/styling/map-style-sheet-entries#settings-and-elements
 *
 * @param mapStyleSheet - Microsoft's MapStyleSheet object
 * @returns string representation of `mapStyleSheet`
 */
export default function toStyleString(mapStyleSheet: MapStyleSheet): string {
  const s = [];

  const createStyleItem = (name: string, style: string): string => {
    return `${name}|${style}`;
  };

  const removeHash = (value: unknown) =>
    typeof value === 'string' ? value.replace('#', '') : value;

  const _toStyleString = (mapElementStyle: MapElementStyle): string =>
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
