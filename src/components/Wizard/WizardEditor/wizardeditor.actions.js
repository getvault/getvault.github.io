import { setContent } from 'redux/note'

export const writeContent = content => (dispatch) => {
  dispatch(setContent(content))
}
