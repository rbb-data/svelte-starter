<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'city-icon--title';

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
    d="M28 30H4V2h14v9.919l4-3.2 6 4.8V30Zm-14-2h6v-9H10v9h2v-3h2v3Zm2-11H8v11H6V4h10v13Zm-2 4h-2v2h2v-2Zm4 0h-2v2h2v-2Zm-8-7H8v2h2v-2Zm4 0h-2v2h2v-2Zm-4-4H8v2h2v-2Zm4 0h-2v2h2v-2Zm-4-4H8v2h2V6Zm4 0h-2v2h2V6Z"
    fill={color}
  />
</svg>
