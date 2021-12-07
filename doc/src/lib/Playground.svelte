<script>
  import pannable from '$lib/pannable.js';

  // width minus padding
  export let width = 0;
  export let padding = 10;

  // available width
  let maxWidth = 0;

  // width of the canvas
  let _width = 0;

  $: _width = maxWidth;
  $: width = _width - padding * 2;

  function handlePanMove(e) {
    _width += +e.detail.dx;
  }
</script>

<div class="wrapper" bind:clientWidth={maxWidth}>
  {#if maxWidth > 0}
    <div class="canvas" style={`padding: ${padding}px; width: ${_width}px`}>
      <slot />
      <div class="resizer" use:pannable on:panmove={handlePanMove} />
    </div>
  {/if}
</div>

<style>
  .wrapper {
    width: 100%;
  }

  .canvas {
    position: relative;
    margin: 2rem 0;
    border-radius: 5px;
    border: 1px solid var(--black);
  }

  .resizer {
    --width: 20px;

    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: var(--width);
    transform: translateX(calc(var(--width) / 2));
  }

  .resizer:hover {
    cursor: ew-resize;
  }
</style>
