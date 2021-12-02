<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Tabs } from '@rbb-data/svelte-starter';

  const tabs = ['Tab #1', 'Tab #2', 'Tab #3'];
</script>

<Meta
  title="Headless/Tabs"
  component={Tabs}
  argTypes={{
    tabs: {
      name: 'tabs',
      table: {
        type: {
          summary: 'Array<any>',
        },
      },
    },
  }}
/>

<Story name="Basic">
  <Tabs {tabs} debug let:tab let:active>
    {tab}
    {active ? ' (active)' : ''}
  </Tabs>
</Story>
