<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Table from '$lib/components/shared/Table.svelte';

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

  /**
   * @typedef {{
   *   name: string;
   *   getValue: (d: typeof data[0]) => number;
   *   class?: string;
   * }} Column
   */

  /** @type {Column[]} */
  const columns = [
    { name: 'Jahr', getValue: (d) => d.year },
    { name: 'Katgorie A', getValue: (d) => d.a },
    { name: 'Katgorie B', getValue: (d) => d.b },
    { name: 'Katgorie C', getValue: (d) => d.c },
  ];

  /** @type {Column[]} */
  const columnsWithClasses = [
    { name: 'Jahr', getValue: (d) => d.year },
    {
      name: 'Katgorie A',
      getValue: (d) => d.a,
      class: 'align-right',
    },
    {
      name: 'Katgorie B',
      getValue: (d) => d.b,
      class: 'align-right',
    },
    {
      name: 'Katgorie C',
      getValue: (d) => d.c,
      class: 'align-right',
    },
  ];

  /** @type {Column[]} */
  const columnsWithCustomClasses = [
    { name: 'Jahr', getValue: (d) => d.year },
    {
      name: 'Katgorie A',
      getValue: (d) => d.a,
      class: 'cat-a',
    },
    {
      name: 'Katgorie B',
      getValue: (d) => d.b,
      class: 'cat-b',
    },
    {
      name: 'Katgorie C',
      getValue: (d) => d.c,
      class: 'cat-c',
    },
  ];
</script>

<Meta
  title="Viz/Table"
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
  <Table {data} {columns} caption="Titel Datensatz" />
</Story>

<Story name="No highlights">
  <Table
    {data}
    {columns}
    caption="Titel Datensatz"
    highlightFirstColumn={false}
  />
</Story>

<Story name="Right-aligned data columns">
  <div class="custom-table">
    <Table {data} columns={columnsWithClasses} caption="Titel Datensatz" />
  </div>
</Story>

<Story name="Customized columns">
  <div class="custom-table">
    <Table
      {data}
      columns={columnsWithCustomClasses}
      caption="Titel Datensatz"
    />
  </div>
</Story>

<style lang="scss">
  .custom-table :global {
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
</style>
