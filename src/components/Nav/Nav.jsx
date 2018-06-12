import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

// import Octicon from 'react-octicon'
// import logo from './logo.svg'
import style from './Nav.style'


class Nav extends Component {
  constructor(props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)

    this.state = {
      menu: false,
    }
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu,
    })
  }

  render() {
    return (
      <div className={style.Nav}>
        <div className={style.inner}>
          <div className={style.logo} />
          <ul className={style.left}>
            <li>
              <NavLink className={style.item} to="/vault">Passwords</NavLink>
            </li>
          </ul>
          <div className={style.right}>
            <div className="position-relative text-right">
              <button className={style.avatarButton} onClick={this.toggleMenu}>
                <img
                  className={`avatar avatar-small ${style.avatar}`}
                  src="https://avatars1.githubusercontent.com/u/4005226?s=40&v=4"
                  alt="avatar"

                />
              </button>
              {this.state.menu ?
                <div className={`Popover right-0 ${style.popover}`}>
                  <div className={`Popover-message Popover-message--top-right text-left p-4 mt-2 Box box-shadow-large ${style.content}`}>
                    ok
                  </div>
                </div> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//
// Nav.propTypes = {
//   onAdd: PropTypes.func,
// }
//
// Nav.defaultProps = {
//   onAdd: () => {},
// }

export default Nav
