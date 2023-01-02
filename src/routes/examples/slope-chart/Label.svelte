<script lang="ts">
  import { getContext } from 'svelte';

  import type { LayerCakeContext } from '$lib/components/layercake/types';
  import HtmlText from '$lib/components/layercake/HtmlText.svelte';

  import type { D } from './types';

  export let data: D;
  export let yIndex = 0;
  export let color: string;

  const { y } = getContext<LayerCakeContext<D>>('LayerCake');

  $: yValue = ($y(data) as number[])[yIndex];
</script>

<HtmlText {data} {yIndex} yAlign="center" xOffset={8} {color}>
  <slot d={data} />
  <div class="label__value">
    {#if yValue > 0}+{/if}{yValue}%
  </div>
</HtmlText>

<style>
  .label__value {
    margin-top: calc(0.5 * var(--s-px-1));
    text-shadow: none;
    color: var(--c-black);
    font-weight: var(--font-weight-regular);
    font-style: italic;
  }
</style>
