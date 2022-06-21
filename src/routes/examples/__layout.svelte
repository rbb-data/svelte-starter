<div>
  <slot />
</div>

<style>
  :global(body) {
    background-color: var(--c-ui-gray-100);
  }

  div {
    background-color: white;
    margin: auto;
    width: max-content;
    margin-top: var(--s-px-8);
    padding: var(--s-px-4) var(--s-px-2);
    width: 400px;
  }
</style>
