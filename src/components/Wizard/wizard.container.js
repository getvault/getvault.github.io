// import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getCurrentStep } from 'redux/introduction'
import Component from './wizard'


const mapStateToProps = (state, { className = '' }) => {
  const classNames = [className]
  const step = getCurrentStep(state)

  return {
    className: classNames.join(' '),
    currentStep: step,
    loaded: true,
  }
}

const mapDispatchToProps = () => {
  return {
    // onChange: event => dispatch(setContent(event.target.value)),
    // onClick: () => dispatch(login()),
    // load: () => dispatch(retrieveLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
