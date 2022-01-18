<script lang="ts">
    import {HEADER_HEIGHT} from 'src/utils/config';
    import {getChainColors} from 'src/utils/colors'

    import Header from 'src/components/shared/layout/Header.svelte'
    import Footer from 'src/components/shared/layout/Footer.svelte'
    
    import {appState, prev, next} from 'src/utils/store'

    const currentChain = $appState.currentChain
    const chainColors = getChainColors(currentChain.id)   
  </script>
  
    <Header chainId={currentChain.id} chainColors={chainColors}></Header>
    <main class="" style="margin-top: {HEADER_HEIGHT}px">
      <div class="row" style="height: 100vh">
        <div class="col left-panel">
          <slot name="left-panel">Left Panel</slot>
        </div>
        <div class="col right-panel">
          <slot name="right-panel">Right Panel</slot>
        </div>
      </div>
    </main>
    <Footer isFirstStep={$appState.isFirstStep} isLastStep={$appState.isLastStep}
      chainColors={chainColors} prev={prev} next={next}/>  
  
  <style>
    .left-panel {
      position: relative;
      padding: 40px;
      background: #f5f5f5;
      overflow: scroll;
      height: calc(100vh-170px);
    }
  
    .right-panel {
      overflow: scroll;
      height: calc(100vh - 170px);
      padding: 120px 60px 20px 60px;
    }
  </style>