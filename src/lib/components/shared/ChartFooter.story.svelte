<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import ChartFooter from './ChartFooter.svelte';

  let content = 'Footer';
</script>

<Hst.Story
  group="viz"
  title="ChartFooter"
  layout={{ type: 'grid', width: '100%' }}
>
  <ChartFooter>{content}</ChartFooter>

  <svelte:fragment slot="controls">
    <Hst.Text title="Content" bind:value={content} />
  </svelte:fragment>
</Hst.Story>
