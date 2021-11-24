<script lang="ts">
  import { onMount, getContext } from 'svelte';
  import { browser } from '$app/env';

  import type { Map } from 'leaflet';

  import { key } from '$lib/assets/leaflet';

  const map = (getContext(key) as () => Map)();

  type Position = 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

  // position of the zoom control
  export let position: Position = 'topright';

  // zoom in icon (any valid html string is allowed)
  export let zoomInText = '+';
  // zoom in title for accessibility
  export let zoomInTitle = 'Hineinzoomen';

  // zoom out icon (any valid html string is allowed)
  export let zoomOutText = '&#x2212';
  // zoom out title for accessibility
  export let zoomOutTitle = 'Herauszommen';

  onMount(async () => {
    if (!browser) return;

    // leaflet needs to be loaded dynamically as it interacts with the DOM
    const L = await import('leaflet');

    const zoomControl = L.control
      .zoom({ position, zoomInText, zoomInTitle, zoomOutText, zoomOutTitle })
      .addTo(map);

    return {
      destroy() {
        if (zoomControl) zoomControl.remove();
      },
    };
  });
</script>
