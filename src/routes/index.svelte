<script>
  import googleDoc from '$data/google-doc.json';
  // @ts-ignore
  import googleSheetData from '$data/google-sheet-example.csv';
  // @ts-ignore
  import localData from '$data/example-data.csv';

  import Table from '$comps/shared/Table.svelte';
</script>

<h1>{googleDoc.title}</h1>

<h2>Daten</h2>

<p>Dieser Code ist mit drei Datenquellen verbunden:</p>

<ul>
  <li>
    Lokale Daten: <code>src/data/example-data.csv</code>
  </li>
  <li>
    <a
      href="https://docs.google.com/spreadsheets/d/1RPOs51w4kJsvuNg1eT0foVgLau_iI7hmJ-EOGQqBC04"
      target="_blank"
    >
      Google sheet:
    </a>
    <code>src/data/google-sheet-example.csv</code>
  </li>
  <li>
    <a
      href="https://docs.google.com/document/d/1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A"
      target="_blank"
    >
      Google doc:
    </a>
    <code>src/data/google-doc.json</code>
  </li>
</ul>

<div class="tables">
  <div class="table-wrapper">
    <Table
      data={localData}
      columns={[
        { name: 'x', getValue: (d) => d.x },
        { name: 'y', getValue: (d) => d.y },
      ]}
      caption="Lokale Daten"
      highlightFirstColumn={false}
    />
  </div>

  <div class="table-wrapper">
    <Table
      data={googleSheetData}
      columns={[
        { name: 'col1', getValue: (d) => d.col1 },
        { name: 'col2', getValue: (d) => d.col2 },
      ]}
      caption="Google Sheet"
      highlightFirstColumn={false}
    />
  </div>
</div>

<h3>Google doc Daten:</h3>

<ul>
  <li>
    Einfaches Objekt: <i>{googleDoc.person.name} ({googleDoc.person.age})</i>
  </li>
  <li>
    Liste von Strings:
    <i>
      {#each googleDoc.listOfStrings as textBlock, i}
        {@html textBlock}
        {#if i < googleDoc.listOfStrings.length - 1}
          /&nbsp;
        {/if}
      {/each}
    </i>
  </li>
  <li>
    Liste von Objekten:
    <i>
      {#each googleDoc.arrayOfObjects as person, i}
        {person.name} ({person.age})
        {#if i < googleDoc.arrayOfObjects.length - 1}
          /&nbsp;
        {/if}
      {/each}
    </i>
  </li>
</ul>

<h2>Beispiele</h2>

<ul>
  <li><a href="examples/chart">examples/chart</a></li>
  <li><a href="examples/check-boxes">examples/check-boxes</a></li>
  <li><a href="examples/chips">examples/chips</a></li>
  <li><a href="examples/colored-tabs">examples/colored-tabs</a></li>
  <li><a href="examples/custom-buttons">examples/custom-buttons</a></li>
  <li>
    <a href="examples/primary-secondary-buttons"
      >examples/primary-secondary-buttons</a
    >
  </li>
  <li><a href="examples/radio-buttons">examples/radio-buttons</a></li>
  <li><a href="examples/subtle-tabs">examples/subtle-tabs</a></li>
  <li><a href="examples/tertiary-buttons">examples/tertiary-buttons</a></li>
</ul>

<style lang="scss">
  h1 {
    font-size: calc(1.5 * var(--font-size-base));
    margin-bottom: var(--s-rem-4);
  }

  h2 {
    font-size: calc(1.25 * var(--font-size-base));
    margin-top: var(--s-rem-6);
    margin-bottom: var(--s-rem-2);
  }

  h3 {
    font-size: var(--font-size-base);
    margin-top: var(--s-rem-3);
    margin-bottom: var(--s-rem-1);
  }

  p {
    margin-bottom: var(--s-rem-1);
  }

  ul {
    margin: var(--s-rem-2) 0 var(--s-rem-4) 0;

    li + li {
      margin-top: var(--s-rem-1);
    }
  }

  .tables {
    display: flex;
  }

  .table-wrapper {
    flex-grow: 1;
    max-width: 200px;
    margin: var(--s-px-4) auto;
    background-color: var(--c-ui-gray-100);
    padding: var(--s-px-2) var(--s-px-4);
  }
</style>
