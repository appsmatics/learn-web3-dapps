<script>
  export let title="";

  export let disabled = false;
  export let visible = true;
  
  export let background="";
  export let disabledBackground = "white"
  export let buttonClicked

  $: visibility = visible?"visible":"hidden"

  $: backgnd = disabled ? disabledBackground : background
  $: classs = disabled? "disabled" : "button"
  
</script>

{#if visible}
  <button on:click={buttonClicked} class="btn {classs}" disabled={disabled} 
    style="background: {backgnd}; visibility: {visibility}"
  >
    {title}
  </button>  
{/if}

<style>
  .button {
    padding: 5px 20px;
    margin: 20px;
    /* font-weight: bold; */
    border: 1px solid black;
    border-radius: 2px;
  }

  .disabled {
    padding: 5px 20px;
    margin: 20px;
    border: none;
  }

  .button:hover {
    box-shadow: black 2px 2px 1px;
  }
</style>