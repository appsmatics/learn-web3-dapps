import {CHAIN} from './types';
import type {ChainColorsType} from './types'

export const getChainColors = (chainId: CHAIN): ChainColorsType => {
  return {
    primaryColor: getPrimaryColor(chainId),
    secondaryColor: getSecondaryColor(chainId),
  };
};

const getPrimaryColor = (chainId: CHAIN) => {
  if (chainId === CHAIN.SOLANA) {
    return 'linear-gradient(253deg, #00FFA3, #DC1FFF)';
  } else if (chainId === CHAIN.AVALANCHE) {
    return '#e84141';
  } else if (chainId === CHAIN.THE_GRAPH) {
    return 'linear-gradient(130deg, #5943d0, #151324)';
  } else if (chainId === CHAIN.POLYGON) {
    return '#966ae0';
  } else if (chainId === CHAIN.POLKADOT) {
    return '#e6007a';
  } else if (chainId === CHAIN.TEZOS) {
    return '#0f62ff';
  } else if (chainId === CHAIN.CELO) {
    return 'linear-gradient(253deg, rgb(251, 204, 92), rgb(53,208,127))';
  } else if (chainId === CHAIN.NEAR) {
    return 'linear-gradient(253deg, #00c1de, #00c08b)';
  } else if (chainId === CHAIN.SECRET) {
    return 'black';
  } else if (chainId === CHAIN.CERAMIC) {
    return '#f87236';
  }
  return 'rgb(255, 242, 155)';
};

const getSecondaryColor = (chainId: CHAIN) => {
  return 'white'
}

const getSecondaryColorOrig = (chainId: CHAIN) => {
  if (chainId === CHAIN.SOLANA) {
    return 'white';
  } else if (chainId === CHAIN.AVALANCHE) {
    return '#F6F6F6';
  } else if (chainId === CHAIN.THE_GRAPH) {
    return '#F6F6F6';
  } else if (chainId === CHAIN.POLYGON) {
    return '#F6F6F6';
  } else if (chainId === CHAIN.POLKADOT) {
    return '#F6F6F6';
  } else if (chainId === CHAIN.TEZOS) {
    return '#F6F6F6';
  } else if (chainId === CHAIN.SECRET) {
    return 'white';
  } else if (chainId === CHAIN.NEAR) {
    return 'white';
  } else if (chainId === CHAIN.CERAMIC) {
    return 'white';
  }
  return 'black';
};
