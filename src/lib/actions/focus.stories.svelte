<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import focus from './focus';
</script>

<Meta title="Actions/use:focus" />

<Story name="Basic">
  <button use:focus={true}>Focused button</button>
</Story>
