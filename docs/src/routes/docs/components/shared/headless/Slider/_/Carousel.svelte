<script>
  import { Slider } from '@rbb-data/svelte-starter';

  import Slide from './Slide.svelte';

  const labels = ['Slide #1', 'Slide #2', 'Slide #3', 'Slide #4'];
  const slides = labels.map((label, i) => ({
    component: Slide,
    props: { label, color: i % 2 === 0 ? 'aliceblue' : 'lavender' },
  }));
  const nSlides = slides.length;
</script>

<Slider
  {slides}
  prev={(idx) => (idx - 1 >= 0 ? idx - 1 : nSlides - 1)}
  next={(idx) => (idx + 1 <= nSlides - 1 ? idx + 1 : 0)}
/>
