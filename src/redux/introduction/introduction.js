// import uniq from 'lodash/uniq'
import { INCREMENT_STEP, DECREMENT_STEP, SET_STEP } from './introduction.actions'

export const initState = { step: 'loading' }
export const initAction = { type: 'UNKWOWN' }

export default (state = initState, action = initAction) => {
  if (action.type === INCREMENT_STEP) {
    let newStep = ''
    if (state.step === 'account') {
      newStep = 'passphrase'
    } else if (state.step === 'passphrase') {
      newStep = 'passphrase-confirmation'
    } else if (state.step === 'passphrase-confirmation') {
      newStep = 'vault'
    }
    return { step: newStep }
  } else if (action.type === DECREMENT_STEP) {
    let newStep = ''
    if (state.step === 'passphrase') {
      newStep = 'account'
    } else if (state.step === 'passphrase-confirmation') {
      newStep = 'passphrase'
    }
    return { step: newStep }
  } else if (action.type === SET_STEP) {
    return { step: action.payload }
  }
  return state
}
