import debounce from 'lodash.debounce';

/** @typedef {'openstreetmap' | 'openaddresses' | 'geonames' | 'whosonfirst'} Source */

/**
 * @typedef {| 'venue'
 *   | 'address'
 *   | 'street'
 *   | 'country'
 *   | 'macroregion'
 *   | 'region'
 *   | 'macrocounty'
 *   | 'county'
 *   | 'locality'
 *   | 'localadmin'
 *   | 'borough'
 *   | 'neighbourhood'
 *   | 'coarse'
 *   | 'postalcode'} Layer
 */

/** @typedef {{ lat: number; lng: number }} Point */

/**
 * @typedef {{
 *   type: 'Feature';
 *   geometry: { type: 'Point'; coordinates: number[] };
 *   properties: {
 *     id: string;
 *     gid: string;
 *     layer: Layer;
 *     source: Source;
 *     source_id: string;
 *     name: string;
 *     housenumber: string;
 *     street: string;
 *     postalcode: string;
 *     accuracy: string;
 *     country: string;
 *     country_gid: string;
 *     country_a: string;
 *     region: string;
 *     region_gid: string;
 *     region_a: string;
 *     neighbourhood?: string;
 *     localadmin: string;
 *     localadmin_gid: string;
 *     locality: string;
 *     locality_gid: string;
 *     continent: string;
 *     continent_gid: string;
 *     label: string;
 *   };
 * }} Feature
 */

/**
 * @typedef {{
 *   sources?: Source[];
 *   layers?: Layer[];
 *   size?: number;
 *   focusPoint?: Point;
 *   boundaryRect?: { topleft: Point; bottomright: Point };
 *   boundaryCircle?: { center: Point; radius: number };
 *   boundaryCountry?: string;
 *   lang?: string;
 * }} OpenRouteServiceConfig
 */

/**
 * @typedef {{
 *   text: string;
 *   api_key: string;
 *   sources?: Source[];
 *   layers?: string[];
 *   size?: number;
 *   'focus.point.lat'?: number;
 *   'focus.point.lon'?: number;
 *   'boundary.rect.min_lat'?: number;
 *   'boundary.rect.min_lon'?: number;
 *   'boundary.rect.max_lat'?: number;
 *   'boundary.rect.max_lon'?: number;
 *   'boundary.circle.lat'?: number;
 *   'boundary.circle.lon'?: number;
 *   'boundary.circle.radius'?: number;
 *   'boundary.country'?: string;
 *   lang?: string;
 * }} OpenRouteServiceQueryParams
 */

/**
 * @typedef {{
 *   openrouteserviceConfig?: OpenRouteServiceConfig;
 *   keepFeature?: (feature: Feature) => boolean;
 * }} Options
 */

/** @typedef {{ location: Point; properties: Feature['properties'] }} Suggestion */

/**
 * Construct a URI string from an object
 *
 * @param {Record<string, any>} params
 * @returns {string}
 */
function toUriString(params) {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

/**
 * Query openrouteservice
 *
 * @param {string} query - Search query
 * @param {OpenRouteServiceConfig} [config] - openrouteservice configuration
 * @returns {Promise<Feature[]>}
 */
async function autocomplete(query, config = {}) {
  /** @type {OpenRouteServiceQueryParams} */
  const defaultParams = {
    text: undefined,
    api_key: /** @type {string} */ (import.meta.env.VITE_OPENROUTSERVICE_KEY),
    sources: ['openstreetmap'],
    size: 8,
  };

  /** @type {OpenRouteServiceQueryParams} */
  const params = { ...defaultParams, text: query };

  // set query parameters
  if (config.sources) params.sources = config.sources;
  if (config.layers) params.layers = config.layers;
  if (config.size) params.size = config.size;
  if (config.focusPoint) {
    params['focus.point.lat'] = config.focusPoint.lat;
    params['focus.point.lon'] = config.focusPoint.lng;
  }
  if (config.boundaryRect) {
    params['boundary.rect.min_lat'] = config.boundaryRect.bottomright.lat;
    params['boundary.rect.min_lon'] = config.boundaryRect.topleft.lng;
    params['boundary.rect.max_lat'] = config.boundaryRect.topleft.lat;
    params['boundary.rect.max_lon'] = config.boundaryRect.bottomright.lng;
  }
  if (config.boundaryCircle) {
    params['boundary.circle.lat'] = config.boundaryCircle.center.lat;
    params['boundary.circle.lon'] = config.boundaryCircle.center.lng;
    params['boundary.circle.radius'] = config.boundaryCircle.radius;
  }
  if (config.boundaryCountry) {
    params['boundary.country'] = config.boundaryCountry;
  }

  // build query string
  const url = '//api.openrouteservice.org/geocode/autocomplete';
  const uri = `${url}?${toUriString(params)}`;

  // fetch autocomplete results from openrouteservice
  return fetch(uri)
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((body) => body.features)
    .catch((err) => console.error(err));
}

/**
 * Allows to search and geocode locations if applied to an input field
 *
 * @param {HTMLInputElement} node - search field
 * @param {Options} [options] - options where `keepFeature` can be used to
 *   filter retrieved features and `openrouteserviceConfig` specifies the
 *   configuration when requesting data from
 *   [openrouteservice](https://openrouteservice.org) (see [Pelias'
 *   documentation](https://github.com/pelias/documentation/blob/master/autocomplete.md))
 */
export default function geolocalization(
  node,
  options = {
    keepFeature: () => true,
    openrouteserviceConfig: { boundaryCountry: 'DE', lang: 'de', size: 8 },
  }
) {
  if (!options.openrouteserviceConfig)
    options.openrouteserviceConfig = {
      boundaryCountry: 'DE',
      lang: 'de',
      size: 8,
    };
  if (!options.keepFeature) options.keepFeature = () => true;

  /** @type {Suggestion[]} */
  let suggestions = [];

  const queryOpenRouteService = debounce(
    async (query, config, keepFeature) => {
      const features = await autocomplete(query, config);
      suggestions = features
        .filter(keepFeature)
        .map(({ geometry, properties }) => ({
          location: {
            lat: geometry.coordinates[1],
            lng: geometry.coordinates[0],
          },
          properties,
        }));
    },
    300,
    { leading: true, trailing: true }
  );

  /** @param {Event} event */
  function handleInput(event) {
    queryOpenRouteService(
      /** @type {HTMLInputElement} */ (event.target).value,
      options.openrouteserviceConfig,
      options.keepFeature
    );

    node.dispatchEvent(
      new CustomEvent('search', {
        detail: { suggestions },
      })
    );

    node.addEventListener('change', handleChange);
    node.addEventListener('keydown', handleKeyDown);
  }

  function handleChange() {
    const result = suggestions.length > 0 ? suggestions[0] : null;

    node.dispatchEvent(
      new CustomEvent('result', {
        detail: { result },
      })
    );

    node.removeEventListener('change', handleChange);
  }

  /** @param {KeyboardEvent} event */
  function handleKeyDown(event) {
    if (event.key !== 'Escape') return;
    event.preventDefault();

    // clear input field
    node.value = '';

    // reset result
    node.dispatchEvent(
      new CustomEvent('result', {
        detail: { result: null },
      })
    );

    node.removeEventListener('keydown', handleKeyDown);
  }

  node.addEventListener('input', handleInput);

  return {
    destroy() {
      node.removeEventListener('input', handleInput);
    },
  };
}
