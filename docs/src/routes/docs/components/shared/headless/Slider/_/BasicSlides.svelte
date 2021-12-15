<script>
  import { Slider } from '@rbb-data/svelte-starter';

  // renders a single Slide
  import Slide from './Slide.svelte';

  // contructs slides for consumption by Slider
  const labels = ['Slide #1', 'Slide #2', 'Slide #3', 'Slide #4'];
  const slides = labels.map((label, i) => ({
    component: Slide,
    props: { label, color: i % 2 === 0 ? 'aliceblue' : 'lavender' },
  }));
  const nSlides = slides.length;

  // index of the currenlty visible slide
  let activeIndex = 0;
</script>

<Slider
  {slides}
  prev={(idx) => (idx - 1 >= 0 ? idx - 1 : null)}
  next={(idx) => (idx + 1 <= nSlides - 1 ? idx + 1 : null)}
  bind:activeIndex
/>

Active: {labels[activeIndex]}
