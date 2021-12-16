<script>
  export let title="";
  export let background="";

</script>

<button class="btn button" style="background: {background}">{title}</button>

<style>
  .button {
    padding: 5px 20px;
    margin: 20px;
    /* font-weight: bold; */
    border: 1px solid black;
    border-radius: 2px;
  }

  .button:hover {
    box-shadow: black 2px 2px 1px;
  }
</style>