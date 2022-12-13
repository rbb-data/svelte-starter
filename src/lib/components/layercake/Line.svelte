<script lang="ts">
  /**
   * Data-driven `<line />`
   *
   * @component
   */

  import { getContext } from 'svelte/internal';
  import { symbol, type SymbolOptions } from 'friendly-charts';

  import { get } from './utils';
  import type { LayerCakeContext } from './types';

  type D = $$Generic;

  export let color: string | undefined = undefined;
  export let width: number | undefined = undefined;
  export let outline: string | undefined = undefined;
  $: outlineWidth = $$restProps['outline-width'];

  export let data: [D, D] | undefined = undefined;
  export let xIndex = 0;
  export let yIndex = 0;

  export let label: SymbolOptions['label'] | undefined = undefined;
  export let parent: SymbolOptions['parentId'] | undefined = undefined;

  const ctx = getContext<LayerCakeContext<D>>('LayerCake');
  let xGet: typeof ctx['xGet'], yGet: typeof ctx['yGet'];

  $: x1 = $$restProps.x1 || 0;
  $: y1 = $$restProps.y1 || 0;
  $: x2 = $$restProps.x2 || 0;
  $: y2 = $$restProps.y2 || 0;

  $: if (data != undefined && ctx != undefined) {
    xGet = ctx.xGet;
    yGet = ctx.yGet;
    x1 = get($xGet, data[0], xIndex);
    y1 = get($yGet, data[0], yIndex);
    x2 = get($xGet, data[1], xIndex);
    y2 = get($yGet, data[1], yIndex);
  }

  let friendly: SymbolOptions;
  $: if (label != undefined) {
    friendly = {
      id: $$restProps.id,
      type: 'line',
      label,
      parentId: parent,
    };
  }
</script>

<g
  class="line"
  style:--_color={$$restProps.stroke || color || ''}
  style:--_width={$$restProps['stroke-width'] || width || ''}
  style:--_outline={outline || ''}
  style:--_outline-width={outlineWidth || ''}
  style:--_opacity={$$restProps.opacity || ''}
  use:symbol={friendly}
>
  {#if outline !== 'none'}
    <line class:outline={true} {...$$restProps} {x1} {y1} {x2} {y2} />
  {/if}
  <line {...$$restProps} {x1} {y1} {x2} {y2} />
</g>

<style>
  g {
    --__color: var(--_color, var(--chart-color-accent, var(--c-ui-gray-400)));
    --__width: var(--_width, var(--chart-width, 3));
    --__outline: var(--_outline, var(--chart-outline, white));
    --__outline-width: var(--_outline-width, var(--chart-outline-width, 1));
    --__opacity: var(--_opacity, var(--chart-opacity, 1));

    stroke-linejoin: round;
    stroke-linecap: round;
    opacity: var(--__opacity);
  }

  line {
    stroke: var(--__color);
    stroke-width: var(--__width);
  }

  .outline {
    stroke: var(--__outline);
    stroke-width: calc(var(--__width) + 2 * var(--__outline-width));
  }
</style>
