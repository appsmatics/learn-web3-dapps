
// import {Connection} from '@solana/web3.js';

// The above import {Connection} from '@solana/web3.js';
// will work only on the server on the browser use 
// import {Connection} from 'solanaWeb3';


// const connect = async () => {
//   try {
//     const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
//     const version = await connection.getVersion();
//     console.log(version)
//     return (version['solana-core']);
//   } catch (error) {
//     let errorMessage = error instanceof Error ? error.message : 'Unknown Error';
//     return (errorMessage);
//   }
// }