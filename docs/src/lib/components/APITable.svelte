<script>
  import SvelteMarkdown from 'svelte-markdown';

  /** @type {import('$lib/types').ParamDoc[]} */
  export let params;
</script>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th class="name">Name</th>
        <th class="description">Description</th>
        <th class="type">Type</th>
        <th class="default">Default</th>
      </tr>
    </thead>
    <tbody>
      {#each params as param}
        <tr>
          <td>
            <code>
              {param.name}{#if !param.optional}<span class="annotation"
                  >&nbsp;*</span
                >{/if}{#if param.isExposed}<span class="annotation"
                  >&nbsp;!</span
                >{/if}
            </code>
          </td>
          <td><SvelteMarkdown source={param.description} isInline /></td>
          <td><code>{param.type}</code></td>
          <td>
            {#if param.default}
              <code>{param.default}</code>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="footnote">
    <dl>
      <dt><code class="annotation">*</code></dt>
      <dd>Required</dd>

      <dt><code class="annotation">!</code></dt>
      <dd>Exposed (can be bound to)</dd>
    </dl>
  </div>
</div>

<style>
  .table-wrapper {
    margin: var(--spacing-small) 0;
  }

  code {
    white-space: pre-wrap;
    margin: 0;
  }

  .annotation {
    color: var(--black);
  }

  .footnote {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    text-align: right;
  }

  dt,
  dd {
    display: inline;
  }

  dd {
    margin-right: var(--spacing-small);
    margin-left: 0.2rem;
  }

  table {
    display: grid;
    border-collapse: collapse;
    grid-template-columns: auto 4fr 4fr 2fr;
  }

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 1rem 0.4rem;
    border-top: 1px solid #e6e6e6;
  }

  th {
    position: sticky;
    top: 0;
    text-align: left;
    font-weight: bold;
    color: #4a4a4a;
    background-color: #fafafa;
  }

  th.name,
  th.type,
  th.default {
    padding-left: var(--code-padding-h);
  }
</style>
