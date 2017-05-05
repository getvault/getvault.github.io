import React from 'react'
// import loader from 'hoc-react-loader'
import styles from './vault.style'
import VaultBar from './VaultBar'
import TechBar from './TechBar'
import Editor from './Editor'


/* eslint-disable react/no-danger */

const Vault = () => {
  return (
    <div className={styles.vault}>
      <TechBar />
      <Editor />
      <VaultBar />
      <img src="src/img/p.png" alt="save password logo" className={styles.brandLogo} />
    </div>
  )
}

/* eslint-enable react/no-danger */

Vault.propTypes = {
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default Vault
