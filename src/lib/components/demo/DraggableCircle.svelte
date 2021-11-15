<script lang="ts">
  import { writable } from 'svelte/store';

  import Arrows from './Arrows.svelte';

  import pannable, { drag } from '$lib/actions/pannable';
  import { translate } from '$lib/helpers/utils';

  // initial x and y coordinates
  export let cx: number;
  export let cy: number;

  // size of the circle
  export let radius = 5;

  // if given, the dot is restricted to move within these bounds
  export let bounds: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  } = undefined;

  // position of the dot (could also be a spring)
  const coords = writable({ x: cx, y: cy });

  let showArrows = true;
</script>

<g transform={translate([$coords.x, $coords.y])}>
  <Arrows offset={radius + 4} show={showArrows} />
  <circle
    use:pannable
    on:panstart={() => (showArrows = false)}
    on:panmove={drag(coords, { bounds })}
    on:panend={() => (showArrows = true)}
    r={radius}
  />
</g>

<style>
  circle {
    fill: steelblue;
  }

  circle:hover {
    cursor: move;
  }
</style>
