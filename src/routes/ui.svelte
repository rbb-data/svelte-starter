<script>
  import Button from '$comps/shared/Button.svelte';

  /** @type {('primary' | 'secondary' | 'tertiary')[]} */
  const types = ['primary', 'secondary', 'tertiary'];

  /**
   * @type {(
   *   | 'blue'
   *   | 'black'
   *   | 'turquoise'
   *   | 'purple'
   *   | 'yellow'
   *   | 'red'
   * )[]}
   */
  const colors = ['blue', 'black', 'turquoise', 'purple', 'yellow', 'red'];

  /** @type {('done' | 'success' | 'error' | 'processing')[]} */
  const feedbacks = ['done', 'success', 'error'];
</script>

<h1>UI</h1>

<h2>Buttons</h2>

{#each colors as accentColor}
  <div style:margin="1rem 0">
    {#each types as type}
      <Button {type} {accentColor} style="margin-right: 0.5rem">Button</Button>
    {/each}
  </div>
{/each}

{#each colors as accentColor}
  <div style:margin="1rem 0">
    {#each types as type}
      <Button {type} {accentColor} disabled style="margin-right: 0.5rem">
        Disabled
      </Button>
    {/each}
  </div>
{/each}

{#each colors as accentColor}
  <div style:margin="1rem 0">
    {#each types as type}
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

{#each feedbacks as feedback}
  <div style:margin="1rem 0">
    {#each types as type}
      <Button {type} {feedback} disabled style="margin-right: 0.5rem">
        {feedback}
      </Button>
    {/each}
  </div>
{/each}
