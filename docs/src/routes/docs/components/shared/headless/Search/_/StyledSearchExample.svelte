<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import StyledSearch from './StyledSearch.svelte';

  const markup = `<div class="wrapper">
  <Search
    search={fuzzysearch}
    searchConfig={{ data: bezirke }}
    label="Suche einen Berliner Bezirk"
    hideLabel
    placeholder="Suche einen Bezirk"
    hideSubmitButton
  >
    <!-- Setting an aria-label ensures screen readers can announce this button -->
    <button slot="reset-button" type="reset" aria-label="Zurücksetzen">
      &#x2715
    </button>
  </Search>
</div>`;

  const style = `.wrapper {
  --offset: 10px;
  --border-radius: 25px;
  --border-radius-small: 15px;
}

.wrapper :global(.search .input-wrapper) {
  width: 100%;
}

.wrapper :global(.search input) {
  border-radius: var(--border-radius);
  border: 1px solid darkgrey;
  padding-left: var(--offset);
  width: 100%;
}

.wrapper :global(.search li) {
  background-color: aliceblue;
  padding: 5px 5px 5px var(--offset);
  border-top: 1px solid #fff;
}

.wrapper :global(.search li.active) {
  background-color: steelblue;
  color: #fff;
}

.wrapper :global(.search li:first-of-type) {
  border-top-left-radius: var(--border-radius-small);
  border-top-right-radius: var(--border-radius-small);
}

.wrapper :global(.search li:last-of-type) {
  border-bottom-left-radius: var(--border-radius-small);
  border-bottom-right-radius: var(--border-radius-small);
}

button[type='reset'] {
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
    <SvelteSnippet slot="left" title="StyledSearch.svelte" {markup} {style} />
    <StyledSearch slot="right" />
  </Showcase>
</div>
