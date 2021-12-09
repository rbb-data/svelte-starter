<script>
  import Showcase from '$lib/core/components/Showcase.svelte';
  import Snippet from '$lib/core/components/Snippet.svelte';

  function createSource(componentName, props) {
    const propsStr = Object.entries(props)
      .map(([key, value]) => `${key}={${value}}`)
      .join(' ');
    return `<${componentName} ${propsStr} />`;
  }

  export let componentName;
  export let component;
  export let props;

  $: source = createSource(componentName, props);
</script>

<Showcase>
  <Snippet slot="left" {source} language="svelte" />
  <svelte:component this={component} slot="right" {...props} />
</Showcase>
