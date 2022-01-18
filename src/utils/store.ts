import { writable, derived } from 'svelte/store';


export const currentChain = writable(null) 
const currentStepIndex = writable(0);


export const appState = derived([currentChain, currentStepIndex], ([$currentChain, $currentStepIndex]) => {

  if (!$currentChain) return null

  const numSteps = ($currentChain == null)? 0 : $currentChain.steps.length
  const isOneColumn = $currentChain.steps[$currentStepIndex].isOneColumn

  const isFirstStep = $currentStepIndex == 0
  const isLastStep =  $currentStepIndex == $currentChain.steps.length - 1

  const justify = getJustify (isFirstStep, isLastStep)

  const currentStep = $currentChain.steps[$currentStepIndex]
  const prevStep = isFirstStep? null : $currentChain.steps[$currentStepIndex-1]
  const nextStep = isLastStep? null : $currentChain.steps[$currentStepIndex+1]

  return {
    currentChain: $currentChain,
    currentStepIndex: $currentStepIndex,
    isFirstStep: isFirstStep,
    isLastStep: isLastStep,
    justify: justify,
    currentStep: currentStep,
    prevStep: prevStep,
    nextStep: nextStep,
    isCompleted: false,
  }
})

export const prev = () => {

}

export const next = () => {
  
}


const getJustify = (isFirstStep, isLastStep) => {
  if (isFirstStep) {
    return ('start'); 
  } else if (isLastStep) {
    return ('end');
  } else {
    return ('space-between');
  }
}

/*
const hasNextStep = (chainId: CHAINS, currStep: number) : boolean => {
  const chain = CHAINS_CONFIG[chainId]
  const steps = chain.steps
  console.log(steps.length)
  return (currStep < steps.length -1) ? true : false
}

const getNextStep = (chainId: CHAINS, currStep: number) : number => {
  const chain = CHAINS_CONFIG[chainId]
  const steps = chain.steps
  
  if (currStep == steps.length -1) return currStep
  return (currStep+1);
}

const hasPreviousStep = (chainId: CHAINS, currStep: number) : boolean => {
  return (currStep <= 0) ? false : true
}

const getPreviousStep = (chainId: CHAINS, currStep: number) : number => {

  const chain = CHAINS_CONFIG[chainId]
  const steps = chain.steps

  if (currStep <= 0) return -1
  return (currStep-1);
}
*/
