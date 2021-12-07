export function fetchMetaData(filename) {
  return async ({ fetch }) => {
    const res = await fetch(`/load/${filename}`);
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