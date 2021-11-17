<script>
  export let content;
</script>

<div>
  {content}
</div>

<style>
  div {
    background-color: aliceblue;
    padding: 5px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
  }

  :global(.tabs .active) div {
    outline: 2px solid steelblue;
  }
</style>
