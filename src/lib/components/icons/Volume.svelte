<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'volume-icon--title';

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
    d="M4 11H3v10h6.59l5 5H19V6h-4.41l-5 5H4Zm20.23-2.664A11.942 11.942 0 0 1 27 16c0 2.913-1.04 5.585-2.77 7.664l1.54 1.279A13.983 13.983 0 0 0 29 16c0-3.399-1.22-6.516-3.23-8.943l-1.54 1.279ZM5 13h5.41l5-5H17v16h-1.59l-5-5H5v-6Zm17.45 9.667a9.988 9.988 0 0 0 0-13.334l-1.49 1.334A7.96 7.96 0 0 1 23 16a7.96 7.96 0 0 1-2.04 5.333l1.49 1.334Z"
    fill={color}
  />
</svg>
