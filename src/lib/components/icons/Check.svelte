<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'check-icon--title';

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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.49 27.015h1.17l9.26-21.621-1.84-.788-8.32 19.435-4.94-6.605-1.6 1.198 6.27 8.381Z"
    fill={color}
  />
</svg>
