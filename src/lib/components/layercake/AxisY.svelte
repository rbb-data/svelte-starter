<script lang="ts">
  /**
   * Y-Axis
   *
   * @component
   */

  import { getContext } from 'svelte';
  import { axis, type AxisOptions } from 'friendly-charts';

  import type { LayerCakeContext } from '$lib/components/layercake/types';

  import LineH from '$lib/components/layercake/LineH.svelte';
  import LineV from '$lib/components/layercake/LineV.svelte';
  import SvgText from '$lib/components/layercake/SvgText.svelte';

  type D = $$Generic;

  const { yScale } = getContext<LayerCakeContext<D>>('LayerCake');

  const isCategorical = $yScale.bandwidth != undefined;

  export let n: number | undefined = undefined;
  export let ticks = isCategorical
    ? $yScale.domain()
    : ($yScale.ticks(n) as any[]);

  export let showDomainLine = false;
  export let showGridLines = !isCategorical;
  export let showTickLines = false;

  export let tickLength = 6;
  export let tickLabelPadding = 8;

  export let label: AxisOptions['label'] | undefined = undefined;

  let friendly: AxisOptions;
  $: if (label != undefined) {
    friendly = {
      label,
      direction: 'y',
      type: isCategorical ? 'categorical' : 'continuous',
      ticks: isCategorical ? 'text.category-tick' : 'text.tick',
    };
  }
</script>

<g
  class:axis-y={true}
  class={$$restProps.class}
  style={$$restProps.style}
  use:axis={friendly}
>
  {#if showDomainLine}
    <LineV class="tick-line" />
  {/if}
  {#each ticks as tick}
    {@const y =
      $yScale(tick) +
      ($yScale.bandwidth != undefined ? $yScale.bandwidth() / 2 : 0)}

    <g transform="translate(0, {y})">
      {#if showGridLines}
        <LineH class="grid-line" />
      {/if}
      {#if showTickLines}
        <LineH
          class={showDomainLine ? 'domain-line' : 'tick-line'}
          x2={-tickLength}
        />
      {/if}
      <SvgText
        class={isCategorical ? 'category-tick' : 'tick'}
        xAlign="right"
        yAlign="center"
        xOffset={-tickLabelPadding - (showTickLines ? tickLength : 0)}
        outline="none"
      >
        <slot {tick}>
          {tick}
        </slot>
      </SvgText>
    </g>
  {/each}
</g>
