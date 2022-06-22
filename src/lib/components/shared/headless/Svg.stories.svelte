<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Svg from './Svg.svelte';

  let boundedWidth = 0;
  let boundedHeight = 0;
</script>

<Meta title="Headless/Svg" component={Svg} />

<Story name="Basic">
  <Svg width={100} height={100}>
    <circle cx="50" cy="50" r="8" fill="orange" />
  </Svg>
</Story>

<Story name="Debug">
  <Svg width={100} height={100} debug>
    <circle cx="50" cy="50" r="8" fill="orange" />
  </Svg>
</Story>

<Story name="Bounded dimensions">
  <Svg width={100} height={100} bind:boundedWidth bind:boundedHeight>
    <rect
      width={boundedWidth}
      height={boundedHeight}
      fill="orange"
      fill-opacity="0.1"
    />
    <circle cx={boundedWidth / 2} cy={boundedHeight / 2} r="8" fill="orange" />
  </Svg>
</Story>

<Story name="Title and description for screen readers">
  <Svg
    width={100}
    height={100}
    aria-labelledby="my-title"
    aria-describedby="my-description"
  >
    <svelte:fragment slot="header">
      <title id="my-title">Titel</title>
      <desc id="my-description">Beschreibung</desc>
    </svelte:fragment>
    <circle cx="50" cy="50" r="8" fill="orange" />
  </Svg>
</Story>
