<script lang="ts">
  import { writable } from 'svelte/store';

  import pannable, { handlePanMove } from '$lib/actions/pannable';

  // initial x and y coordinates
  export let cx: number;
  export let cy: number;

  export let radius = 5;

  // if given, dot is restricted to move within these bounds
  export let bounds: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  } = undefined;

  // position of the doc (could also be a spring)
  const coords = writable({ x: cx, y: cy });
</script>

<circle
  cx={$coords.x}
  cy={$coords.y}
  use:pannable
  on:panmove={handlePanMove(coords, { axis: 'xy', bounds })}
  r={radius}
/>

<style>
  circle {
    fill: steelblue;
  }
</style>
