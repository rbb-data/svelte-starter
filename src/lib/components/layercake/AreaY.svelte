<script lang="ts">
  import { getContext } from 'svelte/internal';
  import { symbol, type SymbolOptions } from 'friendly-charts';
  import { area as d3area, type Area } from 'd3-shape';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let outline: string | undefined = undefined;
  $: outlineWidth = $$restProps['outline-width'];

  export let d: string | null | undefined = undefined;

  export let data: D[] | undefined = undefined;
  export let xIndex = 0;
  export let y0Index = 0;
  export let y1Index = 1;

  export let label: SymbolOptions['label'] | undefined = undefined;
  export let parent: SymbolOptions['parentId'] | undefined = undefined;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xGet: typeof ctx['xGet'], yGet: typeof ctx['yGet'];

  let area: Area<D>;
  $: if (data != undefined && ctx != undefined) {
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    area = d3area<typeof data[number]>()
      .x((d) => get($xGet, d, xIndex))
      .y0((d) => get($yGet, d, y0Index))
      .y1((d) => get($yGet, d, y1Index));
    d = area(data);
  }

  let friendly: SymbolOptions;
  $: if (label != undefined) {
    friendly = {
      id: $$restProps.id,
      type: 'area',
      label,
      parentId: parent,
    };
  }
</script>

<g
  class="area-y0"
  style:--_color={$$restProps.stroke || color || ''}
  style:--_outline={outline || ''}
  style:--_outline-width={outlineWidth || ''}
  style:--_opacity={$$restProps.opacity || ''}
  use:symbol={friendly}
>
  <path class:area={true} {...$$restProps} {d} />
</g>

<style>
  g {
    --__color: var(
      --_color,
      var(--chart-color-accent, var(--c-ui-accent-blue))
    );
    --__outline: var(--_outline, var(--chart-outline, none));
    --__outline-width: var(--_outline-width, var(--chart-outline-width, 1));
    --__opacity: var(--_opacity, var(--chart-opacity, 0.8));

    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .area {
    fill: var(--__color);
    stroke: var(--__outline);
    stroke-width: var(--__outline-width);
    opacity: var(--__opacity);
  }
</style>
