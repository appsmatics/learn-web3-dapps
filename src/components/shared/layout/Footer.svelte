<script lang="ts">
  import {FOOTER_HEIGHT} from 'src/utils/config';
  import FooterButton from './FooterButton.svelte'

  export let isFirstStep = true
  export let isLastStep = false
  export let chainColors
  export let prev = null
  export let next = null
  export let justify = 'end'
  export let previousTitle
  export let nextTitle
</script>

<div class="footer" style="height: {FOOTER_HEIGHT}">
  <div class="d-flex align-items-center {justify}">
    <FooterButton title="<- {previousTitle}"
        background="white"
        visible={!isFirstStep}
        buttonClicked = {prev}
        >
      </FooterButton>
      <FooterButton slot="next" title="{nextTitle} ->"
          background="linear-gradient(253deg, #00FFA3,#DC1FFF)"
          visible={!isLastStep}
          buttonClicked = {next}
          >
      </FooterButton>
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