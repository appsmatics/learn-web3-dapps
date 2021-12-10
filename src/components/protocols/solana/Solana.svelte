<script lang="ts">
  import {themeColors, getChainColors} from 'src/utils/colors'
  import {CHAINS} from 'src/utils/types'

  import Header from 'src/components/shared/layout/Header.svelte'
  import Footer from 'src/components/shared/layout/Footer.svelte'
import { getChainsList } from 'src/utils/constants';

  const chainColors = getChainColors(CHAINS.SOLANA)
  const solanaChain = getChainsList()[CHAINS.SOLANA]
</script>

<div class="row">
  <Header chainId="Solana" chainColors={chainColors} themeColors={themeColors}></Header>
  <Footer></Footer>  
</div>


<style>
</style>