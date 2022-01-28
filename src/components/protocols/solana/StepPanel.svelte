<script>
  export let completed
  $:stateCss = completed ? "disabled" : ""
</script>

<div class="row d-flex flex-row proto-panel pt-2 justify-content-between {stateCss}">
  <slot name="step-content"></slot>
</div>

<style>

  .disabled {
    pointer-events: none;
    /* for "disabled" effect */
    opacity: 0.5;
    background: #CCC;
  }

  .proto-panel {
    border: 2px solid grey;
    border-radius: 5px;
    /* max-width: 80%; */
    margin: 50px;
  }
</style>