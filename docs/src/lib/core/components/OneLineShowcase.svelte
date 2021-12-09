<script>
  import Showcase from '$lib/core/components/Showcase.svelte';
  import Snippet from '$lib/core/components/Snippet.svelte';

  /**
   * @param {string} componentName
   * @param {Record<string,any>} props
   * @returns {string}
   */
  function createSource(componentName, props) {
    const propsStr = Object.entries(props)
      .map(([key, value]) =>
        typeof value === 'string' ? `${key}="${value}"` : `${key}={${value}}`
      )
      .join(' ');
    return `<${componentName} ${propsStr} />`;
  }

  /** @type {string} */
  export let componentName;

  /** @type {typeof import('svelte').SvelteComponent} */
  export let component;

  /** @type {Record<string,any>} */
  export let props;

  $: source = createSource(componentName, props);
</script>

<Showcase>
  <Snippet slot="left" {source} language="svelte" />
  <svelte:component this={component} slot="right" {...props} />
</Showcase>
