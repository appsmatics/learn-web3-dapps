<script>
//import axios from 'axios'
import {Connection} from 'solanaWeb3';
import StepPanel from './StepPanel.svelte'

export let stepState = null;

let alertMessage = "Not Connected to Solana Core!"
const connect = async () => {
  try {
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
    const version = await connection.getVersion();
    console.log(version)
    return (version['solana-core']);
  } catch (error) {
    let errorMessage = error instanceof Error ? error.message : 'Unknown Error';
    return (errorMessage);
  }
}

// import {connect} from 'src/api/solana/connect'

//https://jsonplaceholder.typicode.com/posts
//https://api.devnet.solana.com
const connectClicked = async () => {
  const version = await connect()
  console.log(version)
  alertMessage = `Solano Core version: ${version}`
}
</script>

<StepPanel completed={false}>
  <div slot="step-content">
    <div class="col">
      <h4>{stepState.currentStep.title}</h4>
    </div>
    <div class="col d-flex flex-row justify-content-end align-items-center">
      <!-- <div class="row"> -->
        <div class="alert alert-primary mx-4">
          {alertMessage}
        </div>
        <button class="btn btn-primary" on:click={connectClicked}>
          Connect <i class="fas fa-power-off"></i>
        </button>
      <!-- </div> -->
    </div>
  </div>
</StepPanel>

<style>
</style>