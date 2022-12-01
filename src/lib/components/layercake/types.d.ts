import type { Readable } from 'svelte/store';

export type Accessor<D> = (d: D) => unknown;
export type Get<D> = (d: D) => number | number[];

export interface Scale<D> {
  (d: ReturnType<Accessor<D>>): number;
  range: () => [number, number];
  domain: () => [number, number];
  ticks: (n?: number) => ReturnType<Accessor<D>>[];
  bandwidth?: () => number;
}

export interface LayerCakeContext<D> {
  data: Readable<Array<D>>;
  width: Readable<number>;
  height: Readable<number>;
  padding: Readable<{
    top: number;
    right: number;
    bottom: number;
    left: number;
  }>;
  x: Readable<Accessor<D>>;
  y: Readable<Accessor<D>>;
  r: Readable<Accessor<D>>;
  xGet: Readable<Get<D>>;
  yGet: Readable<Get<D>>;
  rGet: Readable<Get<D>>;
  xScale: Readable<Scale<D>>;
  yScale: Readable<Scale<D>>;
  rScale: Readable<Scale<D>>;
  custom: Readable<Record<string, any>>;
}
