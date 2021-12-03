<script>
  import { tweened } from 'svelte/motion';

  import Arrow from './Arrow.svelte';
  import css from '$lib/actions/css';
  import { translate } from '$lib/helpers/utils';

  /** @type {Array<'n' | 's' | 'e' | 'w'>} */
  export let orientations = ['n', 'w', 's', 'e'];

  export let offset = 10;

  export let show = true;

  // position of each arrow
  const translations = {
    n: [0, -offset],
    w: [offset, 0],
    s: [0, offset],
    e: [-offset, 0],
  };

  // toggle visibility of arrows via a smooth transition
  let arrowOpacity = tweened(+show);
  $: arrowOpacity.set(+show);
</script>

{#each orientations as orientation}
  <g
    class="arrow"
    transform={translate(translations[orientation])}
    use:css={{ opacity: $arrowOpacity }}
  >
    <Arrow {orientation} color="darkgrey" />
  </g>
{/each}

<style>
  .arrow {
    opacity: var(--opacity);
  }
</style>
