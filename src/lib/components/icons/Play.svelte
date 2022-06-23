<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'play-icon--title';

  export let color = '#000000';
</script>

<svg
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
    clip-rule="evenodd"
    d="M23.972 16.013 10.992 24V8l12.98 8.013Z"
    stroke={color}
    stroke-width="2.072"
    stroke-miterlimit="10"
  />
</svg>
