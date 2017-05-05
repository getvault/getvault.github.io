import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getNote } from 'redux/note'
import Component from './wizardeditor'
import { writeContent } from './wizardeditor.actions'

const mapStateToProps = (state, { className = '' }) => {
  const note = getNote(state)

  return {
    ...pick(note, ['content']),
    className,
    loaded: true,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => dispatch(writeContent(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
