<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Tabs from '$shared/Tabs.svelte';
  import TabPanels from '$shared/TabPanels.svelte';

  const tabsId = 'my-unique-tabs-id';
  const tabs = ['#1', '#2', '#3'];

  let activeIndex;
</script>

<Meta title="Components/Tabs" component={Tabs} />

<Story name="Basic">
  <Tabs id={tabsId} aria-label="Meine Tabs" {tabs} let:tab bind:activeIndex>
    Tab {tab}
  </Tabs>

  <TabPanels id={tabsId} {tabs} {activeIndex} let:tab>
    Tabpanel {tab}
  </TabPanels>
</Story>
