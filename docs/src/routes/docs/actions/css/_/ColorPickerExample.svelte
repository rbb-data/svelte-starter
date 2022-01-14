<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import SvelteSnippet from '$lib/components/SvelteSnippet.svelte';

  import ColorPicker from './ColorPicker.svelte';

  const script = `let color = '#F0F8FF';`;

  const markup = `<div>
  <label for="color-picker">Pick a color</label>
  <!-- store the user-selected color in the 'color' variable -->
  <input type="color" id="color-picker" name="color" bind:value={color} />
</div>

<!-- the user-selected color is dynamically set on this div -->
<div use:css={{ color }} />`;

  const style = `div {
  width: 100px;
  height: 100px;
  /* the CSS variable set by use:css is here consumed like any other CSS variable */
  background-color: var(--color);
}`;
</script>

<div class="wide">
  <Showcase>
    <SvelteSnippet
      slot="left"
      title="ColorPickerExample.svelte"
      {script}
      {markup}
      {style}
    />
    <ColorPicker slot="right" />
  </Showcase>
</div>
