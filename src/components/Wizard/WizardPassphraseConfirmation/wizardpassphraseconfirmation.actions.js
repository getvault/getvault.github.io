// /* global firebase */
// /* global gapi */
import { incrementStep, decrementStep } from 'redux/introduction'
import { setTmpPassphraseConfirmation as setTmpPassphraseConfirmation2, savePassphrase } from 'redux/vault'

import { encrypt } from '../../../services/encryption'
import { saveVault } from '../../../services/google-api'

// import { browserHistory } from 'react-router'


export const setTmpPassphraseConfirmation = text => (dispatch) => {
  dispatch(setTmpPassphraseConfirmation2(text))
}


export const comeBack = () => (dispatch) => {
  dispatch(decrementStep())
}

export const next = passphrase => (dispatch) => {
  encrypt(passphrase, '').then((ciphertext) => {
    // dispatch(setEncryptedContent(ciphertext))
    return saveVault({ data: ciphertext })
  }).then(() => {
    dispatch(savePassphrase())
    dispatch(incrementStep())
  }).catch(() => {
    // console.log('e', e)
  })
}
