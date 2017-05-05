// import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getUser } from 'redux/user'

import Component from './wizardaccount'
import { login } from './wizardaccount.actions'

const mapStateToProps = (state, { className = '' }) => {
  const classNames = [className]

  const user = getUser(state)

  return {
    className: classNames.join(' '),
    loaded: true,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(login()),
    // onChange: event => dispatch(setContent(event.target.value)),
    // onClick: () => dispatch(login()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
