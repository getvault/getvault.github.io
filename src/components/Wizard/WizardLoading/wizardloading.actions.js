import { setStep } from 'redux/introduction'
import { setUser, resetUser } from 'redux/user'
import { setEncryptedContent } from 'redux/vault'

import { autoSignIn, findVault, getVault } from '../../../services/google-api'

/* global gapi */
// const updateLogin = (dispatch) => {
//   const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()
//
// }

export const retrieveLogin = () => (dispatch) => {
  autoSignIn().then((profile) => {
    const user = { displayName: profile.getName(), photoURL: profile.getImageUrl() }
    dispatch(setUser(user))
    console.log('retrieveLogin');
    findVault().then((id) => {
      console.log('findVault get', id);
      return getVault(id)
    }).then((data) => {
      dispatch(setEncryptedContent(data))
      dispatch(setStep('passphrase-decrypt'))
    }).catch((e) => {
      console.log('catch retrieveLogin', e);
      dispatch(setStep('passphrase'))
    })
  }).catch(() => {
    dispatch(resetUser())
    dispatch(setStep('account'))
  })
  // gapi.load('client:auth2', () => {
  //   gapi.client.init({
  //     discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  //     clientId: '582092887587-0mh9fgrqpjqk3lj5jvj90alpvfnelict.apps.googleusercontent.com',
  //    // scope: 'https://www.googleapis.com/auth/drive.appdata',
  //     scope: 'https://www.googleapis.com/auth/drive',
  //   }).then(() => {
  //       // gapi.auth2.getAuthInstance().signOut()
  //         gapi.auth2.getAuthInstance().isSignedIn.listen(() => {
  //           updateLogin(dispatch)
  //         })
  //
  //     if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
  //       updateLogin(dispatch)
  //     } else {
  //       dispatch(resetUser())
  //       dispatch(setStep('account'))
  //     }
  //
  //
  //   })
  // })
}
