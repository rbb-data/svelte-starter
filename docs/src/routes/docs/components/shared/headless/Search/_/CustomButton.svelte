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

<div class="wrapper">
  <Search
    search={fuzzysearch}
    searchConfig={{ data: bezirke }}
    label="Suche einen Berliner Bezirk"
    placeholder="z.B. Mitte"
    submitButtonLabel="Suche"
    bind:result
    debug
  >
    <!-- Setting an aria-label ensures screen readers can announce this button -->
    <button slot="reset-button" type="reset" aria-label="Zurücksetzen">
      &#x2715
    </button>
  </Search>
</div>

{#if result}
  Selected: {result}
{/if}

<style>
  button[type='reset'] {
    position: absolute;
    bottom: 2px; /* magic value */
    transform: translateX(-150%);
    background: none;
    border: none;
  }

  button[type='reset']:hover {
    cursor: pointer;
  }
</style>
