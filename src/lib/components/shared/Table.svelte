<script lang="ts">
  /**
   * Basic table.
   *
   * @component
   */

  type D = $$Generic;

  export let data: D[];

  /**
   * specifies the name of a column and the data it holds (`getValue` receives
   * an item in `data`); optionally, define a class name that allows to address
   * the column via CSS
   */
  export let columns: {
    name: string;
    getValue: (d: D, i: number) => any;
    class?: string;
  }[];

  /** label */
  export let caption: string;

  /**
   * if true, an entry in the first column serves as label for the respective
   * row
   */
  export let useRowHeaders = true;
</script>

<table class:table={true} class={$$restProps.class} style={$$restProps.style}>
  {#if caption}
    <caption>
      {caption}
    </caption>
  {/if}
  <thead>
    <tr>
      {#each columns as { name, class: className }}
        <th class={className} class:row-header={useRowHeaders} scope="col">
          {name}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as d, i}
      <tr>
        <th
          scope={useRowHeaders ? 'row' : undefined}
          class:row-header={useRowHeaders}
        >
          {columns[0].getValue(d, i)}
        </th>
        {#each columns.slice(1) as { getValue, class: className }}
          <td class={className}>{getValue(d, i)}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  table {
    width: 100%;
    border-collapse: collapse;
    position: relative;
    font-size: var(--font-size-sm);

    caption {
      text-transform: uppercase;
      font-weight: var(--font-weight-semi-bold);
      text-align: left;
      margin-bottom: var(--s-px-2);
    }
  }

  thead tr {
    border-bottom: 2px solid var(--c-ui-black);
    vertical-align: bottom;
    position: sticky;
    top: 0;

    th {
      font-weight: var(--font-weight-semi-bold);

      &:first-of-type {
        text-align: center;

        &.row-header {
          text-align: left;
        }
      }
    }
  }

  tbody tr {
    th {
      text-align: center;
      font-weight: var(--font-weight-regular);

      &.row-header {
        font-weight: var(--font-weight-semi-bold);
        text-align: left;
      }
    }

    td {
      text-align: center;
    }
  }

  th,
  td {
    padding: var(--s-px-2) 0;
  }
</style>
