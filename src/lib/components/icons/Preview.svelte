<script>
  /** @type {string} */
  export let title = undefined;

  export let id = 'preview-icon--title';

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
    d="M16 6.023c-9.59 0-13.88 9.57-13.88 9.57l-.18.409.18.409S6.46 25.977 16 25.977c9.54 0 13.88-9.566 13.88-9.566l.18-.409-.18-.409S25.59 6.023 16 6.023Zm0 2c7.23 0 10.98 6.292 11.85 7.975-.88 1.683-4.65 7.979-11.85 7.979-7.2 0-10.97-6.296-11.85-7.979.87-1.683 4.62-7.975 11.85-7.975Zm0 2.99c2.75 0 4.99 2.234 4.99 4.987A4.993 4.993 0 0 1 16 20.987 4.993 4.993 0 0 1 11.01 16 4.993 4.993 0 0 1 16 11.013Z"
    fill={color}
  />
</svg>
