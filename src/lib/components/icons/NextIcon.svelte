<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'next-icon--title';

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
    d="M24.52 15H3.95v2h20.57l-7.23 7.219 1.42 1.415L28.35 16l-9.68-9.673-1.42 1.415L24.52 15Z"
    fill={color}
  />
</svg>
