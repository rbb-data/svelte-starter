<script lang="ts">
  import { getContext } from 'svelte/internal';
  import { symbol, type SymbolOptions } from 'friendly-charts';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let outline: string | undefined = undefined;
  $: outlineWidth = $$restProps['outline-width'];

  export let data: D | undefined = undefined;
  export let xIndex = 0;
  export let yIndex = 0;
  export let rIndex = 0;

  export let label: SymbolOptions['label'] | undefined = undefined;
  export let parent: SymbolOptions['parentId'] | undefined = undefined;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xGet: typeof ctx['xGet'],
    yGet: typeof ctx['yGet'],
    rGet: typeof ctx['rGet'];

  $: cx = $$restProps.cx || 0;
  $: cy = $$restProps.cy || 0;
  $: r = $$restProps.r || 4;

  $: if (data != undefined && ctx != undefined) {
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    rGet = ctx.rGet;
    cx = get($xGet, data, xIndex);
    cy = get($yGet, data, yIndex);
    try {
      r = get($rGet, data, rIndex);
      // eslint-disable-next-line no-empty
    } catch {}
  }

  let friendly: SymbolOptions;
  $: if (label != undefined) {
    friendly = {
      id: $$restProps.id,
      type: 'point',
      label,
      parentId: parent,
    };
  }
</script>

<circle
  class:no-outline={outline === 'none'}
  {...$$restProps}
  {cx}
  {cy}
  {r}
  style:--_color={$$restProps.fill || color || ''}
  style:--_outline={$$restProps.stroke || outline || ''}
  style:--_outline-width={$$restProps['stroke-width'] || outlineWidth || ''}
  style:--_opacity={$$restProps.opacity || ''}
  use:symbol={friendly}
/>

<style>
  circle {
    --__color: var(
      --_color,
      var(--chart-color-accent, var(--c-ui-accent-blue))
    );
    --__outline: var(--_outline, var(--chart-outline, white));
    --__outline-width: var(--_outline-width, var(--chart-outline-width, 1));
    --__opacity: var(--_opacity, var(--chart-opacity, 1));

    fill: var(--__color);
    stroke: var(--__outline);
    stroke-width: var(--__outline-width);
    opacity: var(--__opacity);
  }

  .no-outline {
    --__outline-width: 0;
  }
</style>
