import { connect } from 'react-redux'
import { getCurrentStep } from 'redux/introduction'
import Component from './App'

const mapStateToProps = (state, { className = '' }) => {
  const classNames = [className]

  return {
    className: classNames.join(' '),
    loaded: true,
    step: getCurrentStep(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: event => dispatch(connectAccount(event)),
    // onChange: event => dispatch(setContent(event.target.value)),
    // onClick: () => dispatch(login()),
    // load: () => dispatch(retrieveLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
