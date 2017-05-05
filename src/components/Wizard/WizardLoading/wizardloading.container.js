// import pick from 'lodash/pick'
import { connect } from 'react-redux'

import Component from './wizardloading'
import { retrieveLogin } from './wizardloading.actions'

const mapStateToProps = (state, { className = '' }) => {
  return {
    className,
    loaded: true,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(retrieveLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
