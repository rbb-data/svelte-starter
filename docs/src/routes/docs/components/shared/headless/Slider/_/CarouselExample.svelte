<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import Carousel from './Carousel.svelte';

  const markup = `<Slider
  {slides}
  prev={(idx) => (idx - 1 >= 0 ? idx - 1 : nSlides - 1)}
  next={(idx) => (idx + 1 <= nSlides - 1 ? idx + 1 : 0)}
/>`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet slot="left" title="Carousel.svelte" {markup} />
    <Carousel slot="right" />
  </Showcase>
</div>
