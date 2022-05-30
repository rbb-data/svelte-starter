<script>
  import Demo from '$lib/components/demo/Demo.svelte';

  import googleDoc from '$data/googleDoc.json';
  import data from '$data/example-data.csv';

  const { header } = googleDoc;
</script>

<div class="wrapper">
  <Demo {data} {header} />
</div>

<style>
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
