<script>
  import { micromark } from 'micromark';

  export let name;
  export let description = '';
</script>

<h1>{name}</h1>

{#if description}
  {@html micromark(description)}
{/if}
