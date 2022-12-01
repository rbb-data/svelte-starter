<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Circle from '$lib/components/layercake/Circle.svelte';
</script>

<Meta title="Viz/Circle" component={Circle} />

<Story name="Basic">
  <svg width="100" height="100">
    <Circle cx="50" cy="50" />
  </svg>
</Story>
