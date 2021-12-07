<script>
  import SvelteMarkdown from 'svelte-markdown';

  export let params;
</script>

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  {#each params as param}
    <tr>
      <td>{param.name}{param.optional ? '' : '*'}</td>
      <td><SvelteMarkdown source={param.description} isInline /></td>
      <td>{param.type}</td>
      <td>{param.default || '-'}</td>
    </tr>
  {/each}
</table>

<style>
  th {
    text-align: left;
  }
</style>
