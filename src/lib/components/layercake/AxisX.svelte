<script lang="ts">
  /**
   * X-Axis
   */

  import { getContext } from 'svelte';
  import { axis, type AxisOptions } from 'friendly-charts';

  import type { LayerCakeContext } from '$lib/components/layercake/types';

  import LineH from '$lib/components/layercake/LineH.svelte';
  import LineV from '$lib/components/layercake/LineV.svelte';
  import SvgText from '$lib/components/layercake/SvgText.svelte';

  type D = $$Generic;

  const { xScale, height } = getContext<LayerCakeContext<D>>('LayerCake');

  const isCategorical = $xScale.bandwidth != undefined;

  export let n: number | undefined = undefined;
  export let ticks = isCategorical
    ? $xScale.domain()
    : ($xScale.ticks(n) as any[]);

  export let showDomainLine = true;
  export let showGridLines = false;
  export let showTickLines = true;

  export let onTop = false;

  export let tickLength = 6;
  export let tickLabelPadding = 6;

  export let label: AxisOptions['label'] | undefined = undefined;

  $: direction = onTop ? -1 : 1;

  let friendly: AxisOptions;
  $: if (label != undefined) {
    friendly = {
      label,
      direction: 'x',
      type: isCategorical ? 'categorical' : 'continuous',
      ticks: isCategorical ? 'text.category-tick' : 'text.tick',
    };
  }
</script>

<g
  class:axis-x={true}
  class={$$restProps.class}
  style={$$restProps.style}
  use:axis={friendly}
>
  {#each ticks as tick}
    <g transform="translate({$xScale(tick)}, 0)">
      {#if showGridLines}
        <LineV class="grid-line" />
      {/if}
    </g>
  {/each}
  <g transform="translate(0, {onTop ? 0 : $height})">
    {#if showDomainLine}
      <LineH class="domain-line" />
    {/if}
    {#each ticks as tick}
      {@const x =
        $xScale(tick) +
        ($xScale.bandwidth != undefined ? $xScale.bandwidth() / 2 : 0)}

      <g transform="translate({x}, 0)">
        {#if showTickLines}
          <LineV
            class={showDomainLine ? 'domain-line' : 'tick-line'}
            y2={direction * tickLength}
          />
        {/if}
        <SvgText
          class={isCategorical ? 'category-tick' : 'tick'}
          xAlign="center"
          yAlign={onTop ? 'bottom' : 'top'}
          yOffset={direction *
            (tickLabelPadding + (showTickLines ? tickLength : 0))}
          outline="none"
        >
          <slot {tick}>
            {tick}
          </slot>
        </SvgText>
      </g>
    {/each}
  </g>
</g>
