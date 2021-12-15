<script>
  import { css } from '@rbb-data/svelte-starter/actions';

  let color = '#FFD700';
</script>

<div>
  <label for="color-picker">Pick a color</label>
  <!-- store the user-selected color in the 'color' variable -->
  <input type="color" id="color-picker" name="color" bind:value={color} />
</div>

<!-- the user-selected color is dynamically set on this div -->
<div class="dynamic-color" use:css={{ color }} />

<style>
  .dynamic-color {
    width: 100px;
    height: 100px;
    /* the CSS variable set by use:css is here consumed like any other CSS variable */
    background-color: var(--color);
    margin: 10px 0;
  }

  input {
    display: block;
  }
</style>
