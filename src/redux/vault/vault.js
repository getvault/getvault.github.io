import {
  SET_PASSPHRASE,
  SET_TMP_PASSPHRASE,
  SET_TMP_PASSPHRASE_CONFIRMATION,
  SAVE_PASSPHRASE,
  SET_ENCRYPTED_CONTENT,
  SET_DECRYPTION_ERROR,
  SET_DECRYPTED,
  SET_LOADING,
  SET_SAVING_STATE,
} from './vault.actions'

export const initState = {
  passphrase: '',
  tmpPassphrase: '',
  tmpPassphraseConfirmation: '',
  encryptedContent: '',
  decryptionError: '',
  minScore: 16,
  loading: false,
  isDecrypted: false,
  savingState: 'saved',
}
export const initAction = { type: 'UNKWOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
  case SET_PASSPHRASE: return {
    ...state,
    passphrase: action.payload,
  }
  case SAVE_PASSPHRASE: return {
    ...state,
    passphrase: state.tmpPassphrase,
  }
  case SET_TMP_PASSPHRASE: return { ...state, tmpPassphrase: action.payload }
  case SET_TMP_PASSPHRASE_CONFIRMATION:
    return { ...state, tmpPassphraseConfirmation: action.payload }
  case SET_ENCRYPTED_CONTENT: return { ...state, encryptedContent: action.payload }
  case SET_DECRYPTION_ERROR: return { ...state, decryptionError: action.payload }
  case SET_DECRYPTED: return { ...state, isDecrypted: action.payload, decryptionError: !action.payload }
  case SET_LOADING: return { ...state, loading: action.payload }
  case SET_SAVING_STATE: return { ...state, savingState: action.payload }
  default: return state
  }
}
