<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'telephone-icon--title';

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
    d="m13.086 12.785.474-.388-.13-.599s-.845-3.908-1.454-6.618a1.988 1.988 0 0 0-2.9-1.31l-.01.005a14.04 14.04 0 0 0-5.961 6.753l-.078.184v.201c0 2.154.973 8.489 5.294 12.687 4.252 4.131 10.61 5.27 12.671 5.27h.2l.186-.078a14.101 14.101 0 0 0 6.75-5.944l.006-.01a2.001 2.001 0 0 0-1.28-2.918l-.004-.002a390.99 390.99 0 0 0-6.659-1.432l-.59-.122-1.914 2.324c-.93-.397-2.68-1.25-3.984-2.513-1.326-1.287-2.14-3.027-2.506-3.945l1.89-1.545Zm-3.059-7.156c.463 2.057 1.06 4.8 1.319 5.995L8.858 13.66l.202.646s1.022 3.243 3.251 5.406c2.15 2.086 5.352 3.217 5.352 3.217l.659.232 2.056-2.493c1.213.253 4.043.847 6.008 1.298a12.094 12.094 0 0 1-5.588 5.002c-2.02-.07-7.426-1.146-11.084-4.701-3.704-3.6-4.627-8.976-4.683-11.053a12.034 12.034 0 0 1 4.996-5.584Z"
    fill={color}
  />
</svg>
