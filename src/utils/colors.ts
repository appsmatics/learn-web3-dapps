import {CHAINS} from './types.ts';
import type {ChainColorsType} from './types.ts'

export const colors = {
  figmentYellow: '#FFF29B',
  darkBackground: 'rgb(33, 37, 41)',
}

export const getChainColors = (chainId: CHAINS): ChainColorsType => {
  return {
    primaryColor: getPrimaryColor(chainId),
    secondaryColor: getSecondaryColor(chainId),
  };
};

const getPrimaryColor = (chainId: CHAINS) => {
  if (chainId === CHAINS.SOLANA) {
    return '#89fdd3';
    // TODO: linear-gradient does not work with CSS variables :(
    //return 'linear-gradient(253deg, #00FFA3, #DC1FFF)';
  } else if (chainId === CHAINS.AVALANCHE) {
    return '#e84141';
  } else if (chainId === CHAINS.THE_GRAPH) {
    return '#392f70';
    return 'linear-gradient(130deg, #5943d0, #151324)';
  } else if (chainId === CHAINS.POLYGON) {
    return '#966ae0';
  } else if (chainId === CHAINS.POLKADOT) {
    return '#e6007a';
  } else if (chainId === CHAINS.TEZOS) {
    return '#0f62ff';
  } else if (chainId === CHAINS.CELO) {
    return 'linear-gradient(253deg, rgb(251, 204, 92), rgb(53,208,127))';
  } else if (chainId === CHAINS.NEAR) {
    return 'linear-gradient(253deg, #00c1de, #00c08b)';
  } else if (chainId === CHAINS.SECRET) {
    return 'black';
  } else if (chainId === CHAINS.CERAMIC) {
    return '#f87236';
  }
  return 'rgb(255, 242, 155)';
};

const getSecondaryColor = (chainId: CHAINS) => {
  return 'white'
}

const getSecondaryColorOrig = (chainId: CHAINS) => {
  if (chainId === CHAINS.SOLANA) {
    return 'white';
  } else if (chainId === CHAINS.AVALANCHE) {
    return '#F6F6F6';
  } else if (chainId === CHAINS.THE_GRAPH) {
    return '#F6F6F6';
  } else if (chainId === CHAINS.POLYGON) {
    return '#F6F6F6';
  } else if (chainId === CHAINS.POLKADOT) {
    return '#F6F6F6';
  } else if (chainId === CHAINS.TEZOS) {
    return '#F6F6F6';
  } else if (chainId === CHAINS.SECRET) {
    return 'white';
  } else if (chainId === CHAINS.NEAR) {
    return 'white';
  } else if (chainId === CHAINS.CERAMIC) {
    return 'white';
  }
  return 'black';
};
