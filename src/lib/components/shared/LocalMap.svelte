<!--
  @component

  Bing-powered Leaflet map of Berlin or Brandenburg

  [Docs](https://github.com/rbb-data/svelte-starter/wiki/Docs#localmap)
-->
<script lang="ts">
  import Map from './leaflet/Map.svelte';
  import BingLayer from './leaflet/BingLayer.svelte';
  import GeoJson from './leaflet/GeoJSON.svelte';

  import coordsMap from '$lib/assets/geo/coords.json';

  import rbbStyles from '$lib/assets/map-styles/rbb.json';

  // height of the map
  export let height: number;

  // region to show
  export let location: 'berlin' | 'brandenburg';

  // if true, show Berlin's Bezirke or Brandenburg's Kreise
  export let showDistricts = false;

  // if given, styles are passed to the Bing layer
  export let styleSheet = undefined;

  // map options for the mask (see https://leafletjs.com/examples/geojson/)
  export let maskOptions = undefined;

  // map options for districts (see https://leafletjs.com/examples/geojson/)
  export let districtOptions = undefined;

  // dynamically load the mask
  async function loadMask() {
    switch (location) {
      case 'berlin':
        return await import('$lib/assets/geo/berlin-mask.geo.json');
      case 'brandenburg':
        return await import('$lib/assets/geo/brandenburg-mask.geo.json');
    }
  }

  // dynamically load the districts
  async function loadDistricts() {
    switch (location) {
      case 'berlin':
        return await import('$lib/assets/geo/berlin-bezirke.geo.json');
      case 'brandenburg':
        return await import(
          '$lib/assets/geo/brandenburg-kreise-simplified.geo.json'
        );
    }
  }

  const maxZoom = 17;

  const coords = coordsMap[location];

  const zoom = {
    berlin: 10,
    brandenburg: 7,
  }[location];

  const minZoom = {
    berlin: 9,
    brandenburg: 7,
  }[location];

  const bounds = [
    [coords.bounds.bottomright.lat, coords.bounds.bottomright.lng],
    [coords.bounds.topleft.lat, coords.bounds.topleft.lng],
  ] as Array<[number, number]>;

  const mapOptions = {
    center: coords.center,
    bounds,
    maxBounds: bounds,
    zoom,
    minZoom,
    maxZoom,
  };

  // by default, apply rbb styles
  if (styleSheet === undefined) styleSheet = rbbStyles;
</script>

<Map {height} options={mapOptions}>
  <BingLayer {styleSheet} />

  {#await loadMask() then mask}
    <GeoJson data={mask} options={maskOptions} />
  {/await}

  {#if showDistricts}
    {#await loadDistricts() then districts}
      <GeoJson data={districts} options={districtOptions} />
    {/await}
  {/if}

  <slot />
</Map>
