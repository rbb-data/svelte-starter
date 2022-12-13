<script lang="ts">
  /**
   * Horizontal bar
   *
   * @component
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
  $: width = $$restProps.width || 100;
  $: height = $$restProps.height || 20;

  $: if (data != undefined && ctx != undefined) {
    ctxData = ctx.data;
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    xScale = ctx.xScale;
    yScale = ctx.yScale;

    y = get($yGet, data, yIndex);

    if (isStacked($ctxData)) {
      x = get($xGet, data, xIndex);

      const xVals = $xGet(data) as number[];
      width = xVals[1] - xVals[0];
    } else {
      x = $xScale.range()[0];
      width = get($xGet, data, xIndex);
    }

    if ($yScale.bandwidth) {
      height = $yScale.bandwidth();
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
      y={y + height / 2}
      yAlign="center"
      xOffset={4}
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
      y={y + height / 2}
      x={x + width}
      yAlign="center"
      xOffset={4}
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
