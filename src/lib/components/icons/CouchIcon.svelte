<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'couch-icon--title';

  export let color = '#000000';
</script>

<svg
  role="img"
  width="32"
  height="32"
  fill="none"
  viewBox="0 0 32 32"
  aria-labelledby={title && id}
  aria-hidden={title === undefined}
>
  {#if title}
    <title {id}>{title}</title>
  {/if}
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 11.17a3.01 3.01 0 0 0-2 2.828v7c0 .796.32 1.559.88 2.121.56.563 1.32.879 2.12.879h1v2h2v-2h16v2h2v-2h1c.8 0 1.56-.316 2.12-.879a3.01 3.01 0 0 0 .88-2.121v-7a3.01 3.01 0 0 0-2-2.828V9a3.01 3.01 0 0 0-.88-2.121A2.984 2.984 0 0 0 25 6H7c-.8 0-1.56.316-2.12.879A3.01 3.01 0 0 0 4 9v2.17ZM6 19h20v-5.002a1.002 1.002 0 0 1 1.71-.707c.18.188.29.442.29.707v7c0 .265-.11.52-.29.707a1 1 0 0 1-.71.293H5c-.26 0-.52-.105-.71-.293a1.03 1.03 0 0 1-.29-.707v-7c0-.265.11-.519.29-.707a1.002 1.002 0 0 1 1.71.707V19ZM17 8v9h7v-3.002c0-1.306.84-2.417 2-2.829V9c0-.265-.11-.52-.29-.707A1 1 0 0 0 25 8h-8Zm-2 0H7c-.26 0-.52.105-.71.293A1.03 1.03 0 0 0 6 9v2.169c1.16.412 2 1.523 2 2.829V17h7V8Z"
    fill={color}
  />
</svg>
