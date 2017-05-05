import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import styles from './wizardeditor.style'
import VaultBar from './VaultBar'
import User from './User'
// import TechBar from './TechBar'
/* eslint-disable react/no-danger */

const WizardEditor = ({ className, content, onChange }) => {
  return (
    <div className={`${className} ${styles.vault}`}>
      <User className={styles.user} />
      <textarea className={styles.editor} placeholder="Write your secrets" value={content} onChange={onChange} />
      <VaultBar />
    </div>
  )
}

WizardEditor.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default loader(WizardEditor, { Loader: null })
