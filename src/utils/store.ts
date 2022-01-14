import { get, writable, derived } from 'svelte/store';
import { CHAINS } from './types';
import { CHAINS_CONFIG } from './config';

export const currentChain = writable(0)
export const currentStep = writable(0);

export const isFirstStep= writable(true)
export const isLastStep= writable(false)
export const nextStepTitle = writable("")
export const previousStepTitle = writable("")
export const isCompleted = writable(false)


const { subscribe, set, update } = writable({
  currentChain: CHAINS_CONFIG[CHAINS.SOLANA],
  currentStep: 0,
  isFirstStep: true,
  isLastStep: false,
  justify: true,
  prevStepTitle: "Prev Step",
  nextStepTitle: "Next Step",
  isCompleted: false,
})



export const app = {
  subscribe,
  prev: () => {

  },
  next: () => {
    update (obj => {
      obj.isFirstStep = false;
      return obj
    })
  },
}

export const justify = derived ([isFirstStep, isLastStep], ([$isFirstStep, $isLastStep]) => {
  if ($isFirstStep) {
    return ('start'); 
  } else if ($isLastStep) {
    return ('end');
  } else {
    return ('space-between');
  }
}, 'space-between')


