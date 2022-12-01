<script lang="ts">
  import { getContext } from 'svelte';
  import { axis, type AxisOptions } from 'friendly-charts';

  import type { LayerCakeContext } from '$lib/components/layercake/types';
  import LineH from '$lib/components/layercake/LineH.svelte';
  import LineV from '$lib/components/layercake/LineV.svelte';
  import SvgText from '$lib/components/layercake/SvgText.svelte';

  type D = $$Generic;

  const { xScale, height } = getContext<LayerCakeContext<D>>('LayerCake');

  export let n: number | undefined = undefined;
  export let ticks = $xScale.ticks(n) as any[];

  export let showDomainLine = true;
  export let tickLength = 6;
  export let tickLabelPadding = 6;

  export let label: AxisOptions['label'] | undefined = undefined;

  let friendly: AxisOptions;
  $: if (label != undefined) {
    friendly = {
      label,
      direction: 'x',
      type: $xScale.bandwidth == undefined ? 'continuous' : 'categorical',
      ticks: 'text.tick',
    };
  }
</script>

<g class="axis-x" transform="translate(0, {$height})" use:axis={friendly}>
  {#if showDomainLine}
    <LineH class="domain-line" />
  {/if}
  {#each ticks as tick}
    <g transform="translate({$xScale(tick)}, 0)">
      <LineV
        class={showDomainLine ? 'domain-line' : 'tick-line'}
        y2={tickLength}
      />
      <SvgText
        class="tick"
        xAlign="center"
        yAlign="top"
        yOffset={tickLength + tickLabelPadding}
        outline="none"
      >
        <slot {tick}>
          {tick}
        </slot>
      </SvgText>
    </g>
  {/each}
</g>
