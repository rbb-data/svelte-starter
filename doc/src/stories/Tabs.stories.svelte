<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Tabs } from '@rbb-data/svelte-starter';
  import Tab from '../helpers/Tab.svelte';

  const tabContent = ['Tab #1', 'Tab #2', 'Tab #3'];

  const tabs = tabContent.map((content) => ({
    component: Tab,
    props: { content },
  }));
</script>

<Meta
  title="Components/Tabs"
  component={Tabs}
  argTypes={{
    tabs: {
      name: 'tabs',
      table: {
        type: {
          summary:
            'Array<{ component: typeof SvelteComponent, props: Record<string, any> }>',
        },
      },
    },
    activeIndex: {
      name: 'activeIndex',
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  }}
/>

<Story name="Basic">
  <Tabs {tabs} />
</Story>
