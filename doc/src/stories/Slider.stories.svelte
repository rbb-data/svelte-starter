<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Slider } from '@rbb-data/svelte-starter';
  import Slide from '../helpers/Slide.svelte';

  const colors = ['aliceblue', 'lavender'];

  const allSlides = [
    'Slide #1',
    'Slide #2',
    'Slide #3',
    'Slide #4',
    'Slide #5',
    'Slide #6',
  ];
  let currIdx = 0;

  const prev = (idx, carousel = false) =>
    idx - 1 >= 0 ? idx - 1 : carousel ? allSlides.length - 1 : null;
  const next = (idx, carousel = false) =>
    idx + 1 <= allSlides.length - 1 ? idx + 1 : carousel ? 0 : null;

  function constructSlide(idx) {
    if (idx === null) return null;
    return {
      component: Slide,
      props: {
        message: allSlides[idx],
        color: colors[idx % 2],
      },
    };
  }

  $: slides = [
    constructSlide(prev(currIdx)),
    constructSlide(currIdx),
    constructSlide(next(currIdx)),
  ];

  $: carouselSlides = [
    constructSlide(prev(currIdx, true)),
    constructSlide(currIdx),
    constructSlide(next(currIdx, true)),
  ];
</script>

<Meta
  title="Core/Slider"
  component={Slider}
  argTypes={{
    slides: {
      name: 'slides',
      table: {
        type: {
          summary:
            'Array<{ component: typeof SvelteComponent, props: Record<string, any> }>',
        },
      },
    },
    onForwardNavigation: {
      name: 'onForwardNavigation',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
    onBackwardNavigation: {
      name: 'onBackwardNavigation',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
  }}
/>

<Story name="Basic">
  <Slider
    {slides}
    onBackwardNavigation={() => (currIdx = prev(currIdx))}
    onForwardNavigation={() => (currIdx = next(currIdx))}
  />
</Story>

<Story name="Carousel">
  <Slider
    slides={carouselSlides}
    onBackwardNavigation={() => (currIdx = prev(currIdx, true))}
    onForwardNavigation={() => (currIdx = next(currIdx, true))}
  />
</Story>
