<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import StyledTabs from './StyledTabs.svelte';

  const markup = `<div class="wrapper">
  <Tabs {tabs} bind:activeIndex let:tab let:active>
    <span class:active>{tab}</span>
  </Tabs>
</div>`;

  const style = `.wrapper :global(.tabs) {
  display: flex;
  gap: 10px;
}

.wrapper :global(.tabs li) {
  flex: 1;
  text-align: center;
  background-color: aliceblue;
  border-radius: 0.4rem;
}

.wrapper :global(.tabs li.active) {
  outline: 3px solid steelblue;
}`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet slot="left" title="StyledTabs.svelte" {markup} {style} />
    <StyledTabs slot="right" />
  </Showcase>
</div>
