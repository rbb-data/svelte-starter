<script lang="ts">
  import { writable } from 'svelte/store';

  import Arrow from './Arrow.svelte';
  import pannable, { handlePanMove } from '$lib/actions/pannable';
  import { translate } from '$lib/helpers/utils';

  const offset = 4;

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

  let showArrows = true;
</script>

<g transform={translate([$coords.x, $coords.y])}>
  {#if showArrows}
    <g transform={translate([0, -radius - offset])}>
      <Arrow orientation="n" color="darkgrey" />
    </g>
    <g transform={translate([radius + offset, 0])}>
      <Arrow orientation="w" color="darkgrey" />
    </g>
    <g transform={translate([0, radius + offset])}>
      <Arrow orientation="s" color="darkgrey" />
    </g>
    <g transform={translate([-radius - offset, 0])}>
      <Arrow orientation="e" color="darkgrey" />
    </g>
  {/if}
  <circle
    use:pannable
    on:panstart={() => (showArrows = false)}
    on:panmove={handlePanMove(coords, { axis: 'xy', bounds })}
    on:panend={() => (showArrows = true)}
    r={radius}
  />
</g>

<style>
  circle {
    fill: steelblue;
  }
</style>
