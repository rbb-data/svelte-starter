<script>
  import { onMount, setContext } from 'svelte';
  import { browser } from '$app/env';

  import css from '$lib/actions/css';
  import { px } from '$lib/helpers/utils';

  import { key } from '$lib/assets/leaflet';

  export let height;
  export let options = undefined;

  const mapId = 'map';

  let map;

  setContext(key, () => map);

  onMount(async () => {
    if (!browser) return;

    // leaflet needs to be loaded dynamically as it interacts with the DOM
    const L = await import('leaflet');

    map = L.map(mapId, options);

    // here as an example, but will be done elsewhere
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

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
