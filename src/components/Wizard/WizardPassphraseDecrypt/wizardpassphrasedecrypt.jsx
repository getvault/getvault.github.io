import React, { PropTypes } from 'react'
// import loader from 'hoc-react-loader'
import styles from './wizardpassphrasedecrypt.style'

const WizardPassphraseEncrypt = ({ className, passphrase,
  encryptedContent, decryptionError, onChange, minScore, isDecrypted, onCheck, onSignout }) => {
  if (isDecrypted()) {
    setTimeout(() => {
      onCheck()
    }, 1000)
  }

  return (
    <div className={`${className} ${styles.wizard}`}>
      <h2>Decrypt your data</h2>
      <p className="description">
        Use your secret passphrase to decrypt your data
      </p>
      <input type="password" className={`uk-input ${styles.input}`} onChange={onChange(encryptedContent, minScore)} placeholder="Passphrase" value={passphrase} />
      <div className={`${styles.help} ${isDecrypted() ? styles.helpCheck : ''}`}>
        { !isDecrypted() && decryptionError ? 'Wrong passphrase' : null }
        { isDecrypted() ? <span className={styles.iconCheck} data-uk-icon="icon: check; ratio: 2" /> : null}
      </div>
      <p />
      <a href="" className={styles.signout} onClick={onSignout} >Forget me</a>
    </div>
  )
}

WizardPassphraseEncrypt.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onSignout: PropTypes.func.isRequired,
  passphrase: PropTypes.string,
  encryptedContent: PropTypes.string,
  decryptionError: PropTypes.string,
  minScore: PropTypes.number,
  isDecrypted: PropTypes.func.isRequired,
}

export default WizardPassphraseEncrypt
