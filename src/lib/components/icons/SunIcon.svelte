<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'sun-icon--title';

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
    d="M15 24v6h2v-6h-2Zm-5.71-2.707-4 4 1.42 1.414 4-4-1.42-1.414Zm12 1.414 4 4 1.42-1.414-4-4-1.42 1.414ZM16 10c3.31 0 6 2.689 6 6s-2.69 6-6 6-6-2.689-6-6 2.69-6 6-6Zm-8 5H2v2h6v-2Zm22 0h-6v2h6v-2ZM5.29 6.707l4 4 1.42-1.414-4-4-1.42 1.414Zm20-1.414-4 4 1.42 1.414 4-4-1.42-1.414ZM15 2v6h2V2h-2Z"
    fill={color}
  />
</svg>
