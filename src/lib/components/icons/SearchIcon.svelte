<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'search-icon--title';

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
    d="m13.02 30.005-1.95-.427 1.77-8.089C8.87 20.164 6 16.414 6 12 6 6.48 10.48 2 16 2s10 4.48 10 10c0 5.519-4.48 10-10 10-.41 0-.81-.025-1.21-.073l-1.77 8.078ZM16 4c-4.41 0-8 3.584-8 8 0 4.415 3.59 8 8 8s8-3.585 8-8c0-4.416-3.59-8-8-8Zm-6.02 8.017c0-3.319 2.7-6.014 6.02-6.014v2a4.018 4.018 0 0 0-4.02 4.014h-2Z"
    fill={color}
  />
</svg>
