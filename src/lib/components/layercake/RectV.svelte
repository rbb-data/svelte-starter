<script lang="ts">
  import { getContext } from 'svelte';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let outline: string | undefined = 'none';
  $: outlineWidth = $$restProps['outline-width'];

  export let data: [D, D] | undefined = undefined;
  export let xIndex = 0;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let ctxHeight: typeof ctx['height'], xGet: typeof ctx['xGet'];

  $: x = $$restProps.x || 0;
  $: y = $$restProps.y || 0;
  $: width = $$restProps.width || 20;
  $: height = $$restProps.height || 100;

  $: isHeightSet = $$restProps.height != undefined;

  $: if (data != undefined && ctx != undefined) {
    ctxHeight = ctx.height;
    xGet = ctx.xGet;

    x = get($xGet, data[0], xIndex);

    if (!isHeightSet) height = $ctxHeight;
    y = $ctxHeight - height;

    let x2 = get($xGet, data[1], xIndex);
    width = x2 - x;
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
