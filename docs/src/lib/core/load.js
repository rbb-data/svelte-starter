/**
 * @param {string} filename
 * @returns {import('@sveltejs/kit').Load}
 */
export function fetchMetaData(filename) {
  return async ({ fetch }) => {
    const res = await fetch(
      `/svelte-starter/load/${encodeURIComponent(filename)}`
    );
    const meta = await res.json();

    // if successful, pass props to the component
    if (res.ok)
      return {
        props: {
          meta,
        },
      };

    // throw an error otherwise
    return {
      status: res.status,
      error: new Error(meta.error.message),
    };
  };
}
