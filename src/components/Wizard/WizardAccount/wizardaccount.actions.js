import { setStep } from 'redux/introduction'
import { setUser, resetUser } from 'redux/user'
import { setEncryptedContent } from 'redux/vault'

import { signIn, findVault, getVault } from '../../../services/google-api'

/* global gapi */

export const login = () => (dispatch) => {

  signIn().then((profile) => {
    const user = { displayName: profile.getName(), photoURL: profile.getImageUrl() }
    dispatch(setUser(user))
    findVault().then((id) => {
      return getVault(id)
    }).then((data) => {
      dispatch(setEncryptedContent(data))
      dispatch(setStep('passphrase-decrypt'))
    }).catch(() => {
      dispatch(setStep('passphrase'))
    })
  }).catch(() => {
    dispatch(resetUser())
    dispatch(setStep('account'))
  })
}
