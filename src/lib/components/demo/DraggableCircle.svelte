<script>
  import { writable } from 'svelte/store';

  import Arrows from './Arrows.svelte';

  import pannable, { drag } from '$lib/actions/pannable';
  import { translate } from '$lib/utils';

  // initial x and y coordinates
  /** @type {number} */
  export let cx;

  /** @type {number} */
  export let cy;

  export let radius = 5;

  /** @type {'x' | 'y' | 'xy'} */
  export let axis = 'xy';

  // if given, the dot is restricted to move within these bounds
  /** @type {{ top: number; right: number; bottom: number; left: number }} */
  export let bounds = undefined;

  // position of the dot (could also be a spring)
  const coords = writable({ x: cx, y: cy });

  let showArrows = true;
</script>

<g transform={translate([$coords.x, $coords.y])}>
  <Arrows offset={radius + 4} show={showArrows} />
  <circle
    use:pannable
    on:panstart={() => (showArrows = false)}
    on:panmove={drag(coords, { axis, bounds })}
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
