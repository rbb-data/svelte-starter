<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import ChartLegend from '$lib/components/shared/ChartLegend.svelte';

  import * as tokens from '$lib/tokens';
</script>

<Meta title="Viz/ChartLegend" component={ChartLegend} />

<Story name="Basic">
  <ChartLegend
    items={['Beschriftung', 'Beschriftung', 'Beschriftung']}
    getItemColor={(_, i) =>
      [tokens.cCategoryBlue, tokens.cCategoryGreen, tokens.cCategoryPurple][i]}
  />
</Story>

<Story name="With complex items">
  <ChartLegend
    items={[
      { label: 'Beschriftung', color: tokens.cCategoryBlue },
      { label: 'Beschriftung', color: tokens.cCategoryGreen },
      { label: 'Beschriftung', color: tokens.cCategoryPurple },
    ]}
    getItemColor={(item) => item.color}
    let:item
  >
    {item.label}
  </ChartLegend>
</Story>

<Story name="With custom shapes">
  <ChartLegend
    items={[
      { label: 'Beschriftung', color: tokens.cCategoryBlue },
      { label: 'Beschriftung', color: tokens.cCategoryGreen },
      { label: 'Beschriftung', color: tokens.cCategoryPurple },
    ]}
    getItemColor={(item) => item.color}
    let:item
  >
    <div slot="shape" class="circle" style:--color={item.color} />
    {item.label}
  </ChartLegend>
</Story>

<style>
  .circle {
    width: 1.15em;
    height: 1.15em;
    background-color: var(--color);
    border-radius: 50%;
  }
</style>
