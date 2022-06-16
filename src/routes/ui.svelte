<script>
  import Button from '$shared/Button.svelte';
</script>

<h1>UI</h1>

<h2>Buttons</h2>

{#each ['blue', 'beige', 'turquoise', 'purple', 'yellow', 'red'] as accentColor}
  <div style:margin="1rem 0">
    {#each ['primary', 'secondary', 'tertiary'] as type}
      <Button {type} {accentColor} style="margin-right: 0.5rem">Button</Button>
    {/each}
  </div>
{/each}

{#each ['blue', 'beige', 'turquoise', 'purple', 'yellow', 'red'] as accentColor}
  <div style:margin="1rem 0">
    {#each ['primary', 'secondary', 'tertiary'] as type}
      <Button {type} {accentColor} disabled style="margin-right: 0.5rem">
        Disabled
      </Button>
    {/each}
  </div>
{/each}

{#each ['blue', 'beige', 'turquoise', 'purple', 'yellow', 'red'] as accentColor}
  <div style:margin="1rem 0">
    {#each ['primary', 'secondary', 'tertiary'] as type}
      <Button
        {type}
        {accentColor}
        disabled
        feedback="processing"
        style="margin-right: 0.5rem"
      >
        Processing
      </Button>
    {/each}
  </div>
{/each}

{#each ['done', 'success', 'error'] as feedback}
  <div style:margin="1rem 0">
    {#each ['primary', 'secondary', 'tertiary'] as type}
      <Button {type} {feedback} disabled style="margin-right: 0.5rem">
        {feedback}
      </Button>
    {/each}
  </div>
{/each}
