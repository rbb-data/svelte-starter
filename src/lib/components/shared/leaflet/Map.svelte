<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { browser } from '$app/env';

  import type { Map, MapOptions, LatLngBoundsLiteral } from 'leaflet';

  import css from '$lib/actions/css';
  import { px } from '$lib/helpers/utils';

  import { key } from '$lib/assets/leaflet';

  // height of the map
  export let height: number;

  // map options (see https://leafletjs.com/reference.html#map)
  export let options: MapOptions = undefined;

  // if given, the map will zoom in on the given bounds
  export let fitBounds: LatLngBoundsLiteral = undefined;

  // hide zoom controls by default
  const defaultOptions = { zoomControl: false };
  options = { ...defaultOptions, ...options };

  const mapId = 'map';

  let map: Map;

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
