import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getNote, setContent } from 'redux/note'
import Component from './editor'
// import styles from './note.style'
// import { setContent } from 'redux/note'


const mapStateToProps = (state, { className = '' }) => {
  const note = getNote(state)
  const classNames = [className]

  return {
    ...pick(note, ['content']),
    className: classNames.join(' '),
    loaded: true,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => dispatch(setContent(event.target.value)),
    // onClick: () => dispatch(login()),
    // load: () => dispatch(retrieveLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
