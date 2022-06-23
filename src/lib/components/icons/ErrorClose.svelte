<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'error-close-icon--title';

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
    d="M16 14.596 6.71 5.308 5.29 6.722l9.29 9.289-9.28 9.282 1.41 1.414L16 17.425l9.29 9.297 1.42-1.414-9.3-9.297 9.2-9.198-1.42-1.415L16 14.596Z"
    fill={color}
  />
</svg>
