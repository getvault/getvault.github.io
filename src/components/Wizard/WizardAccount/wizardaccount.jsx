import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import styles from './wizardaccount.style'

/* eslint-disable react/no-danger */

const WizardAccount = ({ className, onClick }) => {

    return (
           <div className={`${styles.wizard}`}>
             <img className={styles.logo} src="src/img/google.png" alt="logo google" />
             <h2>Connect with your Google account</h2>
             <p className={`description ${styles.description}`}>
               All your data will be stored in an encrypted vault on your Google Drive.
               So we need your permission.
             </p>

             <div className={`center ${styles.center}`}>
               <button className="uk-button uk-button-primary" onClick={onClick} >connect with google</button>
             </div>
             <p className={styles.help}>
                Don't worry, nothing is stored on ours
                servers, so nobody can access to your data through us. And even
                Google won't be able to read your passwords because it will be encrypted.
             </p>
           </div>
       )
}

// <div className={`${styles.wizard}`}>
//   <img className={styles.logo} src="src/img/google.png" alt="logo google" />
//   <h2>Connect with your Google account</h2>
//   <p className={styles.description}>
//     All your data will be stored in an encrypted vault on your Google Drive.
//     So we need your permission. { this.state.details ? <a href="" onClick={this.toggleDetails}>More details</a> : null }
//   </p>
//   { this.state.details ? <p className={styles.details}>Coucou</p> : null}
//
//   <div className={styles.center}>
//     <button className="uk-button uk-button-primary" >connect with google</button>
//   </div>
// </div>

// <div className={styles.footer}>
//   <ul className="uk-dotnav">
//     <li className="uk-active"><a href=""></a></li>
//     <li><a href=""></a></li>
//   </ul>
// </div>

/* eslint-enable react/no-danger */

WizardAccount.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}


// const LoadingIndicator = () => <div />
export default loader(WizardAccount, { Loader: null })
