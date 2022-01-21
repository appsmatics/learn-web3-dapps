<script lang="ts">

  import {CHAINS, PROTOCOL_STEPS_ID} from 'src/utils/types'
  import {CHAINS_CONFIG} from 'src/utils/config'

  import Layout from 'src/components/shared/layout/Layout.svelte'
  import {currentChain, appState} from 'src/utils/store'

  import Connect from './Connect.svelte'

  $currentChain = CHAINS_CONFIG[CHAINS.SOLANA]

</script>

<Layout>
  <h1 slot="left-panel">{$appState.currentStep.title}</h1>
  <div slot="right-panel">
    {#if $appState.currentStep.id == PROTOCOL_STEPS_ID.CHAIN_CONNECTION}
      <Connect></Connect>
    {:else}
      <h3>Not implemented Step</h3>
    {/if}
  </div>
</Layout>


<!-- {stepId === PROTOCOL_STEPS_ID.CHAIN_CONNECTION && <Steps.Connect />}
{stepId === PROTOCOL_STEPS_ID.CREATE_ACCOUNT && <Steps.Keypair />}
{stepId === PROTOCOL_STEPS_ID.FUND_ACCOUNT && <Steps.Fund />}
{stepId === PROTOCOL_STEPS_ID.GET_BALANCE && <Steps.Balance />}
{stepId === PROTOCOL_STEPS_ID.TRANSFER_TOKEN && <Steps.Transfer />}
{stepId === PROTOCOL_STEPS_ID.DEPLOY_CONTRACT && <Steps.Deploy />}
{stepId === PROTOCOL_STEPS_ID.SOLANA_CREATE_GREETER && <Steps.Greeter />}
{stepId === PROTOCOL_STEPS_ID.GET_CONTRACT_VALUE && <Steps.Getter />}
{stepId === PROTOCOL_STEPS_ID.SET_CONTRACT_VALUE && <Steps.Setter />} -->
