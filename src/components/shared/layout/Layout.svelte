<script lang="ts">
  import {HEADER_HEIGHT} from 'src/utils/config';
  import {getChainColors} from 'src/utils/colors'

  import Header from 'src/components/shared/layout/Header.svelte'
  import Footer from 'src/components/shared/layout/Footer.svelte'
  import ProtocolHeader from './ProtocolHeader.svelte';

  import {stepState, protocolState, prev, next} from 'src/utils/store'

  const currentProtocol = $stepState.currentProtocol
  const chainColors = getChainColors(currentProtocol.id) 
</script>

<Header chainId={currentProtocol.id} chainColors={chainColors}></Header>
<main class="" style="margin-top: {HEADER_HEIGHT}px">
  <ProtocolHeader network={"DEVNET"} address={$protocolState.address}></ProtocolHeader>
  <div class="container">
      <!-- <div class="proto-panel"> -->
        <slot name="proto-panel">Proto Panel</slot>
      <!-- </div> -->
  </div>
</main>
<Footer isFirstStep={$stepState.isFirstStep} isLastStep={$stepState.isLastStep}
  chainColors={chainColors} 
  previousTitle={$stepState.previousTitle} nextTitle={$stepState.nextTitle} justify={$stepState.justify}
  prev={prev} next={next}/>  

<style>

</style>