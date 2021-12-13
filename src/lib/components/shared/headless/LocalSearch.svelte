<script>
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
   * sources used for the search by openrouteservice
   *
   * @type {import('$lib/actions/geolocalization').Source[]}
   */
  export let sources = ['openstreetmap'];

  /** maximum number of suggestions */
  export let limit = 8;

  const coords = coordsMap[location];

  /** @type {import('$lib/actions/geolocalization').OpenRouteServiceConfig} */
  $: config = {
    sources,
    layers,
    size: limit,
    focusPoint: coords.center,
    boundaryRect: coords.bounds,
    boundaryCountry: 'DE',
    lang: 'de',
  };
</script>

<Search search={geolocalization} searchConfig={config} {...$$restProps} />
