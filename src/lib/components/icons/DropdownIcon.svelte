<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'dropdown-icon--title';

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
    d="M5.29 11.707 16 22.414l10.71-10.707-1.42-1.414L16 19.586l-9.29-9.293-1.42 1.414Z"
    fill={color}
  />
</svg>
