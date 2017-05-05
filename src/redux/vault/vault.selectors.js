export const getPassphrase = state => state.vault.passphrase
export const getTmpPassphrase = state => state.vault.tmpPassphrase
export const getTmpPassphraseConfirmation = state => state.vault.tmpPassphraseConfirmation
export const getTmpScore = (state) => {
  if (state.vault.tmpPassphrase && typeof state.vault.tmpPassphrase === 'string') {
    return state.vault.tmpPassphrase.length
  }
  return 0
}
export const getMinScore = state => state.vault.minScore
export const getEncryptedContent = state => state.vault.encryptedContent
export const getDecryptionError = state => state.vault.decryptionError
export const isDecrypted = state => state.vault.isDecrypted
export const getLoading = state => state.vault.loading
export const getSavingState = state => state.vault.savingState
