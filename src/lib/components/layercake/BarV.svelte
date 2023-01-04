<script lang="ts">
  /**
   * Vertical bar
   */

  import { getContext } from 'svelte';
  import { symbol, type SymbolOptions } from 'friendly-charts';

  import SvgText from './SvgText.svelte';

  import { getHighestContrastColor } from '$lib/utils';
  import { get, isStacked } from './utils';
  import type { LayerCakeContext } from './types';
  import * as tokens from '$lib/tokens';

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

    let y0: number;
    let y1: number;
    if (isStacked($ctxData)) {
      const yVals = $yGet(data) as number[];
      y0 = yVals[0];
      y1 = yVals[1];
    } else {
      y0 = $yScale(0);
      y1 = get($yGet, data, yIndex);
    }

    height = Math.abs(y1 - y0);
    y = Math.min(y0, y1);

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

{#if data != undefined && ctx != undefined}
  {#if $$slots.default || $$slots.start}
    <SvgText
      class="font-regular"
      x={x + width / 2}
      y={y + height}
      xAlign="center"
      yOffset={-4}
      outline="none"
      color={getHighestContrastColor(
        $$restProps.fill || color || tokens.cCategoryBlue
      )}
    >
      {#if $$slots.default}
        <slot />
      {/if}
      {#if $$slots.start}
        <slot name="start" />
      {/if}
    </SvgText>
  {/if}

  {#if $$slots.end}
    <SvgText
      class="font-regular"
      x={x + width / 2}
      {y}
      xAlign="center"
      yOffset={-4}
      outline="none"
    >
      <slot name="end" />
    </SvgText>
  {/if}
{/if}

<style>
  rect {
    --__color: var(--_color, var(--chart-color-accent, var(--c-category-blue)));
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
