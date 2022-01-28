import {get, writable, derived } from 'svelte/store';


export const currentProtocol = writable(null)
export const protocolState = writable( {
  network: "DEVNET",
  address: "",
  secret: "",
})

const currentStepIndex = writable(0);

export const stepState = derived([currentProtocol, currentStepIndex], ([$currentProtocol, $currentStepIndex]) => {

  if (!$currentProtocol) return null

  const numSteps = ($currentProtocol == null)? 0 : $currentProtocol.steps.length
  const isFirstStep = $currentStepIndex == 0
  const isLastStep =  $currentStepIndex == $currentProtocol.steps.length - 1

  const justify = getJustify (isFirstStep, isLastStep)

  const currentStep = $currentProtocol.steps[$currentStepIndex]
  const prevStep = isFirstStep? null : $currentProtocol.steps[$currentStepIndex-1]
  const nextStep = isLastStep? null : $currentProtocol.steps[$currentStepIndex+1]

  const previousTitle = prevStep? prevStep.title : "" 
  const nextTitle = nextStep? nextStep.title : "" 

  return {
    currentProtocol: $currentProtocol,
    currentStep: currentStep,
    numSteps: numSteps,
    isFirstStep: isFirstStep,
    isLastStep: isLastStep,
    justify: justify,
    currentStepIndex: $currentStepIndex,
    // prevStep: prevStep,
    // nextStep: nextStep,
    previousTitle: previousTitle,
    nextTitle: nextTitle,
    isCompleted: false,
  }
})

export const prev = () => {
  const state = get(stepState)
  const currStepIndex = state.currentStepIndex 
  if (currStepIndex > 0) {
    currentStepIndex.update( n => n-1)
  }
}

export const next = () => {
  const state = get(stepState)
  const numSteps = state.numSteps
  const currStepIndex = state.currentStepIndex
  // console.log(numSteps, currStepIndex) 
  if (currStepIndex < numSteps-1) {
    currentStepIndex.update(n => n+1)
  }
}

//Bootstrap-5 classes
const getJustify = (isFirstStep, isLastStep) => {
  if (isFirstStep) {
    return ('justify-content-end'); 
  } else if (isLastStep) {
    return ('justify-content-start');
  } else {
    return ('justify-content-between');
  }
}
