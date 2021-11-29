<script lang="ts">
  import {FOOTER_HEIGHT} from '../../../utils/constants';

  export let isFirstStep = false;
  export let isLastStep = false;
  export let nextStepTitle = "Next";
  export let previousStepTitle = "Previous";
</script>

<div class="footer" style="height: {FOOTER_HEIGHT}">
  <div class="row justify-content-between">
    <div class="col align-items-center">
        {#if !isFirstStep}
          <button class="btn btn-primary">{previousStepTitle}</button>
        {/if}
      </div>
    <div class="col align-items-center">
      {#if !isLastStep}
      <button class="btn btn-primary button">{nextStepTitle}</button>
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
    margin: 10px;
    padding: 10px;
    background: black;
    height: 50%;
  }

</style>