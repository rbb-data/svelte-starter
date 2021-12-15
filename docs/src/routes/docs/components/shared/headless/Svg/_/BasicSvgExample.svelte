<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import Snippet from '$lib/components/Snippet.svelte';

  import BasicSvg from './BasicSvg.svelte';

  const markup = `<Svg
  width={100}
  height={100}
  margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
  debug
/>`;
</script>

<div class="wide">
  <Showcase>
    <Snippet
      slot="left"
      title="BasicSvg.svelte"
      source={markup}
      language="svelte"
    />
    <BasicSvg slot="right" />
  </Showcase>
</div>
