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

/** @typedef {{ lat: number; lon: number }} Point */

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
 *   boundaryRect?: { min: Point; max: Point };
 *   boundaryCircle?: { center: Point; radius: number };
 *   boundaryCountry?: string;
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
    'boundary.country': 'DE',
    lang: 'de',
  };

  /** @type {OpenRouteServiceQueryParams} */
  const params = { ...defaultParams, text: query };

  // set query parameters
  if (config.sources) params.sources = config.sources;
  if (config.layers) params.layers = config.layers;
  if (config.size) params.size = config.size;
  if (config.focusPoint) {
    params['focus.point.lat'] = config.focusPoint.lat;
    params['focus.point.lon'] = config.focusPoint.lon;
  }
  if (config.boundaryRect) {
    params['boundary.rect.min_lat'] = config.boundaryRect.min.lat;
    params['boundary.rect.min_lon'] = config.boundaryRect.min.lon;
    params['boundary.rect.max_lat'] = config.boundaryRect.max.lat;
    params['boundary.rect.max_lon'] = config.boundaryRect.max.lon;
  }
  if (config.boundaryCircle) {
    params['boundary.circle.lat'] = config.boundaryCircle.center.lat;
    params['boundary.circle.lon'] = config.boundaryCircle.center.lon;
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
 * Implements geolocalization on an input field
 *
 * @param {HTMLInputElement} node - input field for search
 * @param {OpenRouteServiceConfig} config - openrouteservice configuration (see
 *   [Pelias'
 *   documentation](https://github.com/pelias/documentation/blob/master/autocomplete.md))
 */
export default function geolocalization(node, config) {
  /** @type {Feature[]} */
  let suggestions = [];

  const queryOpenRouteService = debounce(
    async (query, config) => {
      suggestions = await autocomplete(query, config);
    },
    300,
    { leading: true, trailing: true }
  );

  /** @param {Event} event */
  function handleInput(event) {
    queryOpenRouteService(
      /** @type {HTMLInputElement} */ (event.target).value,
      config
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
