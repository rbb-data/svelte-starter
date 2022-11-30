<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'final-icon--title';

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
    d="m6.02 8.192 4 20.995 1.96-.374L10.11 19l3.16.001c2.06 0 4.04-.829 5.48-2.3V16.7A5.687 5.687 0 0 1 22.8 15h5.42l-2.4-12H20.8c-2.06 0-4.03.828-5.48 2.299V5.3a5.684 5.684 0 0 1-4.05 1.701L5.78 7l.24 1.192ZM9.82 17l2.96.001-.6-3L9.22 14l.6 3Zm6.55-4.184c-.68.427-1.42.746-2.2.945l.61 3.035a5.664 5.664 0 0 0 2.16-1.145l-.57-2.835Zm3.85-2.59c-.77.224-1.49.61-2.11 1.136l.58 2.833a7.694 7.694 0 0 1 2.13-.935l-.6-3.034ZM25.18 10h-2.97l.6 3h2.97l-.6-3ZM8.82 12l2.96.001-.6-3L8.22 9l.6 3Zm6.53-4.174c-.67.422-1.41.738-2.18.935l.61 3.035a5.665 5.665 0 0 0 2.15-1.132l-.58-2.838Zm3.87-2.6c-.78.226-1.5.616-2.12 1.149l.57 2.83a7.752 7.752 0 0 1 2.15-.945l-.6-3.034ZM21.21 5l.6 3h2.97l-.6-3h-2.97Z"
    fill={color}
  />
</svg>
