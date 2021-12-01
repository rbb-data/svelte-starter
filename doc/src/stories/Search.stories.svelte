<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { Search } from '@rbb-data/svelte-starter';

  const data = [
    'Mitte',
    'Pankow',
    'Reinickendorf',
    'Charlottenburg-Wilmersdorf',
    'Spandau',
    'Steglitz-Zehlendorf',
    'Tempelhof-Schöneberg',
    'Neukölln',
    'Friedrichshain-Kreuzberg',
    'Treptow-Köpenick',
    'Marzahn-Hellersdorf',
    'Lichtenberg',
  ];
</script>

<Meta title="Headless/Search" component={Search} />

<Template let:args>
  <Search {data} {...args} />
</Template>

<Story
  name="Basic"
  args={{
    highlightSelection: true,
  }}
/>
