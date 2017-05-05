import React, { PropTypes } from 'react'
import cx from 'classnames'

// import loader from 'hoc-react-loader'
import styles from './vaultbar.style'

/* eslint-disable react/no-danger */

const VaultBar = ({ className, content, passphrase, savedContent, onSave, savingState }) => {
  const dynamicClassName = cx(styles.vaultbar, {
    [styles.visible]: content !== savedContent || savingState !== 'saved',
  })

  return (
    <div className={`${styles.vaultbar} ${className} ${dynamicClassName}`}>
      <div className={styles.extend} />
      {savingState === 'just-saved' ? <span className={styles.loading}>Saved!</span> : null }
      {savingState === 'saving' ? <span className={styles.loading}>Saving...</span> : null }
      {savingState === 'saved' && content !== savedContent ? <button className={`uk-button uk-button-primary ${savingState !== 'saved' ? 'uk-disabled' : null}`} onClick={onSave(passphrase, content)}>save</button> : null }
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
  savingState: PropTypes.string,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default VaultBar
