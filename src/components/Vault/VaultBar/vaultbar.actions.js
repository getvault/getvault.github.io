import { saveContent } from 'redux/note'
import { setEncryptedContent } from 'redux/vault'
import { encrypt } from '../../../services/encryption'
import { saveVault } from '../../../services/google-api'

export const saveNote = (event, passphrase, content) => (dispatch) => {

  encrypt(passphrase, content).then((ciphertext) => {
    dispatch(setEncryptedContent(ciphertext))
    return saveVault({ data: ciphertext })
  }).then((e) => {
    // console.log(e)
    dispatch(saveContent())
  }).catch(() => {
    console.log('ko')
  })
}
