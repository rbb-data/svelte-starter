<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { Slider } from '@rbb-data/svelte-starter';
  import Slide from '../helpers/Slide.svelte';

  const colors = ['aliceblue', 'lavender'];

  const slideContent = [
    'Slide #1',
    'Slide #2',
    'Slide #3',
    'Slide #4',
    'Slide #5',
    'Slide #6',
  ];

  const nSlides = slideContent.length;

  $: slides = slideContent.map((content, i) => ({
    component: Slide,
    props: {
      content,
      color: colors[i % 2],
    },
  }));
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
    prev: {
      name: 'prev',
      control: null,
      table: {
        type: {
          summary: '(activeIndex: number) => number',
        },
      },
    },
    next: {
      name: 'next',
      control: null,
      table: {
        type: {
          summary: '(activeIndex: number) => number',
        },
      },
    },
    activeIndex: {
      name: 'activeIndex',
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  }}
/>

<Template let:args>
  <Slider {slides} {...args} />
</Template>

<Story
  name="Basic"
  args={{
    prev: (idx) => (idx - 1 >= 0 ? idx - 1 : null),
    next: (idx) => (idx + 1 <= nSlides - 1 ? idx + 1 : null),
  }}
/>

<Story
  name="Carousel"
  args={{
    prev: (idx) => (idx - 1 >= 0 ? idx - 1 : nSlides - 1),
    next: (idx) => (idx + 1 <= nSlides - 1 ? idx + 1 : 0),
  }}
/>
