import { connect } from 'react-redux'
import { getPassphrase, getEncryptedContent, getDecryptionError, getMinScore, isDecrypted } from 'redux/vault'

import Component from './wizardpassphrasedecrypt'
import { loadNote, next, signOut } from './wizardpassphrasedecrypt.actions'

const mapStateToProps = (state, { className = '' }) => {
  console.log('getDecryptionError', getDecryptionError(state))
  return {
    className,
    passphrase: getPassphrase(state),
    encryptedContent: getEncryptedContent(state),
    decryptionError: getDecryptionError(state) ? 'error' : '',
    minScore: getMinScore(state),
    isDecrypted: () => isDecrypted(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (encryptedContent, minScore) => event =>
    dispatch(loadNote(event.target.value, encryptedContent, minScore)),
    onCheck: () => dispatch(next()),
    onSignout: event => dispatch(signOut(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
