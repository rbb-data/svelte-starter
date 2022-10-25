<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from '$lib/components/shared/Button.svelte';
  import CheckIcon from '$icons/Check.svelte';
  import ErrorCloseIcon from '$icons/ErrorClose.svelte';
  import ProcessingIcon from '$icons/Processing.svelte';

  import { cGreen400 } from '$lib/tokens';
</script>

<Meta title="UI/Button" component={Button} />

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

<Story name="Disabled (processing) with icon">
  <div class="wrapper">
    <Button
      disabled
      feedback="processing"
      on:press={() => console.log('clicked')}
    >
      <ProcessingIcon slot="icon" />
      Primary
    </Button>
    <Button
      type="secondary"
      feedback="processing"
      disabled
      on:press={() => console.log('clicked')}
    >
      <ProcessingIcon slot="icon" />
      Secondary
    </Button>
  </div>
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

<Story name="Disabled (success) with icon">
  <Button disabled feedback="success" on:press={() => console.log('clicked')}>
    <CheckIcon slot="icon" />
    Primary
  </Button>
  <Button
    type="secondary"
    feedback="success"
    disabled
    on:press={() => console.log('clicked')}
  >
    <CheckIcon slot="icon" />
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

<Story name="Disabled (error) with icon">
  <Button disabled feedback="error" on:press={() => console.log('clicked')}>
    <ErrorCloseIcon slot="icon" />
    Primary
  </Button>
  <Button
    type="secondary"
    feedback="error"
    disabled
    on:press={() => console.log('clicked')}
  >
    <ErrorCloseIcon slot="icon" />
    Secondary
  </Button>
</Story>

<style>
  .wrapper :global(.disabled.processing svg) {
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    from {
      transform: translateY(-50%) rotate(0deg);
    }
    to {
      transform: translateY(-50%) rotate(360deg);
    }
  }
</style>
