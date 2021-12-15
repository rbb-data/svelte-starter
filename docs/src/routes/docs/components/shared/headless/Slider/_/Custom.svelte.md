<script>
  import BasicSlidesExample from './BasicSlidesExample.svelte';
  import CarouselExample from './CarouselExample.svelte';
</script>

`Slider` keeps track of the active slide internally. Binding to this prop (`activeIndex`) is a common pattern.

<BasicSlidesExample />

`prev` and `next` determine the index of the previous and next slide; returning `null` means there is no slide to go to. A carousel, for example, could be implemented as:

<CarouselExample />
