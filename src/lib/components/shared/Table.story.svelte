<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  export let Hst: HstType;

  import Table from './Table.svelte';

  let highlightFirstColumn = false;

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

  interface Column {
    name: string;
    getValue: (d: typeof data[0]) => number;
    class?: string;
  }

  const columns: Column[] = [
    { name: 'Jahr', getValue: (d) => d.year },
    { name: 'Kategorie A', getValue: (d) => d.a },
    { name: 'Kategorie B', getValue: (d) => d.b },
    { name: 'Kategorie C', getValue: (d) => d.c },
  ];

  const columnsWithClasses: Column[] = [
    { name: 'Jahr', getValue: (d) => d.year },
    {
      name: 'Kategorie A',
      getValue: (d) => d.a,
      class: 'align-right',
    },
    {
      name: 'Kategorie B',
      getValue: (d) => d.b,
      class: 'align-right',
    },
    {
      name: 'Kategorie C',
      getValue: (d) => d.c,
      class: 'align-right',
    },
  ];

  const columnsWithCustomClasses: Column[] = [
    { name: 'Jahr', getValue: (d) => d.year },
    {
      name: 'Kategorie A',
      getValue: (d) => d.a,
      class: 'cat-a',
    },
    {
      name: 'Kategorie B',
      getValue: (d) => d.b,
      class: 'cat-b',
    },
    {
      name: 'Kategorie C',
      getValue: (d) => d.c,
      class: 'cat-c',
    },
  ];
</script>

<Hst.Story group="ui" title="Table" layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Basic">
    <Table {data} {columns} {highlightFirstColumn} caption="Titel Datensatz" />
  </Hst.Variant>

  <Hst.Variant title="Right-aligned data columns">
    <div class="custom-table">
      <Table {data} columns={columnsWithClasses} caption="Titel Datensatz" />
    </div>
  </Hst.Variant>

  <Hst.Variant title="Customized columns">
    <div class="custom-table">
      <Table
        {data}
        columns={columnsWithCustomClasses}
        {highlightFirstColumn}
        caption="Titel Datensatz"
      />
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Checkbox
      title="Highlight first column?"
      bind:value={highlightFirstColumn}
    />
  </svelte:fragment>
</Hst.Story>

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
