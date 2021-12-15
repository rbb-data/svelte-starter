<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import CustomButton from './CustomButton.svelte';

  const markup = `<Search
  search={fuzzysearch}
  searchConfig={{ data: bezirke }}
  label="Suche einen Berliner Bezirk"
  placeholder="z.B. Mitte"
  submitButtonLabel="Suche"
  bind:result
  debug
>
  <!-- Setting an aria-label ensures screen readers can announce this button -->
  <button slot="reset-button" type="reset" aria-label="Zurücksetzen">
    &#x2715
  </button>
</Search>`;

  const style = `button[type='reset'] {
  position: absolute;
  bottom: 2px; /* magic value */
  transform: translateX(-150%);
  background: none;
  border: none;
}

button[type='reset']:hover {
  cursor: pointer;
}`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet slot="left" title="CustomButton.svelte" {markup} {style} />
    <CustomButton slot="right" />
  </Showcase>
</div>
