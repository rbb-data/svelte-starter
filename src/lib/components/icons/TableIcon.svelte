<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'table-icon--title';

  export let color = '#000000';
</script>

<svg
  role="img"
  width="32"
  height="32"
  fill="none"
  viewBox="0 0 32 32"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
  aria-labelledby={title && id}
  aria-hidden={title === undefined}
>
  {#if title}
    <title {id}>{title}</title>
  {/if}
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M28 28V4H4v24h24Zm-2-6h-6v4h6v-4Zm-14 0v4h6v-4h-6Zm-2 4v-4H6v4h4ZM6 16v4h4v-4H6Zm6 0v4h6v-4h-6Zm8 0v4h6v-4h-6ZM6 10v4h4v-4H6Zm6 4h6v-4h-6v4Zm8-4v4h6v-4h-6Z"
    fill={color}
  />
</svg>
