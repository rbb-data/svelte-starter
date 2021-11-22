<script lang="ts">
  import { writable } from 'svelte/store';

  import Arrows from './Arrows.svelte';

  import pannable, { drag } from '$lib/actions/pannable';
  import { translate } from '$lib/helpers/utils';

  // initial x and y coordinates
  export let cx: number;
  export let cy: number;

  export let radius = 5;
  //this is a sort of ts definiton of what variables can be, correct???
  //because it is defined here, we can read it out
  //and there
  export let axis="x";

  // if given, the dot is restricted to move within these bounds
  export let bounds: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  } = undefined;


  // position of the dot (could also be a spring)
  //here
  const coords = writable({x:cx,y:cy});
  console.log($coords);
  let showArrows = true;
</script>
<!--and because axis is defined in the panmove-->
<g transform={translate([$coords.x,$coords.y])}>
  <Arrows offset={radius + 4} show={showArrows} />
  <circle
    use:pannable
    on:panstart={() => (showArrows = false)}
    on:panmove={drag(coords, {axis, bounds })}
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
