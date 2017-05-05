import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getNote } from 'redux/note'
import Component from './techbar'

const mapStateToProps = (state, { className = '' }) => {
  const note = getNote(state)
  const classNames = [className]

  return {
    ...pick(note, ['content']),
    className: classNames.join(' '),
    loaded: true,
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
