<script lang="ts">
  type Slide = $$Generic;

  export let slides: Slide[];

  // exposed for binding
  export let activeIndex = 0;

  // go to the next slide (exposed for binding)
  export const next = () => {
    if (activeIndex + 1 < n) {
      activeIndex += 1;
    }
  };

  // go to the previous slide (exposed for binding)
  export const previous = () => {
    if (activeIndex - 1 >= 0) {
      activeIndex -= 1;
    }
  };

  $: n = slides.length;
  $: translateX = -activeIndex * (100 / n);
</script>

<div
  class="slider | splitter"
  style:width="{n * 100}%"
  style:transform="translateX({translateX}%)"
>
  {#each slides as slide, i}
    <div class="slider__slide" style:width="{100 / n}%">
      {#if i >= activeIndex - 1 && i <= activeIndex + 1}
        <slot {slide} index={i} active={i === activeIndex}>
          {slide}
        </slot>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss">
  .slider {
    --_slides-transition-duration: var(--slides-transition-duration, 0.6s);
    --_slides-transition-easing: var(--slides-transition-easing, ease-out);

    --splitter-gap: 0;

    transition: transform var(--_slides-transition-duration)
      var(--_slides-transition-easing);
  }
</style>
