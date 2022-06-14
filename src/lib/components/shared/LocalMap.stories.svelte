<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import LocalMap from './LocalMap.svelte';
</script>

<Meta title="LocalMap" component={LocalMap} />

<Story name="Berlin">
  <LocalMap height={400} location="berlin" />
</Story>

<Story name="Brandenburg">
  <LocalMap height={400} location="brandenburg" />
</Story>
