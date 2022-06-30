<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'countryside-icon--title';

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
    d="M4 30.006h14V18.472l-7-4.674-7 4.674v11.534Zm19-4.149V30h2v-4.143c1.702-.493 3-2.216 3-4.319 0-1.402-.562-5.742-1.585-8.22-.315-.762-.686-1.364-1.071-1.733C24.926 11.184 24.466 11 24 11c-.466 0-.926.184-1.344.585-.385.369-.756.971-1.071 1.733C20.562 15.796 20 20.136 20 21.538c0 2.103 1.298 3.826 3 4.319Zm-13 2.149h6v-8.465l-5-3.339-5 3.339v8.465h2v-3h2v3Zm0-7H8v2h2v-2Zm4 0h-2v2h2v-2Zm6.871-15.981a2.5 2.5 0 0 1-.369 4.97h-7.5a3.003 3.003 0 1 1 .509-5.961 3.997 3.997 0 0 1 7.36.991Zm-.369 1.972h-1.499l-.012-1a1.999 1.999 0 0 0-3.943-.464l-.043.464-2.003-.008a1.004 1.004 0 0 0 0 2.007h7.5a.5.5 0 0 0 0-.999Z"
    fill={color}
  />
</svg>
