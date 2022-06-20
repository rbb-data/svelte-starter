<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
</script>

<Meta title="Headless/Button" component={Button} />

<Story name="Basic">
  <Button on:press={() => console.log('clicked')}>Click me</Button>
</Story>

<Story name="Disabled">
  <Button on:press={() => console.log('clicked')} disabled>Click me</Button>
</Story>
