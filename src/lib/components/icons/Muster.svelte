<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'muster-icon--title';

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
    d="m21.02 3.796-5 24 1.96.408 5-24-1.96-.408Zm-6 0-5 24 1.96.408 5-24-1.96-.408Zm12 0-5 24 1.96.408 5-24-1.96-.408Zm-18 0-5 24 1.96.408 5-24-1.96-.408Z"
    fill={color}
  />
</svg>
