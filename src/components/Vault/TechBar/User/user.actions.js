import { setUser, resetUser, isConnected } from 'redux/user'
import { setStep } from 'redux/introduction'
import { browserHistory } from 'react-router'

/* global window */
/* global firebase */
export const login = () => (dispatch, getState) => {
  // if (isConnected(getState())) return
  //
  // const provider = new firebase.auth.GoogleAuthProvider()
  //
  // firebase.auth().signInWithPopup(provider)
  //   .then(user => dispatch(setUser(user.user)))
  //   .catch(console.error) // eslint-disable-line no-console
}

export const retrieveLogin = () => (dispatch) => {
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     dispatch(setUser(user))
  //   } else {
  //     dispatch(resetUser())
  //   }
  // })
}

/* global gapi */
export const signOut = (event) => (dispatch) => {
  // dispatch(resetUser())
  // dispatch(setStep('account'))
  event.preventDefault()
  gapi.auth2.getAuthInstance().signOut().then(() => {
    dispatch(resetUser())
    dispatch(setStep('loading'))
    window.location = '/'
  })
}
