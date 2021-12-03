<!--
  @component

  Renderless component that implements a Leaflet layer
  that renders a Bing map
-->
<script>
  import { getContext, onMount } from 'svelte';
  import { browser } from '$app/env';

  import { key } from '$lib/assets/leaflet';
  import addBingLayer from '$lib/helpers/leaflet/addBingLayer';
  import toStyleString from '$lib/helpers/leaflet/toStyleString';

  const API_KEY = import.meta.env.VITE_BING_KEY;

  /** @type {import('leaflet').Map} */
  const map = getContext(key)();

  /**
   * type of imagery
   * @type {'Aerial' | 'AerialWithLabelsOnDemand' | 'CanvasDark' | 'CanvasLight' | 'CanvasGray' | 'RoadOnDemand'}
   * @see https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-imagery-metadata#template-parameters
   */
  export let type = 'CanvasGray';

  /**
   * culture code
   * @see https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes
   */
  export let culture = 'de-DE';

  /**
   * style sheet
   * @type {import('$lib/helpers/leaflet/toStyleString').MapStyleSheet}
   * @see https://docs.microsoft.com/en-us/bingmaps/styling/map-style-sheet-entries#settings-and-elements
   */
  export let styleSheet = {};

  onMount(async () => {
    if (!browser) return;

    // leaflet needs to be loaded dynamically as it interacts with the DOM
    const L = (await import('leaflet')).default;
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
