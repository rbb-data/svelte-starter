<script>
  import { Search } from '@rbb-data/svelte-starter';
  import { geolocalization } from '@rbb-data/svelte-starter/actions';

  /** @type {import('@rbb-data/svelte-starter/actions/geolocalization').Suggestion} */
  let result;

  /**
   * @type {(
   *   feature: import('@rbb-data/svelte-starter/actions/geolocalization').Suggestion
   * ) => string}
   */
  const formatAddress = (feature) => {
    const { properties: p } = feature;
    return `${p.street} ${p.housenumber}, ${p.postalcode} ${p.localadmin}`;
  };
</script>

<Search
  search={geolocalization}
  searchConfig={{
    openRouteServiceConfig: {
      sources: ['osm'],
      layers: ['address'],
      boundaryCountry: 'DE',
      lang: 'de',
      size: 8,
    },
  }}
  format={formatAddress}
  label="Suche einen Adresse in Deutschland"
  placeholder="z.B. Masurenallee"
  submitButtonLabel="Suchen"
  resetButtonLabel="Zurücksetzen"
  bind:result
  debug
/>

{#if result}
  Selected: {formatAddress(result)} (location: ({result.location.lat}, {result
    .location.lng}))
{/if}
