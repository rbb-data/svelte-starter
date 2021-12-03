<!--
  @component

  Renderless component that adds GeoJSON to a Leaflet map
-->
<script>
  import { onMount, getContext } from 'svelte';
  import { browser } from '$app/env';

  import { key } from '$lib/assets/leaflet';

  /** @type {import('leaflet').Map} */
  const map = getContext(key)();

  /**
   * @type {import('geojson').GeoJsonObject}
   */
  export let data;

  /**
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
