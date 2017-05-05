export const INCREMENT_STEP = 'INCREMENT_STEP'
export const incrementStep = () => {
  return {
    type: INCREMENT_STEP,
  }
}

export const DECREMENT_STEP = 'DECREMENT_STEP'
export const decrementStep = () => {
  return {
    type: DECREMENT_STEP,
  }
}

export const SET_STEP = 'SET_STEP'
export const setStep = (step) => {
  return {
    type: SET_STEP,
    payload: step,
  }
}
