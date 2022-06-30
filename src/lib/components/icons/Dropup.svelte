<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'dropup-icon--title';

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
      d="M26.71 20.293 16 9.586 5.29 20.293l1.42 1.414L16 12.414l9.29 9.293 1.42-1.414Z"
      fill={color}
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z" /></clipPath>
  </defs>
</svg>
