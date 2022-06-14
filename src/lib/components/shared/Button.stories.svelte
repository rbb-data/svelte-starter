<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Story name="Basic">
  <Button on:press={() => console.log('clicked')}>Click me</Button>
</Story>

<Story name="Disabled">
  <Button on:press={() => console.log('clicked')} disabled>Click me</Button>
</Story>

<Story name="Styled (using style attribute)">
  <Button
    style="border: 1px solid orange"
    on:press={() => console.log('clicked')}
  >
    Click me
  </Button>
</Story>

<Story name="Styled (using a custom class)">
  <Button class="my-custom-button" on:press={() => console.log('clicked')}>
    Click me
  </Button>
</Story>

<style>
  :global(.my-custom-button) {
    border: 1px solid orange;
  }
</style>
