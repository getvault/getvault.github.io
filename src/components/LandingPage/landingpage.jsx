import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './landingpage.style'

const LandingPage = ({ className }) => {
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
    window.open('https://github.com/save-password/save-password.github.io')
  }

  return (
    <div className={`${className} ${styles.landing}`}>
      <div className={styles.welcome}>
        <div className={styles.welcomeBackground}>
          <video id="bgvid" autoPlay muted loop>
            <source src="/src/video/Binary_numbers_alpha_overlay_02_Videvo.mov" type="video/mp4" />
          </video>
        </div>
        <div className={styles.welcomeContent} >
          <div className={styles.welcomeCenter}>
            <h1><img src="/src/img/v-white.png" alt="logo" /><span className={styles.title}>My Vault</span></h1>
            <h2>Save in your private vault everything that matters for you</h2>
            <Link to="/vault" className="uk-button uk-button-primary uk-button-large">Get your privacy</Link>
          </div>
        </div>
      </div>
      <div className={`uk-grid-medium uk-grid-match uk-child-width-expand@s uk-text-center ${styles.benefits}`} data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom">
        <div>
          <div className="uk-card uk-card-primary uk-card-body">
            <span data-uk-icon="icon: happy; ratio: 1.5" />
            <h3 className="uk-card-title">So easy!</h3>
            <p>
              Using a secured vault is become so easy. Just few clicks and your private note is ready.
            </p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-secondary uk-card-body">
            <span data-uk-icon="icon: file-edit; ratio: 1.5" />
            <h3>Magic Note ;)</h3>
            <p>
              Save whatever you want in your note: password, bank id, the name of your cat, etc without limit.
            </p>
          </div>
          </div>
        <div>
          <div className="uk-card uk-card-primary uk-card-body">
            <span data-uk-icon="icon: lock; ratio: 1.5" />
            <h3>Secured as ever!</h3>
            <p>
              The vault is encrypted with AES 256 and stored on your Google Drive : your data are safe!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.context} data-uk-scrollspy="cls: uk-animation-slide-down">
        <h3>Are you safe online ?</h3>
        <p>
          Today, there are online accounts for everything : bank, taxes, family allowances, rent, job, photos etc.
          If someone has access to these accounts, he can <strong>control your life</strong>. So you need to be very careful in order to <strong>protect yourself and your family</strong>.
        </p>
        <p>
          Everyday, <a href="https://haveibeenpwned.com/">online accounts are compromised</a> because of passwords too weak or used for several websites. You absolutely need to use an unique 16 length password for each of yours websites.
          We understand nobody can remember thousands of passwords. That why we have created this <strong>secured vault</strong>.
        </p>
      </div>
      <div className={styles.savePassword}>
        <div className={styles.partLeft}>
          <h3>The magic trick</h3>
          <p>
            <strong>My Vault</strong> is very original because it uses Google
            Drive to store your password.
            So you don't need to create an account on our website.
            But as you cannot trust Google, we have encrypted the vault so even
            Google cannot read your data.
            Besides, using Google Drive brings more benefits:
            there is no limit except your cloud storage limit and the storage is free.
          </p>
        </div>
        <img src="/src/img/google-drive.png" alt="google drive" className={styles.imgRight} />
      </div>
      <div className={styles.onePassword}>
        <div className={`uk-inline-clip uk-transition-toggle ${styles.imgLeft}`}>
          <img src="/src/img/spartiates.jpeg" alt="spartiates" />
          <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
            <p className="uk-h4 uk-margin-remove">7,000 greeks blocked more than 1,000,000 persians for 2 days on a little road.</p>
          </div>
        </div>
        <div className={styles.partRight}>
          <h3>One password to rule them all</h3>
          <p>
          With <strong>My Vault</strong>, you only need to remember one password.
          We store all the others for you.
          And for those thinking that it is not safe not store all passwords in one place:
          be sure that it is safer to have only one front door that you know and you protect
          against everything than to have a strainer. Let me remind
          you <a href="https://en.wikipedia.org/wiki/Battle_of_Thermopylae" alt="Battle_of_Thermopylae">the battle of Thermopylae</a>...
          </p>
        </div>
      </div>
      <div className={styles.free}>
        <h3>Let's do it!</h3>
        <p>
        Our only concern is the protection of your data.
        This is our credo without business concerns. That is why this application is totally free and will remain free!
        The best way to help us is to be careful online, choose what data really matters for you and do everything to protect it.
        </p>
        <p>Take back the control of your data, Use <strong>My Vault</strong></p>
        <Link to="/vault" className="uk-button uk-button-secondary uk-button-large">Create your secured vault</Link>
      </div>
      <div className={styles.footer}>
        Made with <span data-uk-icon="icon: heart ; ratio: 0.7" /> from Grenoble

        <div className={styles.improvements}>

          Want to propose an improvement, describe a bug? Go to the <a href="https://github.com/save-password/save-password.github.io">github</a>
        </div>

      </div>
    </div>
  )
}

// <img src="/src/img/spartiates.jpeg" alt="spartiates"  />

//         In order to achieve our goal, we use the best technologies and work very hard to continually improve this application.


// <div className={styles.savePassword}>
//   <div className={styles.partLeft}>
//     <h3>Privacy first, without compromise!</h3>
//     <p>
//       Our only concern is the protection of your data.
//       In order to achieve this goal, we work very hard and use the best technologies!
//     </p>
//     <p>
//       First we have choosen Google Drive to protect you against basic attacks like &nbsp;
//       <a href="https://en.wikipedia.org/wiki/Brute-force_attack" onClick={openBruteForce}>brute-force attacks</a>
//       &nbsp;or <a href="https://en.wikipedia.org/wiki/Denial-of-service_attack" onClick={openDDos}>DDoS attacks</a>.
//       Notice that even if someone get access to your Google Drive, he could get
//       your password because the data are in special hidden folder.
//     </p>
//     <p>
//       Besides we use AES-256 encryption algorithm and the code of this application is
//       &nbsp;<a href="https://github.com/save-password/save-password.github.io/" onClick={openGithub}>public</a> so do not hesitate
//       to check it.
//     </p>
//   </div>
//   <img src="/src/img/google-drive.png" alt="privacy first" className={styles.imgRight} />
// </div>

LandingPage.propTypes = {
  className: PropTypes.string,
}

// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

// export default loader(Wizard, { Loader: null })
export default LandingPage
