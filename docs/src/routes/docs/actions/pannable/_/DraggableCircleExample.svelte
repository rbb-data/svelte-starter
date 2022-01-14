<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import DraggableCircle from './DraggableCircle.svelte';

  const script = `import { writable } from 'svelte/store';
import pannable, { drag } from '$lib/actions/pannable';

// store the circle's position in a writable store (this could also be a spring)
const coords = writable({ x: 0, y: 0 });`;

  const markup = `<!--call the imported drag function on 'coords' when the pointer's position changes -->
<circle
  cx={$coords.x}
  cy={$coords.y}
  use:pannable
  on:panmove={drag(coords)}
  r="20"
  fill="steelblue"
/>`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet
      slot="left"
      title="DraggableCircleExample.svelte"
      {script}
      {markup}
    />
    <DraggableCircle slot="right" />
  </Showcase>
</div>
