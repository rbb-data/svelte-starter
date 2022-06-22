<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Table from './Table.svelte';

  function r(min = 0, max = 20) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const data = [
    { year: 2008, a: r(), b: r(), c: r() },
    { year: 2009, a: r(), b: r(), c: r() },
    { year: 2010, a: r(), b: r(), c: r() },
    { year: 2011, a: r(), b: r(), c: r() },
    { year: 2012, a: r(), b: r(), c: r() },
    { year: 2013, a: r(), b: r(), c: r() },
    { year: 2014, a: r(), b: r(), c: r() },
    { year: 2015, a: r(), b: r(), c: r() },
  ];

  const columns = [
    { name: 'Jahr', getValue: (/** @type {typeof data[0]} */ d) => d.year },
    { name: 'Katgorie A', getValue: (/** @type {typeof data[0]} */ d) => d.a },
    { name: 'Katgorie B', getValue: (/** @type {typeof data[0]} */ d) => d.b },
    { name: 'Katgorie C', getValue: (/** @type {typeof data[0]} */ d) => d.c },
  ];

  const columnsWithClasses = [
    { name: 'Jahr', getValue: (/** @type {typeof data[0]} */ d) => d.year },
    {
      name: 'Katgorie A',
      getValue: (/** @type {typeof data[0]} */ d) => d.a,
      class: 'align-right',
    },
    {
      name: 'Katgorie B',
      getValue: (/** @type {typeof data[0]} */ d) => d.b,
      class: 'align-right',
    },
    {
      name: 'Katgorie C',
      getValue: (/** @type {typeof data[0]} */ d) => d.c,
      class: 'align-right',
    },
  ];

  const columnsWithCustomClasses = [
    { name: 'Jahr', getValue: (/** @type {typeof data[0]} */ d) => d.year },
    {
      name: 'Katgorie A',
      getValue: (/** @type {typeof data[0]} */ d) => d.a,
      class: 'cat-a',
    },
    {
      name: 'Katgorie B',
      getValue: (/** @type {typeof data[0]} */ d) => d.b,
      class: 'cat-b',
    },
    {
      name: 'Katgorie C',
      getValue: (/** @type {typeof data[0]} */ d) => d.c,
      class: 'cat-c',
    },
  ];
</script>

<Meta
  title="Data Viz/Table"
  component={Table}
  argTypes={{
    data: {
      // @ts-ignore
      type: { required: true },
    },
    columns: {
      // @ts-ignore
      type: { required: true },
    },
    caption: {
      // @ts-ignore
      type: { required: true },
    },
  }}
/>

<Story name="Basic">
  <Table {data} {columns} caption="Meine Tabelle" />
</Story>

<Story name="No highlights">
  <Table
    {data}
    {columns}
    caption="Meine Tabelle"
    highlightFirstColumn={false}
  />
</Story>

<Story name="Right-aligned data columns">
  <Table
    {data}
    columns={columnsWithClasses}
    class="custom-table"
    caption="Meine Tabelle"
  />
</Story>

<Story name="Customized columns">
  <Table
    {data}
    columns={columnsWithCustomClasses}
    class="custom-table"
    caption="Meine Tabelle"
  />
</Story>

<style lang="scss">
  :global {
    .custom-table {
      .align-right {
        text-align: right !important;
      }

      .cat-a {
        background-color: var(--c-blue-100);
      }

      .cat-b {
        background-color: var(--c-purple-100);
      }

      .cat-c {
        background-color: var(--c-yellow-100);
      }
    }
  }
</style>
