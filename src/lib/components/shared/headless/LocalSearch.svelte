<script>
  /**
   * Search and geocode locations in Berlin or Brandenburg
   *
   * @component
   */

  import Search from './Search.svelte';
  import geolocalization from '$lib/actions/geolocalization';

  import coordsMap from '$lib/assets/geo/coords.json';

  /**
   * region to search in
   *
   * @type {'berlin' | 'brandenburg'}
   */
  export let location;

  /**
   * layers to search through (see
   * https://github.com/pelias/documentation/blob/master/autocomplete.md#layers)
   *
   * @type {import('$lib/actions/geolocalization').Layer[]}
   */
  export let layers;

  /**
   * format feature for display
   *
   * @type {(
   *   feature: import('$lib/actions/geolocalization').Feature
   * ) => string}
   */
  export let format;

  /**
   * geo service sources used by openrouteservice
   *
   * @type {import('$lib/actions/geolocalization').Source[]}
   */
  export let sources = ['openstreetmap'];

  /** maximum number of suggestions */
  export let limit = 8;

  /**
   * the search result
   *
   * @type {import('$lib/actions/geolocalization').Suggestion}
   * @exposed
   */
  export let result = null;

  const coords = coordsMap[location];

  /** @type {import('$lib/actions/geolocalization').SearchOptions} */
  $: searchConfig = {
    openRouteServiceConfig: {
      sources,
      layers,
      size: limit,
      focusPoint: coords.center,
      boundaryRect: coords.bounds,
      boundaryCountry: 'DE',
      lang: 'de',
    },
    // make sure the retrieved locations are actually in Berlin or Brandenburg
    keepFeature: (feature) =>
      feature.properties.region.toLowerCase() === location,
  };
</script>

<Search
  search={geolocalization}
  {searchConfig}
  {format}
  {...$$restProps}
  bind:result
/>
