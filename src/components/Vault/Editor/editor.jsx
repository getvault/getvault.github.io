import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import styles from './editor.style'

/* eslint-disable react/no-danger */

const Editor = ({ className, content, onChange }) => {
  return (
    <textarea className={`${styles.editor} ${className}`} placeholder="Write your secrets" value={content} onChange={onChange} />
  )
}

/* eslint-enable react/no-danger */

Editor.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default loader(Editor, { Loader: null })
