<script>
  import googleDoc from '$data/google-doc.json';
  // @ts-ignore
  import googleSheetData from '$data/google-sheet-example.csv';
  // @ts-ignore
  import localData from '$data/example-data.csv';

  import Table from '$comps/shared/Table.svelte';
</script>

<h1>{googleDoc.title}</h1>

<p>
  Dieser Code lädt beispielhaft lokale Daten und ist mit einem
  <a
    href="https://docs.google.com/document/d/1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A"
    target="_blank"
  >
    Google doc
  </a>
  und einem
  <a
    href="https://docs.google.com/spreadsheets/d/1RPOs51w4kJsvuNg1eT0foVgLau_iI7hmJ-EOGQqBC04"
    target="_blank"
  >
    Google sheet
  </a>
  verbunden.
</p>

<h2>Lokale Daten</h2>

<p>
  Die lokalen Daten liegen in <code>src/data/example-data.csv</code>
  und werden als <code>localData</code> importiert:
</p>

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

<h2>Google Sheet</h2>

<p>
  Das Google sheet liegt in <code>src/data/google-sheet-example.csv</code>
  und wird als <code>googleSheetData</code> importiert:
</p>

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

<h2>Google doc</h2>

<p>
  Das Google doc liegt in <code>src/data/google-doc.json</code>
  und wird als <code>googleDoc</code> importiert. Ein paar Beispiele:
</p>

<h3>Einfaches Objekt</h3>
{googleDoc.person.name} ({googleDoc.person.age})

<h3>Liste von Strings</h3>
<ul>
  {#each googleDoc.listOfStrings as textBlock}
    <li>{@html textBlock}</li>
  {/each}
</ul>

<h3>Liste von Objekten</h3>
<ol>
  {#each googleDoc.arrayOfObjects as person}
    <li>{person.name} ({person.age})</li>
  {/each}
</ol>

<style lang="scss">
  h1 {
    font-size: calc(1.5 * var(--font-size-base));
  }

  h2 {
    font-size: calc(1.25 * var(--font-size-base));
    margin-top: var(--s-rem-6);
  }

  h3 {
    font-size: var(--font-size-base);
    margin-top: var(--s-rem-3);
  }

  h1,
  h2,
  h3 {
    margin-bottom: var(--s-rem-1);
  }

  p {
    margin-bottom: var(--s-rem-1);
  }

  .table-wrapper {
    max-width: 200px;
    margin: var(--s-px-4) auto;
    background-color: var(--c-ui-gray-100);
    padding: var(--s-px-2) var(--s-px-4);
  }
</style>
