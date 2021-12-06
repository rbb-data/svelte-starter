<script>
  import '../style/index.css';

  const components = [{ route: '/components/LocalMap', label: 'LocalMap' }];

  const headlessComponents = [
    { route: '/components/headless/Search', label: 'Search' },
    { route: '/components/headless/Slider', label: 'Slider' },
    { route: '/components/headless/Svg', label: 'Svg' },
    { route: '/components/headless/Tabs', label: 'Tabs' },
  ];

  const actions = [
    { route: '/actions/css', label: 'use:css' },
    { route: '/actions/focus', label: 'use:focus' },
    { route: '/actions/fuzzysearch', label: 'use:fuzzysearch' },
    { route: '/actions/pannable', label: 'use:pannable' },
    { route: '/actions/tooltip', label: 'use:tooltip' },
  ];
</script>

<div class="wrapper">
  <nav>
    <section>
      Components
      <ul>
        {#each components as { route, label }}
          <li><a href={route}>{label}</a></li>
        {/each}
      </ul>
    </section>
    <section>
      Headless Components
      <ul>
        {#each headlessComponents as { route, label }}
          <li><a href={route}>{label}</a></li>
        {/each}
      </ul>
    </section>
    <section>
      Actions
      <ul>
        {#each actions as { route, label }}
          <li><a href={route}>{label}</a></li>
        {/each}
      </ul>
    </section>
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

  ul {
    list-style: none;
    padding: 0;
  }
</style>
