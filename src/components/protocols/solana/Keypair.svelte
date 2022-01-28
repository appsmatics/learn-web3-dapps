<script>
  import {Keypair} from 'solanaWeb3';
  import {protocolState} from 'src/utils/store'
  import StepPanel from './StepPanel.svelte'

  export let step=null
  let message
  const createKeypairClicked = () => {
    createKeyPair()
  }

  const createKeyPair = () => {
    try {
      const keypair = new Keypair();
      const address = keypair.publicKey.toString();
      const secret = JSON.stringify(Array.from(keypair.secretKey));
      // const secret = keypair.secretKey.toString();
      
      $protocolState.secret = secret
      $protocolState.address = address
      console.log( {
        secret,
        address,
      })
      message="Keypair created"
    } catch (error) {
      let errorMessage = error instanceof Error ? error.message : 'Unknown Error';
      // console.log(errorMessage)
      message=errorMessage
    }
  }
</script>

<StepPanel completed={step.completed}>
  <div slot="step-content">
  <h4>{step.title}</h4>
  <div class="flex mt-4">
    <button class="btn btn-primary mx-3" on:click={createKeypairClicked}>
      <i class="fas fa-power-off"></i>
    </button>
    <span class="alert alert-primary">
      {message}
    </span>
  </div>
</div>
</StepPanel>