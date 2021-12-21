<script lang="ts">
  import {getChainColors} from 'src/utils/colors'
  import {CHAINS} from 'src/utils/types'

  import Header from 'src/components/shared/layout/Header.svelte'
  import Footer from 'src/components/shared/layout/Footer.svelte'
  import FooterButton from 'src/components/shared/layout/FooterButton.svelte'

  import { CHAINS_CONFIG } from 'src/utils/constants';

  import {currentStep} from 'src/utils/store'

  let chainColors = getChainColors(CHAINS.SOLANA)
  let solanaChain = CHAINS_CONFIG[CHAINS.SOLANA]

  let title = "Solana"
  let step = 0;
	currentStep.subscribe(value => {
		step = value;
    title = solanaChain.steps[step].title
	});

</script>

<div class="row">
  <Header chainId="Solana" chainColors={chainColors}></Header>
  <Footer>
    <FooterButton slot="previous" title="<- Prev: Welcome to the Solana Pathway"
      background="white"></FooterButton>

    <FooterButton slot="next" title="Next: {title} ->"
        background="linear-gradient(253deg, #00FFA3,#DC1FFF)"></FooterButton>
  </Footer>  
</div>