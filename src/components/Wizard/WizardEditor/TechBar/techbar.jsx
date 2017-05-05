import React, { PropTypes } from 'react'
// import loader from 'hoc-react-loader'
import User from './User'

import styles from './techbar.style'

/* eslint-disable react/no-danger */

const TechBar = ({ className }) => {
  return (
    <div className={`${styles.techbar} ${className}`}>
      <User />
      <div className={styles.content} />
    </div>
  )
}

/* eslint-enable react/no-danger */

TechBar.propTypes = {
  className: PropTypes.string,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default TechBar
