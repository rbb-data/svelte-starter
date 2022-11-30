<script>
  import Button from '$lib/components/shared/Button.svelte';
</script>

<div class="wrapper">
  <Button type="secondary" class="w-full">
    Option A braucht mehr Text zur Erläuterung
  </Button>
  <Button type="secondary" class="w-full">
    B kommt auch nicht mit 1 - 3 Worten aus
  </Button>
  <Button type="secondary" class="w-full">
    Option C ist ebenfalls etwas länger
  </Button>
</div>

<style lang="scss">
  .wrapper {
    --button-color-accent: var(--c-ui-accent-black);
  }

  .wrapper :global {
    .button {
      text-transform: none !important;

      & + .button {
        margin-top: var(--s-px-2);
      }
    }
  }
</style>
