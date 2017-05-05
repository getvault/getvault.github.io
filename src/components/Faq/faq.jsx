import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './faq.style'

const Faq = ({ className }) => {

  const openDoubleAuthentication = (event) => {
    event.preventDefault()
    /* global window */
    window.open('https://support.google.com/accounts/answer/185839')
  }

  const openBruteForce = (event) => {
    event.preventDefault()
    /* global window */
    window.open('https://en.wikipedia.org/wiki/Brute-force_attack')
  }

  const openDDos = (event) => {
    event.preventDefault()
    /* global window */
    window.open('https://en.wikipedia.org/wiki/Denial-of-service_attack')
  }

  const openGithub = (event) => {
    event.preventDefault()
    /* global window */
    window.open('https://github.com/save-password/save-password.github.io/issues')
  }


  return (
    <div className={`${className} ${styles.faq}`}>
      <img src="/src/img/p.png" alt="logo" className={styles.brandLogo} />
      <header className={styles.header}>
        <h1>FAQ</h1>
      </header>
      <ul data-uk-accordion>
        <li className="uk-open">
          <h2 className="uk-accordion-title">Why Google Drive?</h2>
          <div className="uk-accordion-content">
            <p>
              Google Drive is a well known cloud storage service so almost everybody
               has an account and the free space is very large.
            </p>
            <p>
               Moreover, Google is a very significant storage service and provides a
               lot of security enhancements like the&nbsp;
               <a href="https://support.google.com/accounts/answer/185839" onClick={openDoubleAuthentication}>double authentication</a>.
               So basic attacks like <a href="https://en.wikipedia.org/wiki/Brute-force_attack" onClick={openBruteForce}>brute-force attacks</a>
               &nbsp;or <a href="https://en.wikipedia.org/wiki/Denial-of-service_attack" onClick={openDDos}>DDoS attacks</a> should be ineffective.
            </p>
            <p>
              Finally Google Drive has a private folder by application so everything you
              store with <strong>Save password</strong> is hidden to other applications
               and even to yourself.
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">Why is <strong>Save password</strong> so secured?</h2>
          <div className="uk-accordion-content">
            <p>
              <strong>My Vault</strong> encrypts your data on your browser before transfering
               it on your Google Drive so your data are never transfered online in clear.
              Moreover, your data are stored encrypted so even if your Google Drive account
              is compromised nobody will have access to your data.
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">How to reset my password/passphrase?</h2>
          <div className="uk-accordion-content">
            <p>
              You have lost the passphrase to decrypt your data on <strong>My Vault</strong>?
              That is too bad because for security reasons, we have no way to retrieve
               your password or to reset it.
              Because if we could reset your passphrase, it means that hackers could do it too.
            </p>
            <p>
              So all your data stored in your vault are lost. Your only solution is to remove the vault and create a new one. See the next question to delete your vault.
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">How to delete my vault?</h2>
          <div className="uk-accordion-content">
            <p>
              For security reasons, your only way to delete your vault is to remove it manually.
              As the vault is stored in a hidden private folder, the only way to delete it is to go in your google drive, then in the "parameters" (the cog on the top right), then "manage the applications".
              Find the application "save-password" and finally click on button "remove content" in the menu on the right.
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">You need specific help?</h2>
          <div className="uk-accordion-content">
            <p>
              You can contact use by posting an issue on the &nbsp;
              <a
                href="https://github.com/save-password/save-password.github.io/issues"
                onClick={openGithub}
              >
                github
              </a> of this project.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

// <img src="/src/img/spartiates.jpeg" alt="spartiates"  />


Faq.propTypes = {
  className: PropTypes.string,
}

// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

// export default loader(Wizard, { Loader: null })
export default Faq
