import { saveVault } from './google-api'

/* global sjcl */
/* eslint no-eval: 0 */

const options = { mode: 'ccm', ks: 128 }

export const encrypt = (passphrase, noteContent) => {
  return new Promise((resolve, reject) => {
    // console.log('encrypt', noteContent)
    try {
      const txt = sjcl.encrypt(passphrase, JSON.stringify({ data: noteContent }),
      options, {})
      // const json = JSON.parse(txt)
      // const ciphertext = json.ct

      // console.log(sjcl.decrypt(passphrase, txt, options, {}))
      resolve(txt)
    } catch (e) {
      // console.log(e)
      reject(e)
    }
    // console.log('jsonSjcl', jsonSjcl)
    // const jsObject = eval(`(${jsonSjcl})`)
    // console.log('jsObject', jsObject)


    // const jsonSjcl = sjcl.encrypt(passphrase, JSON.stringify({ data: noteContent }), options, {})
    // saveVault({ data: ciphertext }).then(() => {
    //   resolve()
    // }).catch(() => {
    //   reject()
    // })
  })
}

export const decrypt = (passphrase, encrypted) => {
  return new Promise((resolve) => {
    const jsonSjcl = sjcl.decrypt(passphrase, encrypted, options, {})
    resolve(jsonSjcl)
  })
}
