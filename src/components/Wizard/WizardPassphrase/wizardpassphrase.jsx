import React, { PropTypes } from 'react'
// import loader from 'hoc-react-loader'
import styles from './wizardpassphrase.style'

/* eslint-disable react/no-danger */

const getActive = (score, requestedScore, minScore) => {
  if (score >= requestedScore) {
    if (score >= minScore) {
      return styles.indicatorGood
    }
    return styles.indicatorWrong
  }
  return ''
}

const WizardPassphrase = ({ className, onClick, passphrase, score, minScore, onChange }) => {
  const disabled = score < minScore
  const indicatorClassNames = []
  indicatorClassNames[0] = getActive(score, 1, minScore)
  indicatorClassNames[1] = getActive(score, 10, minScore)
  indicatorClassNames[2] = getActive(score, 16, minScore)
  indicatorClassNames[3] = getActive(score, 20, minScore)
  indicatorClassNames[4] = getActive(score, 25, minScore)

  return (
    <div className={`${className} ${styles.wizard}`}>
      <h2>Choose your secret passphrase</h2>
      <p className={`description ${styles.description}`}>
        You need to find a phrase that will be used to encrypt all your passwords and data.
        It must be <strong>strong</strong>, <strong>long</strong> and <strong>secret</strong>.
      </p>

      <div className={`${styles.form}`}>
        <div className={styles.passphrase}>
          <input type="password" className={`uk-input ${styles.input} ${disabled && passphrase.length > 0 ? 'uk-form-danger' : ''}`} onChange={onChange} placeholder="Passphrase" value={passphrase} />
          <div className={`${styles.indicators}`}>
            <div className={`${styles.indicator} ${indicatorClassNames[0]}`} />
            <div className={`${styles.indicator} ${indicatorClassNames[1]}`} />
            <div className={`${styles.indicator} ${indicatorClassNames[2]}`} />
            <div className={`${styles.indicator} ${indicatorClassNames[3]}`} />
            <div className={`${styles.indicator} ${indicatorClassNames[4]}`} />
          </div>
        </div>
        <button className={`uk-button uk-button-${disabled ? 'danger' : 'primary'} ${styles.button}`} onClick={onClick} disabled={passphrase === ''}>save</button>
      </div>


      <p className={styles.help}>
        This passphrase is the last bulwalk to protect your privacy. We encourage
        you to use an expression very very very hard to discover.
      </p>
    </div>
  )
}

WizardPassphrase.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  passphrase: PropTypes.string,
  score: PropTypes.number,
  minScore: PropTypes.number,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default WizardPassphrase
