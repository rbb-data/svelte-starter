<script>
  import Button from '$comps/shared/Button.svelte';
</script>

<div class="wrapper">
  <Button class="custom-button" type="secondary" accentColor="black">
    Option A braucht mehr Text zur Erläuterung
  </Button>
  <Button class="custom-button" type="secondary" accentColor="black">
    B kommt auch nicht mit 1 - 3 Worten aus
  </Button>
  <Button class="custom-button" type="secondary" accentColor="black">
    Option C ist ebenfalls etwas länger
  </Button>
</div>

<style lang="scss">
  .wrapper :global {
    .custom-button {
      width: 100%;
      text-transform: none !important;

      & + .custom-button {
        margin-top: var(--s-px-2);
      }
    }
  }
</style>
