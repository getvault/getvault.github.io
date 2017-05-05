// /* global firebase */
// /* global gapi */
import { incrementStep } from 'redux/introduction'
// import { browserHistory } from 'react-router';

import { setTmpPassphrase as setTmpPassphrase2, setTmpPassphraseConfirmation as setTmpPassphraseConfirmation2 } from 'redux/vault'

// export const connectAccount = event => () => {
//   event.preventDefault()
//   gapi.auth2.getAuthInstance().signIn().then(() => {
//     console.log('ok')
//   })
//
//   // dispatch()
// }


export const savePassphrase = () => (dispatch) => {
  dispatch(incrementStep())
  // browserHistory.push('/vault')
}

export const setTmpPassphrase = text => (dispatch) => {
  dispatch(setTmpPassphrase2(text))
}

export const setTmpPassphraseConfirmation = text => (dispatch) => {
  dispatch(setTmpPassphraseConfirmation2(text))
}
