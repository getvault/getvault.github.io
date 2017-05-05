import React, { PropTypes } from 'react'
import cx from 'classnames'

// import loader from 'hoc-react-loader'
import styles from './vaultbar.style'

/* eslint-disable react/no-danger */

const VaultBar = ({ className, content, passphrase, savedContent, onSave }) => {
  const dynamicClassName = cx(styles.vaultbar, {
    [styles.visible]: content !== savedContent,
  })

  return (
    <div className={`${styles.vaultbar} ${className} ${dynamicClassName}`}>
      <button className="uk-button uk-button-primary" onClick={onSave(passphrase, content)}>save</button>
    </div>
  )
}

/* eslint-enable react/no-danger */

VaultBar.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  passphrase: PropTypes.string,
  savedContent: PropTypes.string,
  onSave: PropTypes.func.isRequired,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default VaultBar
