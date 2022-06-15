<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import fuzzysearch from './fuzzysearch';

  const data = [
    'Mitte',
    'Friedrichshain-Kreuzberg',
    'Pankow',
    'Charlottenburg-Wilmersdorf',
    'Spandau',
    'Steglitz-Zehlendorf',
    'Tempelhof-Schöneberg',
    'Neukölln',
    'Treptow-Köpenick',
    'Marzahn-Hellersdorf',
    'Lichtenberg',
    'Reinickendorf',
  ];

  const complexData = data.map((district, i) => ({ id: i, name: district }));

  let suggestions = [];
  let result = '';
  let complexResult = {};
</script>

<Meta title="Actions/use:fuzzysearch" />

<Story name="Basic">
  <input
    use:fuzzysearch={{ data }}
    on:search={(e) => (suggestions = e.detail.suggestions)}
    on:result={(e) => (result = e.detail.result)}
    placeholder="Wähle einen Berliner Bezirk"
  />

  <div>
    Current suggestions: {suggestions}<br />
    Result: {result}
  </div>
</Story>

<Story name="Limit the number of suggestions">
  <input
    use:fuzzysearch={{ data, limit: 3 }}
    on:search={(e) => (suggestions = e.detail.suggestions)}
    on:result={(e) => (result = e.detail.result)}
    placeholder="Wähle einen Berliner Bezirk"
  />

  <div>
    Current suggestions: {suggestions}<br />
    Result: {result}
  </div>
</Story>

<Story name="Search a list of objects">
  <input
    use:fuzzysearch={{ data: complexData, key: 'name' }}
    on:search={(e) => (suggestions = e.detail.suggestions)}
    on:result={(e) => (complexResult = e.detail.result)}
    placeholder="Wähle einen Berliner Bezirk"
  />

  <div>
    Current suggestions: {suggestions.map((s) => `${s.name} (${s.id})`)}<br />
    Result: {complexResult.name} ({complexResult.id})
  </div>
</Story>
