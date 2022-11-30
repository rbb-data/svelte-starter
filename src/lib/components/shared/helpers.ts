export function getIndexBefore(
  index: number,
  length: number,
  { circular = false }: { circular?: boolean } = {}
) {
  const fallback = circular ? length - 1 : index;
  return index - 1 >= 0 ? index - 1 : fallback;
}

export function getIndexAfter(
  index: number,
  length: number,
  { circular = false }: { circular?: boolean } = {}
) {
  const fallback = circular ? 0 : index;
  return index + 1 < length ? index + 1 : fallback;
}
