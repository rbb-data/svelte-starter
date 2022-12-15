<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Slant from '$lib/components/shared/Slant.svelte';
</script>

<Meta title="UI/Slant" component={Slant} />

<Story name="Basic">
  <Slant />
</Story>

<Story name="With text">
  <Slant>Text</Slant>
</Story>

<Story name="Slant on the left">
  <Slant position="left" />
</Story>

<Story name="Slant on both sides">
  <Slant position="both" />
</Story>

<Story name="Slant on the right (backward)">
  <Slant position="right" direction="backward" />
</Story>

<Story name="Slant on the left (backward)">
  <Slant position="left" direction="backward" />
</Story>

<Story name="Slant on both sides (backward)">
  <Slant position="both" direction="backward" />
</Story>

<Story name="Custom colors">
  <Slant backgroundColor="orange" color="black">Text</Slant>
</Story>
