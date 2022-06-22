<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import { cGreen400 } from '$lib/tokens';
  import Button from './Button.svelte';
</script>

<Meta title="User Interface/Button" component={Button} />

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
  <Button accentColor="black" on:press={() => console.log('clicked')}>
    Primary
  </Button>
  <Button
    type="secondary"
    accentColor="black"
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
  <Button
    type="tertiary"
    accentColor="black"
    on:press={() => console.log('clicked')}
  >
    Tertiary
  </Button>
</Story>

<Story name="Custom color">
  <Button customColor={cGreen400} on:press={() => console.log('clicked')}
    >Primary</Button
  >
  <Button
    type="secondary"
    customColor={cGreen400}
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
  <Button
    type="tertiary"
    customColor={cGreen400}
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

<Story name="Disabled (processing)">
  <Button
    disabled
    feedback="processing"
    on:press={() => console.log('clicked')}
  >
    Primary
  </Button>
  <Button
    type="secondary"
    feedback="processing"
    disabled
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
</Story>

<Story name="Disabled (done)">
  <Button disabled feedback="done" on:press={() => console.log('clicked')}>
    Primary
  </Button>
  <Button
    type="secondary"
    feedback="done"
    disabled
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
</Story>

<Story name="Disabled (success)">
  <Button disabled feedback="success" on:press={() => console.log('clicked')}>
    Primary
  </Button>
  <Button
    type="secondary"
    feedback="success"
    disabled
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
</Story>

<Story name="Disabled (error)">
  <Button disabled feedback="error" on:press={() => console.log('clicked')}>
    Primary
  </Button>
  <Button
    type="secondary"
    feedback="error"
    disabled
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
</Story>

<Story name="Hide default icon">
  <Button
    disabled
    feedback="processing"
    hideFeedbackIcon
    on:press={() => console.log('clicked')}
  >
    Primary
  </Button>
  <Button
    type="secondary"
    feedback="processing"
    disabled
    hideFeedbackIcon
    on:press={() => console.log('clicked')}
  >
    Secondary
  </Button>
</Story>
