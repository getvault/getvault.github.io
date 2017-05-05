import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import styles from './wizardloading.style'

const WizardLoading = ({ className }) => {
  return (
    <div className={`${className} ${styles.preparing}`}>
      We are preparing your vault...
    </div>
  )
}


WizardLoading.propTypes = {
  className: PropTypes.string,
}

export default loader(WizardLoading, { Loader: null })
