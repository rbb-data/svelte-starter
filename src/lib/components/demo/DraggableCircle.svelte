<script lang="ts">
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';

  import Arrow from './Arrow.svelte';
  import css from '$lib/actions/css';
  import pannable, { handlePanMove } from '$lib/actions/pannable';
  import { translate } from '$lib/helpers/utils';

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

  // specify arrows
  const offset = 4;
  const arrows: Array<{
    orientation: 'n' | 'w' | 's' | 'e';
    xy: Array<number>;
  }> = [
    { orientation: 'n', xy: [0, -radius - offset] },
    { orientation: 'w', xy: [radius + offset, 0] },
    { orientation: 's', xy: [0, radius + offset] },
    { orientation: 'e', xy: [-radius - offset, 0] },
  ];

  // arrows are hidden when a dot is dragged
  let arrowOpacity = tweened(1);
</script>

<g transform={translate([$coords.x, $coords.y])}>
  {#each arrows as arrow}
    <g
      class="arrow"
      transform={translate(arrow.xy)}
      use:css={{ opacity: $arrowOpacity }}
    >
      <Arrow orientation={arrow.orientation} color="darkgrey" />
    </g>
  {/each}
  <circle
    use:pannable
    on:panstart={() => arrowOpacity.set(0)}
    on:panmove={handlePanMove(coords, { bounds })}
    on:panend={() => arrowOpacity.set(1)}
    r={radius}
  />
</g>

<style>
  circle {
    fill: steelblue;
  }
  .arrow {
    opacity: var(--opacity);
  }
</style>
