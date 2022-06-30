<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'up-icon--title';

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
  <g clip-path="url(#a)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 7.48v20.57h2V7.48l7.219 7.23 1.415-1.42L16 3.65l-9.673 9.68 1.415 1.42L15 7.48Z"
      fill={color}
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z" /></clipPath>
  </defs>
</svg>
