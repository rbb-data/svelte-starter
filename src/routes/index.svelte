<script>
  import Demo from '$lib/components/demo/Demo.svelte';

  import googleDoc from '$data/google-doc.json';
  import data from '$data/example-data.csv';
  import googleSheetData from '$data/google-sheet-example.csv';

  const { header } = googleDoc;
</script>

<div class="wrapper">
  <Demo {data} {header} />
  <pre>{JSON.stringify(googleSheetData, null, 2)}</pre>
</div>

<style>
  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
