<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'next-week-icon--title';

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
    d="M4 5h6V3h2v2h8.01V3h2v2H28v23H4V5Zm2 21V12.005h19.46a3.995 3.995 0 0 1-3.46 2l-8 .008V21a5.03 5.03 0 0 1-1.46 3.536A5.01 5.01 0 0 1 9 26H6Zm18.75-8.546c.46-.429.88-.897 1.25-1.396V26H15.4c.4-.285.79-.598 1.16-.939 2.39-2.222 5.78-5.371 8.19-7.607ZM6 7h4v1h2V7h8.01v1h2V7H26v3.005H6V7Z"
    fill={color}
  />
</svg>
