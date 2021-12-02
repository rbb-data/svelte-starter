<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { Svg } from '@rbb-data/svelte-starter';
</script>

<Meta
  title="Headless/Svg"
  component={Svg}
  argTypes={{
    width: {
      name: 'width',
      type: { name: 'number', required: true },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    height: {
      name: 'height',
      type: { name: 'number', required: true },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    margin: {
      name: 'margin',
      defaultValue: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      table: {
        type: {
          summary:
            '{ top: number, right: number, bottom: number, left: number }',
        },
      },
    },
  }}
/>

<Story name="basic">
  <Svg width={200} height={100} debug />
</Story>
