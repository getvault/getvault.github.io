import { setContent } from 'redux/note'

/* global firebase */
export const saveContent = event => (dispatch) => {
  dispatch(setContent(event.target.value))
}
