import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getNote } from 'redux/note'
import { getPassphrase } from 'redux/vault'
import Component from './vaultbar'
import { saveNote } from './vaultbar.actions'

const mapStateToProps = (state, { className = '' }) => {
  const note = getNote(state)
  return {
    ...pick(note, ['content', 'savedContent']),
    className,
    loaded: true,
    passphrase: getPassphrase(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getDriveFiles: event => dispatch(getDriveFiles(event)),
    onSave: (passphrase, content) => event => dispatch(saveNote(event, passphrase, content)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
