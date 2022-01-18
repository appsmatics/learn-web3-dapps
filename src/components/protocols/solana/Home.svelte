<script lang="ts">

  import {CHAINS} from 'src/utils/types'
  import {CHAINS_CONFIG} from 'src/utils/config'

  import Layout from 'src/components/shared/layout/Layout.svelte'
  import {currentChain, appState} from 'src/utils/store'

  $currentChain = CHAINS_CONFIG[CHAINS.SOLANA]
</script>

<Layout>
  <h1 slot="left-panel">{$appState.currentStep.id}</h1>
  <h2 slot="right-panel">{$appState.currentStep.id}</h2>
</Layout>
