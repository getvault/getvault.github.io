import { SET_NOTE, SET_CONTENT, SAVE_CONTENT } from './note.actions'

export const initState = { content: '', savedContent: '', encryptedContent: '' }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
  case SET_NOTE: return action.payload
  case SET_CONTENT: return { ...state, content: action.payload }
  case SAVE_CONTENT: return { ...state, savedContent: state.content }
  default: return state
  }
}
