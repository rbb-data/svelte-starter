<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'talk-icon--title';

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
    d="M30 6H2v14.992h18.59l5.4 5.426.01-5.426h4V6ZM4 8h24v10.992h-4v2.59l-2.58-2.59H4V8Zm4.5 6a1.5 1.5 0 1 1 .001 2.999A1.5 1.5 0 0 1 8.5 14Zm6 0a1.5 1.5 0 1 1 .001 2.999A1.5 1.5 0 0 1 14.5 14Zm6 0a1.5 1.5 0 1 1 .001 2.999A1.5 1.5 0 0 1 20.5 14Z"
    fill={color}
  />
</svg>
