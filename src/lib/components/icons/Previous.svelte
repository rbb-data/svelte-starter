<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'previous-icon--title';

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
    d="M7.48 15h20.57v2H7.48l7.23 7.219-1.42 1.415L3.65 16l9.68-9.673 1.42 1.415L7.48 15Z"
    fill={color}
  />
</svg>
