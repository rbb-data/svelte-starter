<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'germany-icon--title';

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
    d="M11 2h4l2 3 6-2 2 3v3l1 1v3l1 1v3l-6 2 1 3 3 3-2 1.5V29l-3-1-4 2-4-2-1.202 1H9v-2l2-3-4-1-2-5v-5h2l1-2V7l2-1h3l-2-4Z"
    stroke={color}
    stroke-width="2"
    stroke-miterlimit="10"
  />
</svg>
