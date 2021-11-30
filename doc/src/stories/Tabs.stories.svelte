<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Tabs } from '@rbb-data/svelte-starter';

  const tabs = ['Tab #1', 'Tab #2', 'Tab #3'];
</script>

<Meta
  title="Core/Tabs"
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
  <div class="wrapper">
    <Tabs {tabs} let:tab let:active>
      {tab}
      {active ? ' (active)' : ''}
    </Tabs>
  </div>
</Story>

<style>
  .wrapper :global(.tabs li) {
    background-color: aliceblue;
    padding: 5px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
  }

  .wrapper :global(.tabs .active) {
    outline: 2px solid steelblue;
  }
</style>
