<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'down-icon--title';

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
  <g clip-path="url(#a)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 24.52V3.95h-2v20.57l-7.219-7.23-1.415 1.42L16 28.35l9.673-9.68-1.415-1.42L17 24.52Z"
      fill={color}
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z" /></clipPath>
  </defs>
</svg>
