<script lang="ts">
  import {getChainColors} from 'src/utils/colors'
  import {CHAINS} from 'src/utils/types'

  import Header from 'src/components/shared/layout/Header.svelte'
  import Footer from 'src/components/shared/layout/Footer.svelte'
  import FooterButton from 'src/components/shared/layout/FooterButton.svelte'

  import { CHAINS_CONFIG, hasPreviousStep ,hasNextStep } from 'src/utils/constants';

  import {currentStep} from 'src/utils/store'

  let chainColors = getChainColors(CHAINS.SOLANA)
  let solanaChain = CHAINS_CONFIG[CHAINS.SOLANA]

  let title = "solanaChain.label"
  let previousTitle = "previous Title"
  let step = 0;
	currentStep.subscribe(value => {
		step = value;
    title = solanaChain.steps[step].title
    previousTitle = (step >=1)?solanaChain.steps[step-1].title:""
	});

  let previous = () => {
    currentStep.update(n => n-1)
  }

  let next = () => {
    currentStep.update(n => n+1)
  }

  $: previousVisible = hasPreviousStep(CHAINS.SOLANA, step)
  $: nextVisible = hasNextStep(CHAINS.SOLANA, step)

</script>

<div class="row">
  <Header chainId="Solana" chainColors={chainColors}></Header>
  <Footer>
    <FooterButton slot="previous" title="<- Prev: {previousTitle}"
        background="white"
        visible={previousVisible}
        buttonClicked = {previous}
        >
      </FooterButton>
      <FooterButton slot="next" title="Next: {title} ->"
          background="linear-gradient(253deg, #00FFA3,#DC1FFF)"
          visible={nextVisible}
          buttonClicked = {next}
          >
      </FooterButton>
  </Footer>  
</div>