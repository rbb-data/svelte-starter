<script>
  /**
   * Visually hidden chart description for screen readers.
   *
   * @component
   */

  import VisuallyHidden from '$comps/shared/VisuallyHidden.svelte';

  /** @type {string} */
  export let title;

  /** @type {string} */
  export let subtitle;

  /** brief summary */
  export let summary = '';

  /** purpose of the chart */
  export let purpose = '';

  /** long description */
  export let description = '';

  /** context (e.g. selected through the side bar) */
  export let context = '';

  /** in debug mode, the content is not visually hidden */
  export let debug = false;
</script>

<VisuallyHidden {debug}>
  <div class="screen-reader-chart">
    <h2>Chart Titel: {title}</h2>

    <h3>Chart Untertitel: {subtitle}</h3>

    {#if summary}
      <p>{summary}</p>
    {/if}

    {#if purpose}
      <h3>Zweck</h3>
      <p>{purpose}</p>
    {/if}

    {#if description}
      <h3>Beschreibung</h3>
      <p>{description}</p>
    {/if}

    {#if context}
      <h3>Kontext</h3>
      <p>{context}</p>
    {/if}
  </div>
</VisuallyHidden>
