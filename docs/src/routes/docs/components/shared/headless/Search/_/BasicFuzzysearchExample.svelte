<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import Snippet from '$lib/components/Snippet.svelte';

  import BasicFuzzysearch from './BasicFuzzysearch.svelte';

  const markup = `<Search
  search={fuzzysearch}
  searchConfig={{ data: bezirke }}
  label="Suche einen Berliner Bezirk"
  placeholder="z.B. Mitte"
  submitButtonLabel="Suchen"
  resetButtonLabel="Zurücksetzen"
  bind:result
  debug
/>`;
</script>

<div class="wide">
  <Showcase>
    <Snippet
      slot="left"
      title="BasicFuzzysearch.svelte"
      source={markup}
      language="svelte"
    />
    <BasicFuzzysearch slot="right" />
  </Showcase>
</div>
