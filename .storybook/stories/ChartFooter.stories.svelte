<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import ChartFooter from '$lib/components/shared/ChartFooter.svelte';
</script>

<Meta title="Viz/ChartFooter" component={ChartFooter} />

<Story name="Basic">
  <ChartFooter>Footer</ChartFooter>
</Story>
