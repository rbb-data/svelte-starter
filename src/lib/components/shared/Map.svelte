<script lang="ts">
  import Map from './leaflet/Map.svelte';
  import BingLayer from './leaflet/BingLayer.svelte';
  import ZoomControl from './leaflet/ZoomControl.svelte';

  export let height: number;
  export let location: 'berlin' | 'brandenburg';

  // TODO: This shouldn't live here
  const coords = {
    berlin: {
      center: { lat: 52.5244, lng: 13.4105 },
      bounds: {
        topleft: { lat: 52.65, lng: 13.1 },
        bottomright: { lat: 52.35, lng: 13.75 },
      },
      maxBounds: {
        topleft: { lat: 52.8, lng: 12.9 },
        bottomright: { lat: 52.2, lng: 13.9 },
      },
    },
    brandenburg: {
      center: { lat: 52.8455492, lng: 13.2461296 },
      bounds: {
        topleft: { lat: 53.5590907, lng: 14.7658159 },
        bottomright: { lat: 51.359064, lng: 11.2662278 },
      },
      maxBounds: {
        topleft: { lat: 54.8590907, lng: 15.2658159 },
        bottomright: { lat: 50.659064, lng: 11.067355 },
      },
    },
  };
  const locationCoords = coords[location];

  const bounds = [
    [
      locationCoords.bounds.bottomright.lat,
      locationCoords.bounds.bottomright.lng,
    ],
    [locationCoords.bounds.topleft.lat, locationCoords.bounds.topleft.lng],
  ] as Array<[number, number]>;

  const options = {
    bounds,
    maxBounds: bounds,
  };
</script>

<Map {height} {options} fitBounds={bounds}>
  <BingLayer />
  <ZoomControl />
</Map>
