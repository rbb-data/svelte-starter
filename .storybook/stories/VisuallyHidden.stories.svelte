<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import VisuallyHidden from '$lib/components/shared/VisuallyHidden.svelte';
</script>

<Meta title="UI/VisuallyHidden" component={VisuallyHidden} />

<Story name="Basic">
  <i>
    Nothing to see here as the content is visually hidden. See below for a story
    in debug mode that renders the description provided to a screen reader.
  </i>
  <VisuallyHidden>
    Content that is visually hidden but exposed to screen readers
  </VisuallyHidden>
</Story>

<Story name="Debug">
  <VisuallyHidden debug>
    Content that is visually hidden but exposed to screen readers
  </VisuallyHidden>
</Story>
