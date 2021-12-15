<script>
  import Showcase from '$lib/components/Showcase.svelte';
  import Snippet from '$lib/components/Snippet.svelte';

  import BasicGeolocalization from './BasicGeolocalization.svelte';

  const markup = `<Search
  search={geolocalization}
  searchConfig={{
    openrouteserviceConfig: {
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
/>`;
</script>

<div class="wide">
  <Showcase>
    <Snippet
      slot="left"
      title="BasicGeolocalization.svelte"
      source={markup}
      language="svelte"
    />
    <BasicGeolocalization slot="right" />
  </Showcase>
</div>
