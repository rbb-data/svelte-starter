<!--
  @component

  Renderless component that adds a zoom control to a Leaflet map
-->
<script>
  import { onMount, getContext } from 'svelte';
  import { browser } from '$app/env';

  import { key } from '$lib/assets/leaflet';

  /** @type {import('leaflet').Map} */
  const map = getContext(key)();

  /**
   * position of the zoom control
   * @type {'topleft' | 'topright' | 'bottomleft' | 'bottomright'}
   */
  export let position = 'topright';

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
    const L = (await import('leaflet')).default;

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
