const __resolved__virtual_storySource_srcLibComponentsSharedButtonStorySvelte = `<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  import { logEvent } from 'histoire/client';
  export let Hst: HstType;

  import Button from '$lib/components/shared/Button.svelte';
  import SearchIcon from '$icons/SearchIcon.svelte';

  let content = 'Content';
  let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  let disabled = false;

  function handleClick(e: MouseEvent) {
    logEvent('click', e);
  }
<\/script>

<Hst.Story group="ui" title="Button" layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Basic">
    <Button {variant} {disabled} on:click={handleClick}>
      {content}
    </Button>
  </Hst.Variant>

  <Hst.Variant title="Full width">
    <Button {variant} {disabled} on:click={handleClick} class="w-full">
      {content}
    </Button>
  </Hst.Variant>

  <Hst.Variant title="Custom accent color">
    <Button
      {variant}
      {disabled}
      class="button-with-custom-color"
      on:click={handleClick}
    >
      {content}
    </Button>
  </Hst.Variant>

  <Hst.Variant title="With icon">
    <Button {variant} {disabled} class="icon" aria-label="Search">
      <SearchIcon />
    </Button>
  </Hst.Variant>

  <Hst.Variant title="Round with icon">
    <Button {variant} {disabled} class="icon round" aria-label="Search">
      <SearchIcon />
    </Button>
  </Hst.Variant>

  <Hst.Variant title="Icon and text">
    <Button {variant} {disabled}>
      <div class="splitter align-center">
        <SearchIcon />
        <span>{content}</span>
      </div>
    </Button>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text title="Content" bind:value={content} />
    <Hst.Radio
      title="Variant"
      options={[
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Tertiary', value: 'tertiary' },
      ]}
      bind:value={variant}
    />

    <Hst.Checkbox title="Disabled" bind:value={disabled} />
  </svelte:fragment>
</Hst.Story>

<style>
  :global(.button-with-custom-color) {
    --button-color-accent: var(--c-ui-accent-turquoise);
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedButtonStorySvelte as default
};
