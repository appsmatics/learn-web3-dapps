<script lang="ts">
  import {FOOTER_HEIGHT} from 'src/utils/constants';

  //export let chain;
  export let isFirstStep = false;
  export let isLastStep = false;
</script>

<div class="footer" style="height: {FOOTER_HEIGHT}">
  <div class="d-flex align-items-center justify-content-between">
    <div class="">
        {#if !isFirstStep}
          <slot name="previous"><span>Previous button</span></slot>     
        {/if}
      </div>
    <div class="">
      {#if !isLastStep}
        <slot name="next"><span>Next button</span></slot>
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
</style>