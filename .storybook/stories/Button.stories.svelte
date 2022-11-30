<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from '$lib/components/shared/Button.svelte';
</script>

<Meta title="UI/Button" component={Button} />

<Story name="Basic">
  <Button on:click={() => console.log('clicked')}>Primary</Button>
  <Button type="secondary" on:click={() => console.log('clicked')}>
    Secondary
  </Button>
  <Button type="tertiary" on:click={() => console.log('clicked')}>
    Tertiary
  </Button>
</Story>

<Story name="Disabled">
  <Button on:click={() => console.log('clicked')} disabled>Primary</Button>
  <Button type="secondary" on:click={() => console.log('clicked')} disabled>
    Secondary
  </Button>
  <Button type="tertiary" on:click={() => console.log('clicked')} disabled>
    Tertiary
  </Button>
</Story>

<Story name="Full width">
  <Button on:click={() => console.log('clicked')} class="w-full">
    Primary
  </Button>
</Story>

<Story name="Custom accent color">
  <Button
    on:click={() => console.log('clicked')}
    --button-color-accent="var(--c-ui-accent-turquoise)"
  >
    Primary
  </Button>
  <Button
    type="secondary"
    on:click={() => console.log('clicked')}
    --button-color-accent="var(--c-ui-accent-turquoise)"
  >
    Secondary
  </Button>
  <Button
    type="tertiary"
    on:click={() => console.log('clicked')}
    --button-color-accent="var(--c-ui-accent-turquoise)"
  >
    Tertiary
  </Button>
</Story>
