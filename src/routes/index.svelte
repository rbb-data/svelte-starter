<script>
  import googleDoc from '$data/google-doc.json';
  // @ts-ignore
  import googleSheetData from '$data/google-sheet-example.csv';
  // @ts-ignore
  import localData from '$data/example-data.csv';
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

<table>
  <caption>Lokale Daten</caption>
  <thead>
    <tr>
      <th>x</th>
      <th>y</th>
    </tr>
  </thead>
  <tbody>
    {#each localData as row}
      <tr>
        <td>{row.x}</td>
        <td>{row.y}</td>
      </tr>
    {/each}
  </tbody>
</table>

<h2>Google Sheet</h2>

<p>
  Das Google sheet liegt in <code>src/data/google-sheet-example.csv</code>
  und wird als <code>googleSheetData</code> importiert:
</p>

<table>
  <caption>Google Sheet</caption>
  <thead>
    <tr>
      <th>col1</th>
      <th>col2</th>
    </tr>
  </thead>
  <tbody>
    {#each googleSheetData as row}
      <tr>
        <td>{row.col1}</td>
        <td>{row.col2}</td>
      </tr>
    {/each}
  </tbody>
</table>

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

  table {
    font-family: monospace;
    margin: var(--s-rem-2) auto;
    border: 1px solid;
    min-width: 100px;

    th,
    td {
      border: 1px solid;
    }

    thead th {
      text-align: left;
    }

    tbody td {
      text-align: right;
    }
  }
</style>
