<script lang="ts">
  import { getContext } from 'svelte';

  import type { LayerCakeContext } from '$lib/components/layercake/types';
  import Path from '$lib/components/layercake/Path.svelte';
  import Circle from '$lib/components/layercake/Circle.svelte';

  import { capitalize } from '$lib/utils';

  import type { D } from './types';

  export let yIndex = 0;
  export let color: string;
  export let accessor: 'quark' | 'pudding';

  const { data } = getContext<LayerCakeContext<D>>('LayerCake');

  const dateFormatter = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'long',
  });
</script>

<Path
  {yIndex}
  {color}
  outline="none"
  label="{capitalize(accessor)}. {dateFormatter.format($data[0].x)}, {$data[0][
    accessor
  ]}%. {dateFormatter.format($data[1].x)}, {$data[1][accessor]}%"
/>
{#each $data as d}
  <Circle data={d} {yIndex} {color} outline="none" r="5" />
{/each}
