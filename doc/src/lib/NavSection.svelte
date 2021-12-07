<script>
  export let heading;
  export let urlPrefix = '/';
  export let format = (d) => d;
  export let items = [];
</script>

<section>
  {heading}
  <ul>
    {#each items as item}
      <li><a href={`${urlPrefix}/${item}`}>{format(item)}</a></li>
    {/each}
  </ul>
</section>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
</style>
