<script lang="ts">
  import { getContext } from 'svelte';
  import { symbol, type SymbolOptions } from 'friendly-charts';

  import { get, isStacked } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let outline: string | undefined = undefined;
  $: outlineWidth = $$restProps['outline-width'];

  export let data: D | undefined = undefined;
  export let xIndex = 0;
  export let yIndex = 0;

  export let label: SymbolOptions['label'] | undefined = undefined;
  export let parent: SymbolOptions['parentId'] | undefined = undefined;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let ctxData: typeof ctx['data'],
    xGet: typeof ctx['xGet'],
    yGet: typeof ctx['yGet'],
    xScale: typeof ctx['xScale'],
    yScale: typeof ctx['yScale'];

  $: x = $$restProps.x || 0;
  $: y = $$restProps.y || 0;
  $: width = $$restProps.width || 20;
  $: height = $$restProps.height || 100;

  $: if (data != undefined && ctx != undefined) {
    ctxData = ctx.data;
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    xScale = ctx.xScale;
    yScale = ctx.yScale;

    x = get($xGet, data, xIndex);

    if (isStacked($ctxData)) {
      y = get($yGet, data, yIndex);

      const yVals = $yGet(data) as number[];
      width = yVals[1] - yVals[0];
    } else {
      height = get($yGet, data, yIndex);
      y = $yScale.range()[0] - height;
    }

    if ($xScale.bandwidth) {
      width = $xScale.bandwidth();
    }
  }

  let friendly: SymbolOptions;
  $: if (label != undefined) {
    friendly = {
      id: $$restProps.id,
      type: 'bar',
      label,
      parentId: parent,
    };
  }
</script>

<rect
  class:no-outline={outline === 'none'}
  {...$$restProps}
  {x}
  {y}
  {width}
  {height}
  style:--_color={$$restProps.fill || color || ''}
  style:--_outline={$$restProps.stroke || outline || ''}
  style:--_outline-width={$$restProps['stroke-width'] || outlineWidth || ''}
  style:--_opacity={$$restProps.opacity || ''}
  use:symbol={friendly}
/>

<style>
  rect {
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
