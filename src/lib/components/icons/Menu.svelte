<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'menu-icon--title';

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
    d="M18 23.987c0-.531-.21-1.04-.58-1.416a2.023 2.023 0 0 0-1.42-.586c-.53 0-1.04.211-1.42.586a2.02 2.02 0 0 0-.58 1.416v.001c0 .531.21 1.04.58 1.416.38.375.89.586 1.42.586.53 0 1.04-.211 1.42-.586.37-.376.58-.885.58-1.416v-.001Zm0-7.984c0-.529-.21-1.037-.59-1.411a1.986 1.986 0 0 0-1.41-.585c-.53 0-1.04.211-1.41.585-.38.374-.59.882-.59 1.411v.001c0 .529.21 1.037.59 1.411.37.375.88.585 1.41.585.53 0 1.04-.21 1.41-.585.38-.374.59-.882.59-1.411v-.001Zm0-7.991c0-1.106-.89-2.002-2-2.002-1.11 0-2 .896-2 2.002v.001c0 1.106.89 2.002 2 2.002 1.11 0 2-.896 2-2.002v-.001Z"
    fill={color}
  />
</svg>
