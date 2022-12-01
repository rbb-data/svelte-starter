import type { Get } from './types';

export function get<D>(f: Get<D>, data: D, index = 0) {
  const coords = f(data);
  if (typeof coords === 'number') return coords;
  return coords[index];
}

export function isStacked<D>(data: D[]) {
  let isStacked = false;
  if (data.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d = data[0] as any;
    isStacked = d.key != undefined && d.index != undefined && Array.isArray(d);
  }
  return isStacked;
}
