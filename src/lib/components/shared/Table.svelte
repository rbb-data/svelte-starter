<script>
  /**
   * Basic table.
   *
   * @component
   */

  /** @type {any[]} */
  export let data;

  /**
   * specifies the name of a column and the data it holds (`getValue` receives
   * an item in `data`); optionally, define a class name that allows to address
   * the column via CSS
   *
   * @type {{ name: string; getValue: (d: any) => any; class?: string }[]}
   */
  export let columns;

  /** @type {string} */
  export let caption;

  /** if true, an entry in the first column serves as label for the respective row */
  export let highlightFirstColumn = true;
</script>

<table>
  {#if caption}
    <caption>
      {caption}
    </caption>
  {/if}
  <thead>
    <tr>
      {#each columns as { name, class: className }}
        <th
          class={className}
          class:highlight={highlightFirstColumn}
          scope="col"
        >
          {name}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as d}
      <tr>
        <th scope="row" class:highlight={highlightFirstColumn}>
          {columns[0].getValue(d)}
        </th>
        {#each columns.slice(1) as { getValue, class: className }}
          <td class={className}>{getValue(d)}</td>
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

        &.highlight {
          text-align: left;
        }
      }
    }
  }

  tbody tr {
    th {
      text-align: center;
      font-weight: var(--font-weight-regular);

      &.highlight {
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
