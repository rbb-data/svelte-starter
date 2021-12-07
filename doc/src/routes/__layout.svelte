<script>
  import '../style/index.css';

  import NavSection from '$lib/NavSection.svelte';

  const components = ['LocalMap'];
  const headlessComponents = ['Search', 'Slider', 'Svg', 'Tabs'];
  const actions = ['css', 'focus', 'fuzzysearch', 'pannable', 'tooltip'];
  const stores = ['prefersReducedMotion'];
</script>

<div class="wrapper">
  <nav>
    <NavSection
      heading="Components"
      urlPrefix="/components"
      items={components}
    />
    <NavSection
      heading="Headless Components"
      urlPrefix="/components/headless"
      items={headlessComponents}
    />
    <NavSection
      heading="Actions"
      urlPrefix="/actions"
      items={actions}
      format={(item) => `use:${item}`}
    />
    <NavSection
      heading="Stores"
      urlPrefix="/stores"
      items={stores}
      format={(item) => `$${item}`}
    />
  </nav>
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: minmax(150px, 20%) 1fr;
  }
</style>
