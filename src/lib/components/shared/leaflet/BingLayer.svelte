<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import { browser } from '$app/env';

  import type { Map } from 'leaflet';

  import { key } from '$lib/assets/leaflet';
  import addBingLayer from '$lib/helpers/leaflet/addBingLayer';
  import toStyleString, {
    MapStyleSheet,
  } from '$lib/helpers/leaflet/toStyleString';

  const API_KEY = import.meta.env.VITE_BING_KEY;

  const map = (getContext(key) as () => Map)();

  type ImagerySet =
    | 'Aerial'
    | 'AerialWithLabelsOnDemand'
    | 'CanvasDark'
    | 'CanvasLight'
    | 'CanvasGray'
    | 'RoadOnDemand';

  // type of imagery (see https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-imagery-metadata#template-parameters)
  export let type: ImagerySet = 'CanvasGray';

  // culture code (see https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes)
  export let culture = 'de-DE';

  // style sheet (see https://docs.microsoft.com/en-us/bingmaps/styling/map-style-sheet-entries#settings-and-elements)
  export let styleSheet: MapStyleSheet = {};

  onMount(async () => {
    if (!browser) return;

    // leaflet needs to be loaded dynamically as it interacts with the DOM
    const L = await import('leaflet');
    // add bingLayer to leaflet
    addBingLayer(L);

    // @ts-expect-error bingLayer does not exist on L
    const layer = L.bingLayer(API_KEY, {
      imagerySet: type,
      culture,
      style: toStyleString(styleSheet),
      detectRetina: true,
    }).addTo(map);

    return {
      destroy() {
        if (layer) layer.remove();
      },
    };
  });
</script>
