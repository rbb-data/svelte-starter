<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'rain-icon--title';

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
    d="m16.02 19.809-2 10 1.96.392 2-10-1.96-.392Zm-8 0-1.4 6.995 1.96.392 1.4-6.995-1.96-.392Zm16 0-1.4 6.995 1.96.392 1.4-6.995-1.96-.392Zm-11.64-1.813-1.36 6.813 1.96.392 1.44-7.205h5.96l-1.36 6.813 1.96.392 1.44-7.205h3.08c2.48 0 4.5-2.016 4.5-4.5a4.504 4.504 0 0 0-5.06-4.465C24.46 5.07 21.09 1.996 17 1.996c-3.49 0-6.46 2.238-7.56 5.356A5.5 5.5 0 1 0 7.5 17.996h4.88ZM9.52 9.638l1.3.921.26-1.57A6.003 6.003 0 0 1 23 9.996c0 .099-.01.197-.01.295l-.08 1.677 1.51-.727a2.5 2.5 0 1 1 1.08 4.755h-18c-1.94 0-3.5-1.568-3.5-3.5s1.56-3.5 3.5-3.5c.75 0 1.44.238 2.02.642Z"
    fill={color}
  />
</svg>
