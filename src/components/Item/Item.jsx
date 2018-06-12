import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Octicon from 'react-octicon'

// import logo from './logo.svg'
import style from './Item.style'

class Item extends Component {
  render() {
    return (
      <li className={`Box-row Box-row--hover-gray ${style.Item}`}>
        <div className={style.name}>
          {this.props.item.name}
        </div>
        <div className={style.buttons}>
          <Octicon name="pencil" />
        </div>
      </li>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

// Section.defaultProps =

export default Item
