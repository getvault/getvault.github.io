import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'
// import Octicon from 'react-octicon'
// import logo from './logo.svg'
import style from './Modal.style'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleEscape = this.handleEscape.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleEscape(event) {
    if (event.keyCode === 27) {
      this.props.onHide()
    }
  }

  handleClick(event) {
    if (event.keyCode === 27) {
      this.handleEscape()
    }

    event.preventDefault()
    event.stopPropagation()
  }

  render() {
    return (
      <div className={`${this.props.className} ${style.ModalBackground}`} role="background" onClick={this.props.onHide} onKeyPress={this.handleEscape}>
        <div className={style.Modal} onClick={this.handleClick} onKeyPress={this.handleEscape}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onHide: PropTypes.func,
}

Modal.defaultProps = {
  className: '',
  children: '',
  onHide: () => {},
}

export default Modal
