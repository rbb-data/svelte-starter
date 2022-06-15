<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import { cGreen100, cGreen400 } from '$lib/tokens';
  import Button from './Button.svelte';
</script>

<Meta title="Components/Button" component={Button} />

<Story name="Basic">
  <Button on:press={() => console.log('clicked')}>Primary</Button>
  <Button type="secondary" on:press={() => console.log('clicked')}>
    Secondary
  </Button>
  <Button type="tertiary" on:press={() => console.log('clicked')}>
    Tertiary
  </Button>
</Story>

<Story name="Preset color">
  <Button colorScheme="gray" on:press={() => console.log('clicked')}>
    Primary
  </Button>
  <Button
    type="secondary"
    colorScheme="gray"
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
  <Button
    type="tertiary"
    colorScheme="gray"
    on:press={() => console.log('clicked')}
  >
    Tertiary
  </Button>
</Story>

<Story name="Custom color">
  <Button
    colorPair={{ light: cGreen100, dark: cGreen400 }}
    on:press={() => console.log('clicked')}>Primary</Button
  >
  <Button
    type="secondary"
    colorPair={{ light: cGreen100, dark: cGreen400 }}
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
  <Button
    type="tertiary"
    colorPair={{ light: cGreen100, dark: cGreen400 }}
    on:press={() => console.log('clicked')}
  >
    Tertiary
  </Button>
</Story>

<Story name="Disabled">
  <Button disabled on:press={() => console.log('clicked')}>Primary</Button>
  <Button type="secondary" disabled on:press={() => console.log('clicked')}>
    Secondary
  </Button>
  <Button type="tertiary" disabled on:press={() => console.log('clicked')}>
    Tertiary
  </Button>
</Story>
