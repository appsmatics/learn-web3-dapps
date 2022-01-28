<script>
  import {Connection, PublicKey, LAMPORTS_PER_SOL} from 'solanaWeb3';
  import {protocolState, stepState} from 'src/utils/store'
  import StepPanel from './StepPanel.svelte'

  export let step
  let message
  let hash
  const fundAddressClicked = () => {
    fundAddress()
  }

  const fundAddress = async () => {
    try {
      
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
      const address = $protocolState.address;
      const publicKey = new PublicKey(address);
      hash = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      message=`Airdropped 1 SOL to ${address}` 
      //console.log(hash)
    } catch (error) {
      let errorMessage = error instanceof Error ? error.message : 'Unknown Error';
      message = errorMessage
      // console.log(errorMessage)
    }
  }
</script>

<StepPanel completed={false}>
  <div slot="step-content">
<h4>{stepState.title}</h4>
  <div class="flex mt-4">
      <input type="text" class="form-control" id="funedAddress" placeholder="{$protocolState.address}">    
      <button class="btn btn-primary mx-3" on:click={fundAddressClicked}>Fund Address</button>
    <span class="alert alert-primary">
      {message}
    </span>
  </div>
  <div>
    Hash is: {hash}
  </div>
</div>
</StepPanel>