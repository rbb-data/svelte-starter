<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import ChartHeader from '$lib/components/shared/ChartHeader.svelte';
</script>

<Meta title="Viz/ChartHeader" component={ChartHeader} />

<Story name="Basic">
  <ChartHeader>
    Title
    <svelte:fragment slot="subtitle">Subtitle</svelte:fragment>
  </ChartHeader>
</Story>
