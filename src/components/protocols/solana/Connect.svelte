<script>
//import axios from 'axios'
import {Connection} from 'solanaWeb3';

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
}

</script>

<div>
  <h2>Connect to Solana</h2>
  <div class="flex mt-4">
    <button class="btn btn-primary mx-3" on:click={connectClicked}>
      <i class="fas fa-power-off"></i>
    </button>
    <span class="alert alert-primary">
      Not Connected !
    </span>
  </div>
</div>