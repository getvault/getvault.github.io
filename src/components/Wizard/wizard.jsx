import React, { PropTypes } from 'react'
// import loader from 'hoc-react-loader'
import styles from './wizard.style'
import WizardLoading from './WizardLoading'
import WizardAccount from './WizardAccount'
import WizardPassphrase from './WizardPassphrase'
import WizardPassphraseConfirmation from './WizardPassphraseConfirmation'
import WizardPassphraseDecrypt from './WizardPassphraseDecrypt'
import WizardEditor from './WizardEditor'

/* eslint-disable react/no-danger */

const Wizard = ({ className, currentStep }) => {
    // console.log(currentStep)
  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.wizard}>
        <div className={currentStep === 'vault' ? styles.vault : styles.noVault}>
          { currentStep === 'loading' ? <WizardLoading /> : null }
          { currentStep === 'account' ? <WizardAccount /> : null }
          { currentStep === 'passphrase' ? <WizardPassphrase /> : null }
          { currentStep === 'passphrase-confirmation' ? <WizardPassphraseConfirmation /> : null }
          { currentStep === 'passphrase-decrypt' ? <WizardPassphraseDecrypt /> : null }
          { currentStep === 'vault' ? <WizardEditor /> : null }
        </div>
        <img src="src/img/v.png" alt="save password logo" className={styles.brandLogo} />
      </div>
    </div>
  )
}


/* eslint-enable react/no-danger */

Wizard.propTypes = {
  className: PropTypes.string,
  currentStep: PropTypes.string,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

// export default loader(Wizard, { Loader: null })
export default Wizard
