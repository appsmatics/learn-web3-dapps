<script lang="ts">

  import {CHAIN, PROTOCOL_STEP_ID} from 'src/utils/types'
  import {CHAINS_CONFIG} from 'src/utils/config'

  import Layout from 'src/components/shared/layout/Layout.svelte'
  import {currentProtocol, stepState} from 'src/utils/store'

  import Connect from './Connect.svelte'
  import Keypair from './Keypair.svelte'
  import Fund from './Fund.svelte'

  $currentProtocol = CHAINS_CONFIG[CHAIN.SOLANA]

</script>

<Layout>
  <h1 slot="left-panel">{$stepState.currentStep.title}</h1>
  <div slot="proto-panel">
      <Connect stepState={$stepState}></Connect>
      <Keypair step={$stepState.currentStep}></Keypair>
      <Fund step={$stepState.currentStep}></Fund>
  </div>
</Layout>


<!-- {stepId === PROTOCOL_STEP_ID.CHAIN_CONNECTION && <Steps.Connect />}
{stepId === PROTOCOL_STEP_ID.CREATE_ACCOUNT && <Steps.Keypair />}
{stepId === PROTOCOL_STEP_ID.FUND_ACCOUNT && <Steps.Fund />}
{stepId === PROTOCOL_STEP_ID.GET_BALANCE && <Steps.Balance />}
{stepId === PROTOCOL_STEP_ID.TRANSFER_TOKEN && <Steps.Transfer />}
{stepId === PROTOCOL_STEP_ID.DEPLOY_CONTRACT && <Steps.Deploy />}
{stepId === PROTOCOL_STEP_ID.SOLANA_CREATE_GREETER && <Steps.Greeter />}
{stepId === PROTOCOL_STEP_ID.GET_CONTRACT_VALUE && <Steps.Getter />}
{stepId === PROTOCOL_STEP_ID.SET_CONTRACT_VALUE && <Steps.Setter />} -->
