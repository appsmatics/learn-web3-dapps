<script lang="ts">
  import {getChainColors} from 'src/utils/colors'
  import {CHAINS} from 'src/utils/types'
  import {HEADER_HEIGHT} from 'src/utils/constants';

  import Header from 'src/components/shared/layout/Header.svelte'
  import Footer from 'src/components/shared/layout/Footer.svelte'
  import FooterButton from 'src/components/shared/layout/FooterButton.svelte'

  import { CHAINS_CONFIG, hasPreviousStep, getPreviousStep, hasNextStep, getNextStep } from 'src/utils/constants';

  import {currentStep} from 'src/utils/store'


  let chainColors = getChainColors(CHAINS.SOLANA)
  let solanaChain = CHAINS_CONFIG[CHAINS.SOLANA]


  let currStep = 0;
  let currTitle = ""
  let previousTitle = ""
  let nextTitle = ""
	currentStep.subscribe(value => {
		currStep = value;
    currTitle = solanaChain.steps[currStep].title
	});

  let previous = () => {
    currentStep.update(n => n-1)
  }

  let next = () => {
    currentStep.update(n => n+1)
  }

  $: previousVisible = hasPreviousStep(CHAINS.SOLANA, currStep)
  $: nextVisible = hasNextStep(CHAINS.SOLANA, currStep)

  $: if (previousVisible) {
    let prev = getPreviousStep(CHAINS.SOLANA, currStep)
    previousTitle = solanaChain.steps[prev].title
  }

  $: if (nextVisible) {
    let next = getNextStep(CHAINS.SOLANA, currStep)
    nextTitle = solanaChain.steps[next].title
  }

</script>

  <Header chainId="Solana" chainColors={chainColors}></Header>
  <main class="" style="margin-top: {HEADER_HEIGHT}px">
    <div class="row" style="height: 100vh">
      <div class="col left-panel">
        <h1>{currTitle}</h1>
      </div>
      <div class="col right-panel">
          <button class="btn btn-primary">Connect</button>
          <div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
          <div>
            Not connected to Solana!
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer>
    <FooterButton slot="previous" title="<- Prev: {previousTitle}"
        background="white"
        visible={previousVisible}
        buttonClicked = {previous}
        >
      </FooterButton>
      <FooterButton slot="next" title="Next: {nextTitle} ->"
          background="linear-gradient(253deg, #00FFA3,#DC1FFF)"
          visible={nextVisible}
          buttonClicked = {next}
          >
      </FooterButton>
  </Footer>  

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

  h1 {
    /* margin-top: 10% */
  }
</style>