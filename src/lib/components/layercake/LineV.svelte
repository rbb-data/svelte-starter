<script lang="ts">
  /**
   * Data-driven `<line />` (vertical)
   *
   * @component
   */

  import { getContext } from 'svelte/internal';

  import type { LayerCakeContext, Accessor } from './types';

  import Line from './Line.svelte';

  type D = $$Generic;

  export let x: string | number | undefined = undefined;

  export let xData: ReturnType<Accessor<D>> | undefined = undefined;
  export let yData:
    | [ReturnType<Accessor<D>>, ReturnType<Accessor<D>>]
    | undefined = undefined;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xScale: typeof ctx['xScale'],
    yScale: typeof ctx['yScale'],
    height: typeof ctx['height'];

  $: y1 = $$restProps.y1 || 0;
  $: y2 = $$restProps.y2 || 0;

  $: x1 = x || 0;
  $: x2 = x || 0;

  $: if (ctx != undefined) {
    height = ctx.height;

    // by default, make the line full-height
    y2 = $$restProps.y2 || $height;

    // use data to set the x-coordinate
    if (xData != undefined) {
      xScale = ctx.xScale;
      x1 = x2 = $xScale(xData);
    }

    // use data to set the y-coordinates
    // if null, set y1 to 0 and y2 to null
    if (yData != undefined) {
      yScale = ctx.yScale;
      y1 = yData[0] === null ? 0 : $yScale(yData[0]);
      y2 = yData[1] === null ? $height : $yScale(yData[1]);
    }
  }
</script>

<g class:vertical-line={true} class={$$restProps.class}>
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

  .zero-line {
    --_color: var(--chart-color-mute, var(--c-ui-gray-400));
  }

  .tick-line {
    --_color: var(--chart-color-mute, var(--c-ui-gray-300));
  }

  .grid-line {
    --_color: var(--chart-color-mute, var(--c-ui-gray-200));
  }
</style>
