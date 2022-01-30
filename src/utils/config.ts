import {
  ChainType,
  ChainsType,
  CHAIN,
  PROTOCOL_STEP_ID,
  POLYGON_PROTOCOL,
  AVALANCHE_PROTOCOL,
  AVALANCHE_NETWORK,
  CELO_PROTOCOL,
  CELO_NETWORK,
  POLYGON_NETWORK,
  NEAR_NETWORK,
  NEAR_PROTOCOL,
  SECRET_PROTOCOL,
  SECRET_NETWORK,
  TEZOS_NETWORK,
  TEZOS_PROTOCOL,
  SOLANA_PROTOCOL,
  SOLANA_NETWORK,
  POLKADOT_NETWORK,
  CERAMIC_PROTOCOL,
  CERAMIC_NETWORK,
  THE_GRAPH_PROTOCOL,
  THE_GRAPH_NETWORK,
  ARWEAVE_PROTOCOL,
  ARWEAVE_NETWORK,
} from './types';

export const GRID_LAYOUT = [13, 11];
export const HEADER_HEIGHT = 80;
export const FOOTER_HEIGHT = 100;

export const CHAINS_CONFIG: ChainsType = {
  [CHAIN.SOLANA]: {
    id: CHAIN.SOLANA,
    label: 'Solana',
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=010',
    protocol: SOLANA_PROTOCOL.RPC,
    network: SOLANA_NETWORK.DEVNET,
    active: true,
    steps: [
      //TODO: each step being worked on is temporarily first step
      // {
      //   id: PROTOCOL_STEP_ID.PREFACE,
      //   title: 'Welcome to the Solana Pathway',
      //   isOneColumn: true,
      // },
      // {
      //   id: PROTOCOL_STEP_ID.PROJECT_SETUP,
      //   title: 'Setup the project',
      //   isOneColumn: true,
      // },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to Solana',
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_ACCOUNT,
        title: 'Create an account',
      },
      {
        id: PROTOCOL_STEP_ID.FUND_ACCOUNT,
        title: 'Fund the account with SOL',
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Get the balance',
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some SOL',
      },
      {
        id: PROTOCOL_STEP_ID.DEPLOY_CONTRACT,
        title: 'Deploy a program',
      },
      {
        id: PROTOCOL_STEP_ID.SOLANA_CREATE_GREETER,
        title: 'Create storage for the program',
      },
      {
        id: PROTOCOL_STEP_ID.GET_CONTRACT_VALUE,
        title: 'Get data from the program',
      },
      {
        id: PROTOCOL_STEP_ID.SET_CONTRACT_VALUE,
        title: 'Send data to the program',
      },
    ],
  },
  // [CHAIN.SOLANA]: {
  //   id: CHAIN.SOLANA,
  //   label: 'Solana',
  //   logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=010',
  //   protocol: SOLANA_PROTOCOL.RPC,
  //   network: SOLANA_NETWORK.DEVNET,
  //   active: true,
  //   steps: [
  //     {
  //       id: PROTOCOL_STEP_ID.PREFACE,
  //       title: 'Welcome to the Solana Pathway',
  //       isOneColumn: true,
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.PROJECT_SETUP,
  //       title: 'Setup the project',
  //       isOneColumn: true,
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
  //       title: 'Connect to Solana',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.CREATE_ACCOUNT,
  //       title: 'Create an account',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.FUND_ACCOUNT,
  //       title: 'Fund the account with SOL',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.GET_BALANCE,
  //       title: 'Get the balance',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
  //       title: 'Transfer some SOL',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.DEPLOY_CONTRACT,
  //       title: 'Deploy a program',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.SOLANA_CREATE_GREETER,
  //       title: 'Create storage for the program',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.GET_CONTRACT_VALUE,
  //       title: 'Get data from the program',
  //     },
  //     {
  //       id: PROTOCOL_STEP_ID.SET_CONTRACT_VALUE,
  //       title: 'Send data to the program',
  //     },
  //   ],
  // },
  [CHAIN.AVALANCHE]: {
    id: CHAIN.AVALANCHE,
    label: 'Avalanche',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=010',
    protocol: AVALANCHE_PROTOCOL.RPC,
    network: AVALANCHE_NETWORK.DATAHUB,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the Avalanche Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Setup the project',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to Avalanche',
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_KEYPAIR,
        title: 'Create a keypair',
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Get the balance',
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some AVAX',
      },
      {
        id: PROTOCOL_STEP_ID.EXPORT_TOKEN,
        title: 'Export tokens from X-Chain to C-Chain',
      },
      {
        id: PROTOCOL_STEP_ID.IMPORT_TOKEN,
        title: 'Import tokens from X-Chain to C-Chain',
      },
    ],
  },
  [CHAIN.CELO]: {
    id: CHAIN.CELO,
    label: 'Celo',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/celo-celo-logo.svg?v=010',
    protocol: CELO_PROTOCOL.RPC,
    network: CELO_NETWORK.ALFAJORES,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the Celo Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Setup the project',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to Celo',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_ACCOUNT,
        title: 'Create an account',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Get the balance',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some tokens',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.SWAP_TOKEN,
        title: 'Swap cUSD to CELO',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.DEPLOY_CONTRACT,
        title: 'Deploy a smart contract',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.GET_CONTRACT_VALUE,
        title: 'Get the storage of a smart contract',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.SET_CONTRACT_VALUE,
        title: 'Set the storage of a smart contract',
        skippable: true,
      },
    ],
  },
  [CHAIN.NEAR]: {
    id: CHAIN.NEAR,
    label: 'NEAR',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=010',
    protocol: NEAR_PROTOCOL.RPC,
    network: NEAR_NETWORK.DATAHUB,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the NEAR Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Setup the project',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to NEAR',
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_KEYPAIR,
        title: 'Generate a keypair',
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_ACCOUNT,
        title: 'Create an account',
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Get account balance',
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some NEAR',
      },
      {
        id: PROTOCOL_STEP_ID.DEPLOY_CONTRACT,
        title: 'Deploy a contract',
      },
      {
        id: PROTOCOL_STEP_ID.GET_CONTRACT_VALUE,
        title: 'Get the storage of a smart contract',
      },
      {
        id: PROTOCOL_STEP_ID.SET_CONTRACT_VALUE,
        title: 'Set the storage of a smart contract',
      },
    ],
  },
  [CHAIN.POLKADOT]: {
    id: CHAIN.POLKADOT,
    label: 'Polkadot',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=010',
    protocol: POLYGON_PROTOCOL.WS,
    network: POLKADOT_NETWORK.WESTEND,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the Polkadot Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Setup the project',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to Polkadot',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_ACCOUNT,
        title: 'Create an account',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.RESTORE_ACCOUNT,
        title: 'Restore an account',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.ESTIMATE_FEES,
        title: 'Estimate transaction fees',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Get the balance',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.ESTIMATE_DEPOSIT,
        title: 'Existential deposit',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some tokens',
        skippable: true,
      },
    ],
  },
  [CHAIN.POLYGON]: {
    id: CHAIN.POLYGON,
    label: 'Polygon',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=010',
    protocol: POLYGON_PROTOCOL.RPC,
    network: POLYGON_NETWORK.TESTNET,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the Polygon Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Setup the project',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to Polygon',
      },
      {
        id: PROTOCOL_STEP_ID.QUERY_CHAIN,
        title: 'Query Polygon',
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Fund a Polygon account',
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some MATIC',
      },
      {
        id: PROTOCOL_STEP_ID.DEPLOY_CONTRACT,
        title: 'Deploy a Solidity smart contract',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.SET_CONTRACT_VALUE,
        title: 'Set the storage of the contract',
      },
      {
        id: PROTOCOL_STEP_ID.GET_CONTRACT_VALUE,
        title: 'Get the storage of the contract',
      },
      {
        id: PROTOCOL_STEP_ID.RESTORE_ACCOUNT,
        title: 'Restore your account',
      },
    ],
  },
  [CHAIN.SECRET]: {
    id: CHAIN.SECRET,
    label: 'Secret',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/secret-scrt-logo.svg?v=010',
    protocol: SECRET_PROTOCOL.RPC,
    network: SECRET_NETWORK.TESTNET,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the Secret Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Setup the project',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to Secret',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_ACCOUNT,
        title: 'Create an account',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Get the balance',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some SCRT',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.DEPLOY_CONTRACT,
        title: 'Deploy a smart contract',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.GET_CONTRACT_VALUE,
        title: 'Get the storage of a smart contract',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.SET_CONTRACT_VALUE,
        title: 'Set the storage of a smart contract',
        skippable: true,
      },
    ],
  },
  [CHAIN.TEZOS]: {
    id: CHAIN.TEZOS,
    label: 'Tezos',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/tezos-xtz-logo.svg?v=010',
    protocol: TEZOS_PROTOCOL.RPC,
    network: TEZOS_NETWORK.TESTNET,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the Tezos Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Setup the project',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect to Tezos',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.CREATE_ACCOUNT,
        title: 'Create an account',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.GET_BALANCE,
        title: 'Get the balance',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.TRANSFER_TOKEN,
        title: 'Transfer some TEZ',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.DEPLOY_CONTRACT,
        title: 'Deploy a smart contract',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.GET_CONTRACT_VALUE,
        title: 'Get the storage of a smart contract',
        skippable: true,
      },
      {
        id: PROTOCOL_STEP_ID.SET_CONTRACT_VALUE,
        title: 'Set the storage of a smart contract',
        skippable: true,
      },
    ],
  },
  [CHAIN.CERAMIC]: {
    id: CHAIN.CERAMIC,
    label: 'Ceramic',
    active: true,
    logoUrl: 'https://developers.ceramic.network/images/ceramic-no-shadow.png',
    protocol: CERAMIC_PROTOCOL.HTTP,
    network: CERAMIC_NETWORK.TESTNET,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the Ceramic Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Introduction',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.CHAIN_CONNECTION,
        title: 'Connect with MetaMask',
      },
      {
        id: PROTOCOL_STEP_ID.LOGIN,
        title: 'Login with IDX',
      },
      {
        id: PROTOCOL_STEP_ID.BASIC_PROFILE,
        title: 'Update and read your profile',
      },
      {
        id: PROTOCOL_STEP_ID.CUSTOM_DEFINITION,
        title: 'Deploy and use custom definition',
      },
    ],
  },
  [CHAIN.THE_GRAPH]: {
    id: CHAIN.THE_GRAPH,
    label: 'The Graph',
    active: true,
    logoUrl: 'https://cryptologos.cc/logos/the-graph-grt-logo.svg?v=013',
    protocol: THE_GRAPH_PROTOCOL.GRAPHQL,
    network: THE_GRAPH_NETWORK.LOCALNET,
    steps: [
      {
        id: PROTOCOL_STEP_ID.PREFACE,
        title: 'Welcome to the The Graph Pathway',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.PROJECT_SETUP,
        title: 'Introduction',
        isOneColumn: true,
      },
      {
        id: PROTOCOL_STEP_ID.GRAPH_NODE,
        title: 'Run a local Graph node',
      },
      {
        id: PROTOCOL_STEP_ID.SUBGRAPH_SCAFFOLD,
        title: 'Create a subgraph scaffold',
      },
      {
        id: PROTOCOL_STEP_ID.SUBGRAPH_MANIFEST,
        title: 'Tweak the Manifest',
      },
      {
        id: PROTOCOL_STEP_ID.SUBGRAPH_SCHEMA,
        title: 'Define the schema',
      },
      {
        id: PROTOCOL_STEP_ID.SUBGRAPH_MAPPINGS,
        title: 'Implement the mappings',
      },
      {
        id: PROTOCOL_STEP_ID.SUBGRAPH_QUERY,
        title: 'Query the subgraph',
      },
    ],
  },
  [CHAIN.ARWEAVE]: {
    id: CHAIN.ARWEAVE,
    label: 'Arweave',
    active: false,
    logoUrl: 'https://cryptologos.cc/logos/arweave-ar-logo.svg?v=014',
    protocol: ARWEAVE_PROTOCOL.RPC,
    network: ARWEAVE_NETWORK.MAINNET,
    steps: [],
  },
};

export const getDataIndexingItems = () : ChainType[] => {
  return [CHAINS_CONFIG[CHAIN.THE_GRAPH]]
}

export const getIdentityItems = () : ChainType[] => {
  return [CHAINS_CONFIG[CHAIN.CERAMIC]]
}

export const getStorageItems = () : ChainType[] => {
  return [CHAINS_CONFIG[CHAIN.ARWEAVE]]
}

export const getChainsList = () : ChainType[] => {
  return [
    CHAINS_CONFIG[CHAIN.SOLANA], 
    CHAINS_CONFIG[CHAIN.AVALANCHE],
    CHAINS_CONFIG[CHAIN.POLYGON],
    CHAINS_CONFIG[CHAIN.NEAR],
    CHAINS_CONFIG[CHAIN.POLKADOT],
    CHAINS_CONFIG[CHAIN.TEZOS],
    CHAINS_CONFIG[CHAIN.SECRET],
    CHAINS_CONFIG[CHAIN.CELO],
  ]
}