export const SET_NOTE = 'SET_NOTE'
export const setNote = (note) => {
  return {
    type: SET_NOTE,
    payload: note,
  }
}

export const SET_CONTENT = 'SET_CONTENT'
export const setContent = (content) => {
  return {
    type: SET_CONTENT,
    payload: content,
  }
}

export const SAVE_CONTENT = 'SAVE_CONTENT'
export const saveContent = () => {
  return {
    type: SAVE_CONTENT,
  }
}
