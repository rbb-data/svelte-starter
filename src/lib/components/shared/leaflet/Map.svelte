<script>
  /**
   * Renders a Leaflet map
   *
   * @component
   */

  import { onMount, setContext } from 'svelte';
  import { browser } from '$app/env';

  import css from '$lib/actions/css';
  import { px } from '$lib/helpers/utils';

  import { key } from '$lib/assets/leaflet';

  /**
   * height of the map
   * @type {number}
   */
  export let height;

  /**
   * map options (see https://leafletjs.com/reference.html#map)
   * @type {import('leaflet').MapOptions}
   */
  export let options = undefined;

  /**
   * if given, the map will zoom in on the given bounds
   * @type {import('leaflet').LatLngBoundsLiteral}
   */
  export let fitBounds = undefined;

  // hide zoom controls by default
  const defaultOptions = { zoomControl: false };
  options = { ...defaultOptions, ...options };

  const mapId = 'map';

  /** @type {import('leaflet').Map} */
  let map;

  setContext(key, () => map);

  onMount(async () => {
    if (!browser) return;

    // leaflet needs to be loaded dynamically as it interacts with the DOM
    const L = (await import('leaflet')).default;

    map = L.map(mapId, options);

    // zoom map to fit bounds
    if (fitBounds) map.fitBounds(fitBounds);

    return {
      destroy: () => {
        if (map) map.remove();
      },
    };
  });
</script>

<div id={mapId} use:css={{ height: px(height) }}>
  {#if map}
    <slot />
  {/if}
</div>

<style>
  @import 'leaflet/dist/leaflet.css';

  #map {
    height: var(--height);
  }
</style>
