export const SET_PASSPHRASE = 'SET_PASSPHRASE'
export const setPassphrase = (passphrase) => {
  return {
    type: SET_PASSPHRASE,
    payload: passphrase,
  }
}

export const SAVE_PASSPHRASE = 'SAVE_PASSPHRASE'
export const savePassphrase = () => {
  return {
    type: SAVE_PASSPHRASE,
  }
}

export const SET_TMP_PASSPHRASE = 'SET_TMP_PASSPHRASE'
export const setTmpPassphrase = (passphrase) => {
  return {
    type: SET_TMP_PASSPHRASE,
    payload: passphrase,
  }
}

export const SET_TMP_PASSPHRASE_CONFIRMATION = 'SET_TMP_PASSPHRASE_CONFIRMATION'
export const setTmpPassphraseConfirmation = (passphrase) => {
  return {
    type: SET_TMP_PASSPHRASE_CONFIRMATION,
    payload: passphrase,
  }
}

export const SET_ENCRYPTED_CONTENT = 'SET_ENCRYPTED_CONTENT'
export const setEncryptedContent = (encryptedContent) => {
  return {
    type: SET_ENCRYPTED_CONTENT,
    payload: encryptedContent,
  }
}

export const SET_DECRYPTED = 'SET_DECRYPTED'
export const setDecrypted = (isDecrypted) => {
  return {
    type: SET_DECRYPTED,
    payload: isDecrypted,
  }
}

export const SET_DECRYPTION_ERROR = 'SET_DECRYPTION_ERROR'
export const setDecryptionError = (error) => {
  return {
    type: SET_DECRYPTION_ERROR,
    payload: error,
  }
}

export const SET_LOADING = 'SET_LOADING'
export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    payload: loading,
  }
}

export const SET_SAVING_STATE = 'SET_SAVING_STATE'
export const setSavingState = (newState) => {
  return {
    type: SET_SAVING_STATE,
    payload: newState,
  }
}
