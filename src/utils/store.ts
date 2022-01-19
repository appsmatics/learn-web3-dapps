import {get, writable, derived } from 'svelte/store';


export const currentChain = writable(null) 
const currentStepIndex = writable(0);


export const appState = derived([currentChain, currentStepIndex], ([$currentChain, $currentStepIndex]) => {

  if (!$currentChain) return null

  const numSteps = ($currentChain == null)? 0 : $currentChain.steps.length
  const isFirstStep = $currentStepIndex == 0
  const isLastStep =  $currentStepIndex == $currentChain.steps.length - 1

  const justify = getJustify (isFirstStep, isLastStep)

  const currentStep = $currentChain.steps[$currentStepIndex]
  console.log(currentStep.isOneColumn)
  const prevStep = isFirstStep? null : $currentChain.steps[$currentStepIndex-1]
  const nextStep = isLastStep? null : $currentChain.steps[$currentStepIndex+1]

  const previousTitle = prevStep? prevStep.title : "" 
  const nextTitle = nextStep? nextStep.title : "" 

  return {
    currentChain: $currentChain,
    currentStepIndex: $currentStepIndex,
    numSteps: numSteps,
    isFirstStep: isFirstStep,
    isLastStep: isLastStep,
    justify: justify,
    currentStep: currentStep,
    // prevStep: prevStep,
    // nextStep: nextStep,
    previousTitle: previousTitle,
    nextTitle: nextTitle,
    isCompleted: false,
  }
})

export const prev = () => {
  const state = get(appState)
  const currStepIndex = state.currentStepIndex 
  if (currStepIndex > 0) {
    currentStepIndex.update(n => n-1)
  }
}

export const next = () => {
  const state = get(appState)
  const numSteps = state.numSteps
  const currStepIndex = state.currentStepIndex
  console.log(numSteps, currStepIndex) 
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
