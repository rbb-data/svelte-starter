<script lang="ts">
  // @ts-expect-error does not find corresponding type declaration
  import googleSheetData from '$data/google-sheets/example.csv';
  // @ts-expect-error does not find corresponding type declaration
  import localData from '$data/local-data.csv';

  import ListOfExamples from './examples/ListOfExamples.svelte';

  import DOC from '$data/google-doc.json';
  import { handlebars } from '$lib/utils';
  import { DATE } from '$lib/gdoc-placeholders';
</script>

<h1>{DOC.TITLE}</h1>

<h2>Daten</h2>

<p>
  Dieser Code lädt beispielhaft lokale Daten von
  <code>src/data/local-data.csv</code>:
</p>

<ul>
  {#each localData as d}
    <li><i>x = {d.x}, y = {d.y}</i></li>
  {/each}
</ul>

<p>
  Außerdem ist dieser Code ist mit einem
  <a
    href="https://docs.google.com/spreadsheets/d/1RPOs51w4kJsvuNg1eT0foVgLau_iI7hmJ-EOGQqBC04"
    target="_blank"
    rel="noreferrer"
  >
    Google Sheet
  </a>
  verbunden (gespeichert unter
  <code>src/data/google-sheets/example.csv</code>):
</p>

<ul>
  {#each googleSheetData as d}
    <li><i>col1 = {d.col1}, col2 = {d.col2}</i></li>
  {/each}
</ul>

<p>
  Texte werden aus einem <a
    href="https://docs.google.com/document/d/1wCovwTGxPsPM-ED-D7hCaL5sMUFBy1A8OadVUCDtQ3A/edit#"
    target="_blank"
    rel="noreferrer"
  >
    Google Doc
  </a>
  geladen (gespeichert unter <code>src/data/google-doc.json</code>):
</p>

<ul>
  <li>
    Einfaches Objekt: <i>{DOC.PERSON.NAME} ({DOC.PERSON.AGE})</i>
  </li>
  <li>
    Liste von Strings:
    <i>
      {DOC.LIST_OF_STRINGS}
    </i>
  </li>
  <li>
    Liste von Objekten: <i>{JSON.stringify(DOC.ARRAY_OF_OBJECTS)}</i>
  </li>
</ul>

<p>
  {@html handlebars(DOC.PARAGRAPH, { DATE: DATE() })}
</p>

<h2>Beispiele</h2>

<ListOfExamples />

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

  p {
    margin-bottom: var(--s-rem-1);
  }

  ul {
    margin: var(--s-rem-2) 0 var(--s-rem-4) 0;

    li + li {
      margin-top: var(--s-rem-1);
    }
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    font-size: 0.9em;
    background: rgba(187, 239, 253, 0.3);
    padding: 2px 4px;
    color: black;
  }
</style>
