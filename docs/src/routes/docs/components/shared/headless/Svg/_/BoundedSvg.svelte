<script>
  import { Svg } from '@rbb-data/svelte-starter';

  /** @type {number} */
  let boundedWidth;

  /** @type {number} */
  let boundedHeight;
</script>

<Svg
  width={100}
  height={100}
  margin={{ top: 30, right: 20, bottom: 10, left: 10 }}
  bind:boundedWidth
  bind:boundedHeight
  debug
>
  <circle cx="0" cy="0" r="5" fill="steelblue" />
  <circle cx="0" cy={boundedHeight} r="5" fill="steelblue" />
  <circle cx={boundedWidth} r="5" cy="0" fill="steelblue" />
  <circle cx={boundedWidth} r="5" cy={boundedHeight} fill="steelblue" />
</Svg>
