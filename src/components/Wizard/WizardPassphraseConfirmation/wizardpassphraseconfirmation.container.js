// import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getTmpPassphraseConfirmation, getTmpPassphrase } from 'redux/vault'
import Component from './wizardpassphraseconfirmation'
import { comeBack, setTmpPassphraseConfirmation, next } from './wizardpassphraseconfirmation.actions'

const mapStateToProps = (state, { className = '' }) => {
  return {
    className,
    passphraseConfirmation: getTmpPassphraseConfirmation(state),
    passphrase: getTmpPassphrase(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onClick: event => dispatch(savePassphrase(event)),
    // onChange: event => dispatch(setTmpPassphrase(event.target.value)),
    onChangeConfirmation: event => dispatch(setTmpPassphraseConfirmation(event.target.value)),
    onClick: () => dispatch(comeBack()),
    onCheck: passphrase => () => dispatch(next(passphrase)),
    // load: () => dispatch(retrieveLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
