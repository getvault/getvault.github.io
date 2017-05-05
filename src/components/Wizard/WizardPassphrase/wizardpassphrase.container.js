// import pick from 'lodash/pick'
import { connect } from 'react-redux'

import { getTmpPassphrase, getTmpScore, getMinScore } from 'redux/vault'
import Component from './wizardpassphrase'
import { savePassphrase, setTmpPassphrase } from './wizardpassphrase.actions'

const mapStateToProps = (state, { className = '' }) => {
  return {
    className,
    passphrase: getTmpPassphrase(state),
    score: getTmpScore(state),
    minScore: getMinScore(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(savePassphrase()),
    onChange: event => dispatch(setTmpPassphrase(event.target.value)),
    // onClick: () => dispatch(login()),
    // load: () => dispatch(retrieveLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
