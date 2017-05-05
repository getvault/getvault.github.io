import React, { PropTypes } from 'react'
// import loader from 'hoc-react-loader'
import styles from './wizardpassphraseconfirmation.style'

/* eslint-disable react/no-danger */

const WizardPassphraseConfirmation = ({ className, passphrase, passphraseConfirmation, onChangeConfirmation, onClick, onCheck }) => {

    let showError = (passphraseConfirmation !== '') && (passphraseConfirmation !== passphrase)
    let showGood = (passphraseConfirmation !== '') && (passphraseConfirmation === passphrase)

    if (showGood) {
        setTimeout(() => {
            onCheck(passphrase)()
        }, 1000)
    }

    return (
           <div className={`${className} ${styles.wizard}`}>
             <h2>Remember your passphrase</h2>
             <p className={`description ${styles.description}`}>
               If you lost your passphrase, you will lost <strong>everything in
               your vault</strong>. So remember your passphrase!
             </p>

             <input type="password" className={`uk-input ${styles.input} ${showError && 'uk-form-danger'}`} onChange={onChangeConfirmation} placeholder="Confirm passphrase" value={passphraseConfirmation} />
             <div className={`${styles.helpConfirmation} ${passphraseConfirmation === passphrase ? styles.checkConfirmation : ''}`}>
               { showError ? 'This passphrase is different from the previous one' : '' }
               { showGood ? <span className={styles.iconCheck} data-uk-icon="icon: check; ratio: 2" /> : null}
             </div>
             <p className={styles.help}>
                For privacy reasons, we aren't able to reset your passphrase.
                So remember it and please, <strong>DO NOT</strong> write it anywhere.
             </p>
             <button className={`uk-button uk-button-default uk-button-small`} onClick={onClick} >previous</button>
           </div>
       )
}


/* eslint-enable react/no-danger */

WizardPassphraseConfirmation.propTypes = {
  className: PropTypes.string,
  onChangeConfirmation: PropTypes.func.isRequired,
  passphrase: PropTypes.string,
  passphraseConfirmation: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default WizardPassphraseConfirmation
