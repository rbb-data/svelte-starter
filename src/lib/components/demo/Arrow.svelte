<script>
  import css from '$lib/actions/css';

  export let length = 10;

  /** @type {'n' | 'w' | 's' | 'e'} */
  export let orientation = 'w';

  export let color = 'black';

  const arrowHeadLength = 6;
  const arrowHeadWidth = 3;

  $: trajectory = [
    'M 0,0',
    'V',
    -length,
    'L',
    -arrowHeadWidth / 2,
    -length,
    'L',
    0,
    -length - arrowHeadLength,
    'L',
    arrowHeadWidth / 2,
    -length,
    'L',
    0,
    -length,
  ];

  $: rotate = {
    n: 0,
    w: 90,
    s: 180,
    e: 270,
  }[orientation];
</script>

<path
  d={trajectory.join(' ')}
  transform={`rotate(${rotate})`}
  use:css={{ color }}
/>

<style>
  path {
    stroke: var(--color);
    fill: var(--color);
  }
</style>
