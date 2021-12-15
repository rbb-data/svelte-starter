<script>
  import { Search } from '@rbb-data/svelte-starter';
  import { fuzzysearch } from '@rbb-data/svelte-starter/actions';

  const bezirke = [
    'Mitte',
    'Pankow',
    'Reinickendorf',
    'Charlottenburg-Wilmersdorf',
    'Spandau',
    'Steglitz-Zehlendorf',
    'Tempelhof-Schöneberg',
    'Neukölln',
    'Friedrichshain-Kreuzberg',
    'Treptow-Köpenick',
    'Marzahn-Hellersdorf',
    'Lichtenberg',
  ];

  /** @type {string} */
  let result;
</script>

<Search
  search={fuzzysearch}
  searchConfig={{ data: bezirke }}
  label="Suche einen Berliner Bezirk"
  placeholder="z.B. Mitte"
  submitButtonLabel="Suchen"
  resetButtonLabel="Zurücksetzen"
  bind:result
  debug
/>

{#if result}
  Selected: {result}
{/if}
