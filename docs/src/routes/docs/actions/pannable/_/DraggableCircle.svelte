<script>
  import { writable } from 'svelte/store';

  import { pannable, drag } from '@rbb-data/svelte-starter';

  const radius = 20;

  // store the circle's position in a writable store (this could also be a spring)
  const coords = writable({ x: 0, y: 0 });
</script>

<svg
  width={radius * 2}
  height={radius * 2}
  viewBox={[-radius, -radius, 2 * radius, 2 * radius].join(' ')}
>
  <!--call the imported drag function on 'coords' when the pointer's position changes -->
  <circle
    cx={$coords.x}
    cy={$coords.y}
    use:pannable
    on:panmove={drag(coords)}
    r={radius}
  />
</svg>

<style>
  svg {
    overflow: visible;
  }

  circle {
    fill: steelblue;
  }

  circle:hover {
    cursor: move;
  }
</style>
