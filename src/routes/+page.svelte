<script>
  // @ts-ignore
  import googleSheetData from '$data/google-sheets/example.csv';
  // @ts-ignore
  import localData from '$data/local-data.csv';

  import DOC from '$data/google-doc.json';

  import InternalLink from '$lib/components/shared/InternalLink.svelte';
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
      {#each DOC.LIST_OF_STRINGS as TEXT_BLOCK, i}
        {@html TEXT_BLOCK}
        {#if i < DOC.LIST_OF_STRINGS.length - 1}
          /&nbsp;
        {/if}
      {/each}
    </i>
  </li>
  <li>
    Liste von Objekten:
    <i>
      {#each DOC.ARRAY_OF_OBJECTS as PERSON, i}
        {PERSON.NAME} ({PERSON.AGE})
        {#if i < DOC.ARRAY_OF_OBJECTS.length - 1}
          /&nbsp;
        {/if}
      {/each}
    </i>
  </li>
</ul>

<p>
  {@html DOC.PARAGRAPH}
</p>

<h2>Beispiele</h2>

<ul>
  <li><InternalLink href="/examples/chart">examples/chart</InternalLink></li>
  <li>
    <InternalLink href="/examples/check-boxes">
      examples/check-boxes
    </InternalLink>
  </li>
  <li><InternalLink href="/examples/chips">examples/chips</InternalLink></li>
  <li>
    <InternalLink href="/examples/colored-tabs">
      examples/colored-tabs
    </InternalLink>
  </li>
  <li>
    <InternalLink href="/examples/custom-buttons">
      examples/custom-buttons
    </InternalLink>
  </li>
  <li>
    <InternalLink href="/examples/primary-secondary-buttons">
      examples/primary-secondary-buttons
    </InternalLink>
  </li>
  <li>
    <InternalLink href="/examples/radio-buttons">
      examples/radio-buttons
    </InternalLink>
  </li>
  <li>
    <InternalLink href="/examples/subtle-tabs">
      examples/subtle-tabs
    </InternalLink>
  </li>
  <li>
    <InternalLink href="/examples/tertiary-buttons">
      examples/tertiary-buttons
    </InternalLink>
  </li>
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
