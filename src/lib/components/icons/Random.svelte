<script>
  /** @type {string | undefined} */
  export let title = undefined;

  export let id = 'random-icon--title';

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
    d="M26.59 9.005C25.82 9.002 24.93 9 24 9c-1.43 0-2.72.544-3.92 1.449-1.45 1.084-2.77 2.711-4.1 4.398-1.34-1.684-2.66-3.307-4.09-4.389-1.2-.906-2.48-1.449-3.89-1.449-3.22 0-5.97.009-5.97.009l.01 2s2.74-.009 5.96-.009c1.25 0 2.33.67 3.37 1.613 1.15 1.048 2.23 2.435 3.33 3.832-.86 1.07-1.76 2.09-2.74 2.903C10.8 20.327 9.53 21 8.04 21h-6v2h6c1.97 0 3.67-.827 5.2-2.107.97-.809 1.88-1.801 2.75-2.852.88 1.052 1.79 2.047 2.77 2.856C20.3 22.174 22.02 23 24 23h2.59l-2.3 2.293 1.42 1.414L30.41 22l-4.7-4.707-1.42 1.414L26.59 21H24c-1.51 0-2.79-.673-3.97-1.644-.98-.815-1.89-1.836-2.77-2.906 1.1-1.398 2.18-2.786 3.34-3.835C21.64 11.671 22.73 11 24 11c.93 0 1.82.002 2.58.005l-2.29 2.288 1.42 1.414L30.41 10l-4.7-4.707-1.42 1.414 2.3 2.298Z"
    fill={color}
  />
</svg>
