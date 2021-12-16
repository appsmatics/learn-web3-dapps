<script lang="ts">
  import {themeColors, getChainColors} from 'src/utils/colors'
  import {CHAINS} from 'src/utils/types'

  import Header from 'src/components/shared/layout/Header.svelte'
  import Footer from 'src/components/shared/layout/Footer.svelte'
  import FooterButton from 'src/components/shared/layout/FooterButton.svelte'

import { getChainsList } from 'src/utils/constants';

  const chainColors = getChainColors(CHAINS.SOLANA)
  const solanaChain = getChainsList()[CHAINS.SOLANA]
</script>

<div class="row">
  <Header chainId="Solana" chainColors={chainColors} themeColors={themeColors}></Header>
  <Footer>
    <FooterButton slot="previous" title="<- Previous: Welcome to the Solana Pathway"
      background="white"></FooterButton>

    <FooterButton slot="next" title="Next: Setup the Project ->"
        background="linear-gradient(253deg, #00FFA3,#DC1FFF)"></FooterButton>
  </Footer>  
</div>