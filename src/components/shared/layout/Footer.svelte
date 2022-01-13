<script lang="ts">
  import {FOOTER_HEIGHT} from 'src/utils/config';
  



</script>

<div class="footer" style="height: {FOOTER_HEIGHT}">
  <div class="d-flex align-items-center justify-content-between">
    <div>
      <slot name="previous"><span></span></slot>     
    </div>
    <div>
        <slot name="next"><span></span></slot>
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