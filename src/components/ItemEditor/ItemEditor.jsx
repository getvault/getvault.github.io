import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Octicon from 'react-octicon'

import Password from '../../libs/Password'

// import FontAwesome from 'react-fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'


import Modal from '../Modal'
import style from './ItemEditor.style'


class ImageEditor extends Component {
  constructor(props) {
    super(props)

    this.generatePassword = this.generatePassword.bind(this)

    this.state = {
      secretVisible: false,
    }
  }

  generatePassword() {
    const password = Password.generate()
    if (this.passwordInput) {
      let index = 0
      const interval = setInterval(() => {
        this.passwordInput.value = password.slice(0, index)
        index += 1
        if (index > password.length) {
          clearInterval(interval)
        }
      }, 50)
      // this.passwordInput.value = password
    }
  }

  render() {
    return (
      <Modal className={style.ItemEditor} onHide={this.props.onHide}>
        <form>
          <div className="form-group">
            <dt>
              <label htmlFor="section">Section</label>
            </dt>
            <dd>
              <select className={`form-select ${style.select}`}>
                <option>Select section</option>
                {
                  this.props
                    .availableSections
                    .map(section => (
                      <option
                        key={section.id}
                        value={section.id}
                      >
                        {section.name}
                      </option>
                    ))
                }
              </select>
            </dd>
          </div>
          <div className="form-group">
            <dt>
              <label htmlFor="section">Label</label>
            </dt>
            <dd>
              <input type="text" className="form-control" />
            </dd>
          </div>
          <div className="form-group">
            <dt>
              <label htmlFor="section">Secret</label>
            </dt>
            <dd>
              <div className="input-group">
                <input
                  type={this.state.secretVisible ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password, token, ssh key, ..."
                  ref={(e) => { this.passwordInput = e }}
                />
                <span className="input-group-button">
                  <button className={`btn tooltipped tooltipped-sw ${style.button}`} aria-label="Copy to clipboard">
                    <Octicon name="clippy" />
                  </button>
                </span>
              </div>
              <div className={style.secret}>
                <button
                  className={`tooltipped tooltipped-se ${style.button}`}
                  aria-label="Generate new password"
                  onClick={this.generatePassword}
                >
                  <Octicon name="sync" />
                </button>
                <button className={`tooltipped tooltipped-se ${style.button}`} aria-label="Add deadline">
                  <Octicon name="clock" />
                </button>
              </div>
            </dd>
          </div>
          <div className="form-group">
            <dt>
              <label htmlFor="section">More information</label>
            </dt>
            <dd>
              <textarea className={`form-control form-control-sm ${style.textarea}`} placeholder="Email you used, etc" />
            </dd>
          </div>
        </form>
        <div className={style.buttons}>
          <button className="btn" onClick={this.props.onHide}>Cancel</button>
          <div className={style.expand} />
          <button className="btn btn-primary">Save</button>
        </div>
      </Modal>
    )
  }
}

ImageEditor.propTypes = {
  availableSections: PropTypes.array,
  onHide: PropTypes.func,
}

ImageEditor.defaultProps = {
  availableSections: [],
  onHide: () => {},
}

export default ImageEditor
