<script lang="ts">
  import { getContext } from 'svelte/internal';

  import type { LayerCakeContext, Accessor } from './types';

  import Line from './Line.svelte';

  type D = $$Generic;

  export let y: string | number | undefined = undefined;

  export let yData: ReturnType<Accessor<D>> | undefined = undefined;
  export let xData:
    | [ReturnType<Accessor<D>>, ReturnType<Accessor<D>>]
    | undefined = undefined;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xScale: typeof ctx['xScale'],
    yScale: typeof ctx['yScale'],
    width: typeof ctx['width'];

  $: x1 = $$restProps.x1 || 0;
  $: x2 = $$restProps.x2 || 0;

  $: y1 = y || 0;
  $: y2 = y || 0;

  $: if (ctx != undefined) {
    width = ctx.width;

    // by default, make the line full-width
    x2 = $$restProps.x2 || $width;

    // use data to set the y-coordinate
    if (yData != undefined) {
      yScale = ctx.yScale;
      y1 = y2 = $yScale(yData);
    }

    // use data to set the x-coordinates
    // if null, set x1 to 0 and x2 to null
    if (xData != undefined) {
      xScale = ctx.xScale;
      x1 = xData[0] === null ? 0 : $xScale(xData[0]);
      x2 = xData[1] === null ? $width : $xScale(xData[1]);
    }
  }
</script>

<g class:horizontal-line={true} class={$$restProps.class}>
  <Line {...$$restProps} {x1} {y1} {x2} {y2} />
</g>

<style>
  g {
    --_color: var(--chart-color-mute, var(--c-ui-gray-200));
    --_width: var(--chart-width-thin, 1);
    --_outline: white;
    --_outline-width: 0;
    --_opacity: 1;
  }

  .domain-line {
    --_color: var(--chart-color-mute, var(--c-ui-gray-400));
  }

  .tick-line {
    --_color: var(--chart-color-mute, var(--c-ui-gray-300));
  }

  .grid-line {
    --_color: var(--chart-color-mute, var(--c-ui-gray-200));
  }
</style>
