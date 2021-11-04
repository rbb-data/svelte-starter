<script lang="ts">
  // dimension of the chart
  export let width = 0;
  export let height = 0;

  // if true, show outline of the chart
  export let debug = false;

  $: viewBox = [-width / 2, -height / 2, width, height].join(' ');
</script>

<svg class:debug {width} {height} {viewBox}>
  <slot />
</svg>

<style>
  svg.debug {
    outline: black dashed 1px;
  }
</style>
