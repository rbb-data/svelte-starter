<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'solid-play-icon--title';

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
    d="m9.96 25.864 16.01-9.85L9.96 6.133v19.731Z"
    fill={color}
  />
</svg>
