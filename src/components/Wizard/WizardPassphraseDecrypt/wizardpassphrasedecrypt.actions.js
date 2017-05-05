// /* global firebase */
// /* global gapi */
import { setStep } from 'redux/introduction'
// import { browserHistory } from 'react-router';

import { setPassphrase, setDecryptionError, setDecrypted } from 'redux/vault'
import { setContent, saveContent } from 'redux/note'
import { resetUser } from 'redux/user'
import { decrypt } from '../../../services/encryption'

// import { browserHistory } from 'react-router'

/* global gapi */
/* global window */
export const signOut = event => (dispatch) => {
  event.preventDefault()
  gapi.auth2.getAuthInstance().signOut().then(() => {
    dispatch(resetUser())
    dispatch(setStep('loading'))
    window.location = '/'
  })
}
/* global firebase */

export const next = () => (dispatch) => {
  dispatch(setStep('vault'))
}

export const loadNote = (passphrase, encryptedContent/* , minScore*/) => (dispatch) => {
  console.log('loadNote')
  dispatch(setPassphrase(passphrase))
  // if (passphrase.length >= minScore) {
  decrypt(passphrase, encryptedContent).then((decrypted) => {
    try {
      const parsed = JSON.parse(decrypted)
      if (parsed.data || parsed.data === '') {
        dispatch(setDecryptionError(false))
        dispatch(setContent(parsed.data))
        dispatch(saveContent())
        dispatch(setDecrypted(true))
      } else {
        dispatch(setDecryptionError(true))
        dispatch(setDecrypted(false))
      }
    } catch (e) {
      dispatch(setDecryptionError(true))
      dispatch(setDecrypted(false))
    }
  }).catch(() => {
    dispatch(setDecryptionError(true))
    dispatch(setDecrypted(false))
  })
  // }
}
