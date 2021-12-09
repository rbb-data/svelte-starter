<script>
  import OneLineShowcase from '$lib/core/components/OneLineShowcase.svelte';

  import { LocalMap } from '@rbb-data/svelte-starter';
</script>

<OneLineShowcase
  componentName="LocalMap"
  component={LocalMap}
  props={{ height: 200, location: 'berlin' }}
/>

<OneLineShowcase
  componentName="LocalMap"
  component={LocalMap}
  props={{ height: 200, location: 'brandenburg' }}
/>
