<script>
  import { css } from '@rbb-data/svelte-starter';

  /** @type {string} */
  export let label;

  export let color = 'aliceblue';
</script>

<div use:css={{ color }}>{label}</div>

<style>
  div {
    background-color: var(--color);
    padding: 10px 5px;
  }
</style>
