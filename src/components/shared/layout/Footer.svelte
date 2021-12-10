<script lang="ts">
  import {FOOTER_HEIGHT} from 'src/utils/constants';

  //export let chain;
  export let isFirstStep = false;
  export let isLastStep = false;
  export let nextStepTitle = "Next: Setup the project";
  export let previousStepTitle = "Previous";
</script>

<div class="footer" style="height: {FOOTER_HEIGHT}">
  <div class="d-flex align-items-center justify-content-between">
    <div class="">
        {#if !isFirstStep}
          <button class="btn button">{previousStepTitle}</button>
        {/if}
      </div>
    <div class="">
      {#if !isLastStep}
      <button class="btn button">{nextStepTitle}</button>
     {/if}    
    </div>
  </div>
</div>

<style>
  .footer {
    padding: 0 40px;
    background: #f5f5f5;
    border-top: solid 2px black;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  } 

  .button {
    padding: 5px 20px;
    margin: 20px;
    background: linear-gradient(253deg, #00FFA3, #DC1FFF);
    font-weight: bold;
  }

  .button:hover {
    box-shadow: black 2px 2px 1px;
  }

</style>