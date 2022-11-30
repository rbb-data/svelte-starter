<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'processing-icon--title';

  export let color = '#000000';
</script>

<svg
  role="img"
  width="32"
  height="32"
  fill="none"
  viewBox="0 0 32 32"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;fill:{color}"
  aria-labelledby={title && id}
  aria-hidden={title === undefined}
>
  {#if title}
    <title {id}>{title}</title>
  {/if}
  <path style="fill:none" d="M0 0h32v32H0z" />
  <path
    d="M13.689 26.689c-4.853-1.06-8.49-5.384-8.49-10.552 0-5.962 4.838-10.8 10.8-10.8 5.96 0 10.8 4.838 10.8 10.8 0 .792-.086 1.565-.249 2.309l2.346.51c.198-.907.302-1.851.302-2.82 0-7.285-5.914-13.2-13.2-13.2-7.285 0-13.2 5.915-13.2 13.2 0 6.318 4.448 11.603 10.379 12.898l.512-2.345Z"
  />
</svg>
