<script lang="ts">
  /**
   * Data-driven `<rect />` (horizontal)
   */

  import { getContext } from 'svelte';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let outline: string | undefined = 'none';
  $: outlineWidth = $$restProps['outline-width'];

  export let data: [D, D] | undefined = undefined;
  export let yIndex = 0;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let ctxWidth: typeof ctx['width'], yGet: typeof ctx['yGet'];

  $: x = $$restProps.x || 0;
  $: y = $$restProps.y || 0;
  $: width = $$restProps.width || 100;
  $: height = $$restProps.height || 20;

  $: isWidthSet = $$restProps.width != undefined;

  $: if (data != undefined && ctx != undefined) {
    ctxWidth = ctx.width;
    yGet = ctx.yGet;

    x = 0;
    y = get($yGet, data[1], yIndex);

    if (!isWidthSet) width = $ctxWidth;

    let y2 = get($yGet, data[0], yIndex);
    height = y2 - y;
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
/>

<style>
  rect {
    --__color: var(--_color, var(--chart-color-mute, var(--c-ui-gray-100)));
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
