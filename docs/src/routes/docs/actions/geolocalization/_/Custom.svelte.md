This action queries [openrouteservice's autocomplete API](https://openrouteservice.org/dev/#/api-docs/geocode/autocomplete/get) to search and geocode locations provided by the user. Use as:

```svelte
<input
  use:geolocalization={{ openrouteserviceConfig: myConfig }}
  on:search={(e) => console.log('current suggestions:', e.detail.suggestions)}
  on:result={(e) => console.log('user-selected result:', e.detail.result)}
/>
```

**Dispatched events:** `search` `result`

- `search` is dispatched when the user types and exposes the current list of suggestions (of type `Suggestion[]`)
- `result` is dispatched when the user selects a suggestion and exposes the user-selected result if any (of type `Suggestion | null`)

where `Suggestion` is defined as `{ location: Point; properties: Feature['properties'] }` with feature properties such as name, street, housenumber, postalcode, and many more.

## Configuring openrouteservice

By default, few restrictions are applied to the location search (see API table). However, openrouteservice can be fully configured by passing `openrouteserviceConfig` that is defined as:

```javascript
{
  // see https://github.com/pelias/documentation/blob/master/autocomplete.md#sources
  sources?: Array<'openstreetmap' | 'openaddresses' | 'geonames' | 'whosonfirst'>;
  // see https://github.com/pelias/documentation/blob/master/autocomplete.md#layers
  layers?: Array<'venue' | 'address' | 'street' | 'country' | 'macroregion' | 'region' | 'macrocounty' | 'county' | 'locality' | 'localadmin' | 'borough' | 'neighbourhood' | 'coarse' | 'postalcode'>;
  // maximum number of results
  size?: number;
  // search close to this point
  focusPoint?: Point;
  // search within this rectangle
  boundaryRect?: { topleft: Point; bottomright: Point };
  // search within this circle
  boundaryCircle?: { center: Point; radius: number };
  // search within a country (e.g. 'DE')
  boundaryCountry?: string;
  // language setting (e.g. 'de')
  lang?: string;
}
```

where `Point` is `{ lat: number; lng: number }`. Check out [LocalSearch](https://github.com/rbb-data/svelte-starter/blob/main/src/lib/components/shared/headless/LocalSearch.svelte) as an example of how to configure `geolocalization` to only search for locations within Berlin or Brandenburg.
