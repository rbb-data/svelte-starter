<script>
  /**
   * Renderless component that adds GeoJSON to a Leaflet map
   *
   * @component
   */

  import { onMount, getContext } from 'svelte';
  import { browser } from '$app/env';

  import { key } from '$lib/assets/leaflet';

  /** @type {import('leaflet').Map} */
  const map = getContext(key)();

  /**
   * geo data in GeoJSON format
   * @type {import('geojson').GeoJsonObject}
   */
  export let data;

  /**
   * leaflet options to render GeoJSON (see https://leafletjs.com/reference.html#geojson)
   * @type {import('leaflet').GeoJSONOptions}
   */
  export let options = undefined;

  onMount(async () => {
    if (!browser) return;

    // leaflet needs to be loaded dynamically as it interacts with the DOM
    const L = (await import('leaflet')).default;

    const geoJSON = L.geoJSON(data, options).addTo(map);

    return {
      destroy() {
        if (geoJSON) geoJSON.remove();
      },
    };
  });
</script>
