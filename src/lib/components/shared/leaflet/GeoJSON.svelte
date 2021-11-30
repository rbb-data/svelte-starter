<!--
  @component

  Renderless component that adds GeoJSON to a Leaflet map
-->
<script lang="ts">
  import { onMount, getContext } from 'svelte';
  import { browser } from '$app/env';

  import type { GeoJsonObject } from 'geojson';
  import type { Map, GeoJSONOptions } from 'leaflet';

  import { key } from '$lib/assets/leaflet';

  const map = (getContext(key) as () => Map)();

  export let data: GeoJsonObject;
  export let options: GeoJSONOptions = undefined;

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
