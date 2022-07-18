<script>
  /**
   * Visually hides content but exposes it to screen readers.
   *
   * @component
   */

  export let debug = false;
</script>

<div class:visually-hidden={!debug}>
  <slot />
</div>

<style lang="scss">
  .visually-hidden {
    @include visually-hidden;
  }
</style>
