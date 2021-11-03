<script lang="ts">
  export let width = 0;
  export let height = 0;

  export let boundedWidth = 0;
  export let boundedHeight = 0;

  export let margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  export let debug = false;

  $: boundedWidth = width - margin.left - margin.right;
  $: boundedHeight = height - margin.top - margin.bottom;
</script>

<svg {width} {height} viewBox={[0, 0, width, height].join(' ')}>
  {#if debug}
    <rect {width} {height} fill="none" stroke="black" />
  {/if}
  <g transform={`translate(${margin.left}, ${margin.top})`}>
    {#if debug}
      <rect width={boundedWidth} height={boundedHeight} fill="aliceblue" />
    {/if}
    <slot />
  </g>
</svg>
