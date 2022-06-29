<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'time-icon--title';

  export let color = '#000000';
</script>

<svg
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
    d="M16 2.019C8.28 2.019 2.02 8.284 2.02 16S8.28 29.981 16 29.981c7.72 0 13.98-6.265 13.98-13.981S23.72 2.019 16 2.019Zm0 2c6.61 0 11.98 5.368 11.98 11.981 0 6.613-5.37 11.981-11.98 11.981S4.02 22.613 4.02 16C4.02 9.387 9.39 4.019 16 4.019ZM15 6v10.819l5.79 1.275.43-1.953-4.22-.929V6.437L15 6Z"
    fill={color}
  />
</svg>
