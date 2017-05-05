import { resetUser } from 'redux/user'
import { setStep } from 'redux/introduction'
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
