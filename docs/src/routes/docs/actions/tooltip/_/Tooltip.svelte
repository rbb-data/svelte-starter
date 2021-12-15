<script>
  /** @type {string} */
  export let message;
</script>

<div id="tooltip">
  I am a tooltip and I have the following message for you: <b>{message}</b>
</div>

<style>
  #tooltip {
    background-color: aliceblue;
    width: 200px;
    padding: 10px;
    margin: 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
