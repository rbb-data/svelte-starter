<script>
  import { css } from '@rbb-data/svelte-starter/actions';

  export let content;
  export let color;
</script>

<div use:css={{ color }}>{content}</div>

<style>
  div {
    height: 50px;
    background-color: var(--color);
    display: grid;
    place-items: center;
    font-weight: bold;
    border-radius: 5px;
    margin: 0 10px;
  }
</style>
