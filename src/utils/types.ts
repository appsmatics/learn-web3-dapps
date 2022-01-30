export enum CHAIN {
  ARWEAVE = 'arweave',
  AVALANCHE = 'avalanche',
  CELO = 'celo',
  CERAMIC = 'ceramic',
  NEAR = 'near',
  POLYGON = 'polygon',
  POLKADOT = 'polkadot',
  SECRET = 'secret',
  SOLANA = 'solana',
  TEZOS = 'tezos',
  THE_GRAPH = 'the_graph',
}

// Protocol's Enum
export type PROTOCOL =
  | POLYGON_PROTOCOL
  | SOLANA_PROTOCOL
  | POLKADOT_PROTOCOL
  | AVALANCHE_PROTOCOL
  | SECRET_PROTOCOL
  | NEAR_PROTOCOL
  | CELO_PROTOCOL
  | TEZOS_PROTOCOL
  | CERAMIC_PROTOCOL
  | THE_GRAPH_PROTOCOL
  | ARWEAVE_PROTOCOL;

export enum THE_GRAPH_PROTOCOL {
  GRAPHQL = 'GRAPHQL',
}

export enum AVALANCHE_PROTOCOL {
  RPC = 'RPC',
}

export enum CELO_PROTOCOL {
  RPC = 'RPC',
}

export enum SECRET_PROTOCOL {
  RPC = 'RPC',
  LCD = 'LCD',
}

export enum NEAR_PROTOCOL {
  RPC = 'RPC',
}

export enum TEZOS_PROTOCOL {
  RPC = 'RPC',
}

export enum POLYGON_PROTOCOL {
  RPC = 'RPC',
  JSON_RPC = 'JSON_RPC',
  WS = 'WS',
}

export enum POLKADOT_PROTOCOL {
  RPC = 'RPC',
  WS = 'WS',
}

export enum SOLANA_PROTOCOL {
  RPC = 'RPC',
  WS = 'WS',
}

export enum ARWEAVE_PROTOCOL {
  RPC = 'RPC',
}

// BlockChain Providers -----------------------
export enum CHAIN_PROVIDERS {
  DATAHUB = 'DATAHUB',
  ALCHEMY = 'ALCHEMY',
  INFURA = 'INFURA',
  PUBLIC = 'PUBLIC',
  LOCAL = 'LOCAL',
}

// NETWORKS ----------------------
export enum AVALANCHE_NETWORK {
  MAINNET = 'MAINNET',
  FUJI = 'FUJI',
  DATAHUB = 'datahub',
}

export enum CELO_NETWORK {
  MAINNET = 'MAINNET',
  ALFAJORES = 'alfajores',
}

export enum SECRET_NETWORK {
  MAINNET = 'MAINNET',
  TESTNET = 'HOLODECK-2',
}

export enum NEAR_NETWORK {
  MAINNET = 'MAINNET',
  TESTNET = 'TESTNET',
  DATAHUB = 'datahub',
}

export enum TEZOS_NETWORK {
  MAINNET = 'MAINNET',
  TESTNET = 'TESTNET',
}

export enum POLKADOT_NETWORK {
  WESTEND = 'WESTEND',
  MAINNET = 'MAINNET',
}

export enum POLYGON_NETWORK {
  MAINNET = 'MAINNET',
  TESTNET = 'TESTNET',
}

export enum SOLANA_NETWORK {
  MAINNET = 'MAINNET',
  DEVNET = 'devnet',
  DATAHUB = 'datahub',
  LOCALNET = 'localnet',
}

export enum CERAMIC_NETWORK {
  TESTNET = 'TESTNET',
}

export enum CERAMIC_PROTOCOL {
  HTTP = 'HTTP',
}

export enum THE_GRAPH_NETWORK {
  LOCALNET = 'localnet',
  STUDIO = 'studio',
}

export enum ARWEAVE_NETWORK {
  MAINNET = 'mainnet',
}

// -----------------------------

export type NETWORK =
  | POLYGON_NETWORK
  | AVALANCHE_NETWORK
  | SOLANA_NETWORK
  | POLKADOT_NETWORK
  | NEAR_NETWORK
  | SECRET_NETWORK
  | CELO_NETWORK
  | TEZOS_NETWORK
  | THE_GRAPH_NETWORK
  | CERAMIC_NETWORK
  | TEZOS_NETWORK
  | ARWEAVE_NETWORK;

// ---------------------------------------------------
export type ChainType = {
  id: CHAIN;
  label: string;
  active: boolean;
  logoUrl: string;
  steps: StepType[];
  protocol: PROTOCOL;
  network: NETWORK;
};

export type ChainColorsType = {
  primaryColor: string;
  secondaryColor: string;
};

export type ChainsType = {
  [key in CHAIN]: ChainType;
};

export type StepType = {
  id: PROTOCOL_STEP_ID;
  title: string;
  skippable?: boolean;
  isOneColumn?: boolean;
  isComplete?: boolean;
};

export enum UserActivity {
  PROTOCOL_CLICKED = 'PROTOCOL_CLICKED',
  TUTORIAL_STEP_VIEWED = 'TUTORIAL_STEP_VIEWED',
  STORAGE_CLEARED = 'STORAGE_CLEARED',
}

export type MarkdownForChainIdT = {
  [key in PROTOCOL_STEP_ID]: string;
};

//-----------------------------------------------------------
// Global's State
export type GlobalStateT = {
  currentProtocolId?: CHAIN;
  protocols: ProtocolsStateT;
};

export type ProtocolsStateT = {
  [Key in CHAIN]: protocolStateT;
};

export type protocolStateT = {
  id: CHAIN;
  label: string;
  logoUrl: string;
  network: NETWORK;
  protocol: PROTOCOL;
  isActive: boolean;
  // numberOfSteps
  numberOfStep: number;
  currentStepId: PROTOCOL_STEP_ID;
  firstStepId: PROTOCOL_STEP_ID;
  lastStepId: PROTOCOL_STEP_ID;
  steps: ProtocolStepsT;
  innerState?: InnerStateT;
};

export type ProtocolStepT = {
  id: PROTOCOL_STEP_ID;
  title: string;
  isVisited: boolean;
  isSkippable: boolean;
  isOneColumn: boolean;
  isCompleted: boolean;
  previousStepId: PROTOCOL_STEP_ID | null;
  nextStepId: PROTOCOL_STEP_ID | null;
  position: number;
};

export type ProtocolStepsT = {
  [Key in PROTOCOL_STEP_ID]: ProtocolStepT;
};

export type InnerStateT = {
  [Key in PROTOCOL_INNER_STATE_ID]?: string | null;
};

export type LocalStorageStateT = {
  [Key in CHAIN]: LocalStorageprotocolStateT;
};

export type LocalStorageprotocolStateT = {
  currentStepId: PROTOCOL_STEP_ID;
  innerState?: InnerStateT;
};

export enum PROTOCOL_INNER_STATE_ID {
  SECRET = 'SECRET',
  PRIVATE_KEY = 'PRIVATE_KEY',
  PUBLIC_KEY = 'PUBLIC_KEY',
  ADDRESS = 'ADDRESS',
  CONTRACT_ID = 'CONTRACT_ID',
  MNEMONIC = 'MNEMONIC',
  ACCOUNT_ID = 'ACCOUNT_ID',
  PASSWORD = 'PASSWORD',
  EMAIL = 'EMAIL',
  PROGRAM_ID = 'PROGRAM_ID',
  GREETER = 'GREETER',
  METAMASK_NETWORK_NAME = 'METAMASK_NETWORK_NAME',
  DID = 'DID',
  USER_NAME = 'USER_NAME',
}

export enum PROTOCOL_STEP_ID {
  PREFACE = 'PREFACE',
  EXPORT_TOKEN = 'EXPORT_TOKEN',
  IMPORT_TOKEN = 'IMPORT_TOKEN',
  SWAP_TOKEN = 'SWAP_TOKEN',
  CREATE_KEYPAIR = 'CREATE_KEYPAIR',
  ESTIMATE_FEES = 'ESTIMATE_FEES',
  ESTIMATE_DEPOSIT = 'ESTIMATE_DEPOSIT',
  QUERY_CHAIN = 'QUERY_CHAIN',
  RESTORE_ACCOUNT = 'RESTORE_ACCOUNT',
  FUND_ACCOUNT = 'FUND_ACCOUNT',
  GET_BALANCE = 'GET_BALANCE',
  TRANSFER_TOKEN = 'TRANSFER_TOKEN',
  SOLANA_CREATE_GREETER = 'SOLANA_CREATE_GREETER',
  PROJECT_SETUP = 'PROJECT_SETUP',
  CHAIN_CONNECTION = 'CHAIN_CONNECTION',
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  DEPLOY_CONTRACT = 'DEPLOY_CONTRACT',
  GET_CONTRACT_VALUE = 'GET_CONTRACT_VALUE',
  SET_CONTRACT_VALUE = 'SET_CONTRACT_VALUE',
  INTRO = 'INTRO',
  LOGIN = 'LOGIN',
  BASIC_PROFILE = 'BASIC_PROFILE',
  CUSTOM_DEFINITION = 'CUSTOM_DEFINITION',
  GRAPH_NODE = 'GRAPH_NODE',
  SUBGRAPH_SCAFFOLD = 'SUBGRAPH_SCAFFOLD',
  SUBGRAPH_MANIFEST = 'SUBGRAPH_MANIFEST',
  SUBGRAPH_QUERY = 'SUBGRAPH_QUERY',
  SUBGRAPH_SCHEMA = 'SUBGRAPH_SCHEMA',
  SUBGRAPH_MAPPINGS = 'SUBGRAPH_MAPPINGS',
}
