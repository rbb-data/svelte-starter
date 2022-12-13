<script lang="ts">
  /**
   * Data-driven `<path />`
   *
   * @component
   */

  import { getContext } from 'svelte/internal';
  import {
    symbol,
    group as fGroup,
    type SymbolOptions,
    type GroupOptions,
  } from 'friendly-charts';
  import { line as d3line } from 'd3-shape';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let width: number | undefined = undefined;
  export let outline: string | undefined = undefined;
  $: outlineWidth = $$restProps['outline-width'];

  export let d: string | null | undefined = undefined;

  export let data: D[] | undefined = undefined;
  export let xIndex = 0;
  export let yIndex = 0;

  export let group = false;
  export let label: SymbolOptions['label'] | undefined = undefined;
  export let parent: SymbolOptions['parentId'] | undefined = undefined;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let ctxData: typeof ctx['data'],
    xGet: typeof ctx['xGet'],
    yGet: typeof ctx['yGet'];

  $: if (ctx != undefined) {
    if (data == undefined) {
      ctxData = ctx.data;
      data = $ctxData;
    }
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    d = d3line<typeof data[number]>()
      .x((d) => get($xGet, d, xIndex))
      .y((d) => get($yGet, d, yIndex))(data);
  }

  let friendlyS: SymbolOptions;
  let friendlyG: GroupOptions;
  $: if (label != undefined) {
    if (group) {
      if ($$restProps.id == undefined) {
        console.warn(`Specify an id for line with label "${label}"`);
      }

      friendlyG = {
        id: $$restProps.id,
        type: 'line',
        label,
      };
    } else {
      friendlyS = {
        id: $$restProps.id,
        type: 'line',
        label,
        parentId: parent,
      };
    }
  }
</script>

<g
  class="path"
  style:--_color={$$restProps.stroke || color || ''}
  style:--_width={$$restProps['stroke-width'] || width || ''}
  style:--_outline={outline || ''}
  style:--_outline-width={outlineWidth || ''}
  style:--_opacity={$$restProps.opacity || ''}
  use:symbol={friendlyS}
  use:fGroup={friendlyG}
>
  {#if outline !== 'none'}
    <path class:outline={true} {...$$restProps} {d} />
  {/if}
  <path {...$$restProps} {d} />
</g>

<style>
  g {
    --__color: var(--_color, var(--chart-color-accent, var(--c-category-blue)));
    --__width: var(--_width, var(--chart-width, 3));
    --__outline: var(--_outline, var(--chart-outline, white));
    --__outline-width: var(--_outline-width, var(--chart-outline-width, 1));
    --__opacity: var(--_opacity, var(--chart-opacity, 1));

    fill: none;
    stroke-linejoin: round;
    stroke-linecap: round;
    opacity: var(--__opacity);
  }

  path {
    stroke: var(--__color);
    stroke-width: var(--__width);
  }

  .outline {
    stroke: var(--__outline);
    stroke-width: calc(var(--__width) + 2 * var(--__outline-width));
  }
</style>
