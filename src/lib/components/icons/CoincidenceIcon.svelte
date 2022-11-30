<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'coincidence-icon--title';

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
    d="M9.48 11H4v17h17v-6.406l2.77.593 3.42-15.955-15.96-3.419L9.48 11Zm-.43 2H6v13h13v-4.834L7.81 18.768 9.05 13ZM17 22.5a1.5 1.5 0 1 0-2.999-.001A1.5 1.5 0 0 0 17 22.5Zm-6 0a1.5 1.5 0 1 0-2.999-.001A1.5 1.5 0 0 0 11 22.5Zm-.81-5.268 2.58-12.045 12.04 2.581-2.58 12.045-12.04-2.581ZM19 12.5a1.5 1.5 0 1 0-2.999-.001A1.5 1.5 0 0 0 19 12.5Z"
    fill={color}
  />
</svg>
