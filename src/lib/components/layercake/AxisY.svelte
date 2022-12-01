<script lang="ts">
  import { getContext } from 'svelte';
  import { axis, type AxisOptions } from 'friendly-charts';

  import type { LayerCakeContext } from '$lib/components/layercake/types';
  import LineH from '$lib/components/layercake/LineH.svelte';
  import LineV from '$lib/components/layercake/LineV.svelte';
  import SvgText from '$lib/components/layercake/SvgText.svelte';

  type D = $$Generic;

  const { yScale } = getContext<LayerCakeContext<D>>('LayerCake');

  export let n: number | undefined = undefined;
  export let ticks = $yScale.ticks(n) as any[];

  export let showDomainLine = false;
  export let showGridLines = true;
  export let showTickLines = false;
  export let tickLength = 6;
  export let tickLabelPadding = 8;

  export let label: AxisOptions['label'] | undefined = undefined;

  let friendly: AxisOptions;
  $: if (label != undefined) {
    friendly = {
      label,
      direction: 'y',
      type: $yScale.bandwidth == undefined ? 'continuous' : 'categorical',
      ticks: 'text.tick',
    };
  }
</script>

<g class="axis-y" use:axis={friendly}>
  {#if showDomainLine}
    <LineV class="tick-line" />
  {/if}
  {#each ticks as tick}
    <g transform="translate(0, {$yScale(tick)})">
      {#if showTickLines}
        <LineH class="tick-line" x2={tickLength} />
      {/if}
      {#if showGridLines}
        <LineH class="grid-line" />
      {/if}
      <SvgText
        class="tick"
        xAlign="right"
        yAlign="center"
        xOffset={-tickLabelPadding}
      >
        <slot {tick}>
          {tick}
        </slot>
      </SvgText>
    </g>
  {/each}
</g>
