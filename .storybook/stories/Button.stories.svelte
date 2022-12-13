<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from '$lib/components/shared/Button.svelte';
  import SearchIcon from '$icons/SearchIcon.svelte';
</script>

<Meta title="UI/Button" component={Button} />

<Story name="Basic">
  <Button on:click={() => console.log('clicked')}>Primary</Button>
  <Button variant="secondary" on:click={() => console.log('clicked')}>
    Secondary
  </Button>
  <Button variant="tertiary" on:click={() => console.log('clicked')}>
    Tertiary
  </Button>
</Story>

<Story name="Disabled">
  <Button on:click={() => console.log('clicked')} disabled>Primary</Button>
  <Button variant="secondary" on:click={() => console.log('clicked')} disabled>
    Secondary
  </Button>
  <Button variant="tertiary" on:click={() => console.log('clicked')} disabled>
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
    variant="secondary"
    on:click={() => console.log('clicked')}
    --button-color-accent="var(--c-ui-accent-turquoise)"
  >
    Secondary
  </Button>
  <Button
    variant="tertiary"
    on:click={() => console.log('clicked')}
    --button-color-accent="var(--c-ui-accent-turquoise)"
  >
    Tertiary
  </Button>
</Story>

<Story name="With icon">
  <Button class="icon" aria-label="Search">
    <SearchIcon />
  </Button>
</Story>

<Story name="Round with icon">
  <Button class="icon round" aria-label="Search">
    <SearchIcon />
  </Button>
</Story>

<Story name="Icon and text">
  <Button>
    <div class="splitter align-center">
      <SearchIcon />
      <span>Primary</span>
    </div>
  </Button>
</Story>
