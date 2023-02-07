<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import Slides from './Slides.svelte';

  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];
  const complexSlides = [
    { label: 'Slide 1', data: [1, 2, 3] },
    { label: 'Slide 2', data: [2, 3, 4] },
    { label: 'Slide 3', data: [3, 4, 5] },
  ];

  let previous: () => void;
  let next: () => void;

  let previous2: () => void;
  let next2: () => void;

  let previous3: () => void;
  let next3: () => void;
</script>

<Hst.Story group="ui" title="Slides" layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Basic">
    <div class="buttons">
      <button on:click={() => previous()}>previous</button>
      <button on:click={() => next()}>next</button>
    </div>
    <Slides {slides} bind:previous bind:next />
  </Hst.Variant>

  <Hst.Variant title="Specify initially selected slide">
    <div class="buttons">
      <button on:click={() => previous2()}>previous</button>
      <button on:click={() => next2()}>next</button>
    </div>
    <Slides
      {slides}
      activeIndex={1}
      bind:previous={previous2}
      bind:next={next2}
    />
  </Hst.Variant>

  <Hst.Variant title="Complex slides">
    <div class="buttons">
      <button on:click={() => previous3()}>previous</button>
      <button on:click={() => next3()}>next</button>
    </div>
    <Slides
      slides={complexSlides}
      bind:previous={previous3}
      bind:next={next3}
      let:slide
    >
      {slide.label} (data: {slide.data})
    </Slides>
  </Hst.Variant>
</Hst.Story>

<style lang="scss">
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--s-px-3);
  }
</style>
