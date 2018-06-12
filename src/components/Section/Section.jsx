import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import logo from './logo.svg'
import style from './Section.style'
import Item from '../Item'

class Section extends Component {
  render() {
    return (
      <div className={`Box Box--blue Box--condensed ${style.Section}`} id={`section-${this.props.section.id}`}>
        <div className="Box-header">
          <h3 className="Box-title">{this.props.section.name}</h3>
        </div>
        <ul>
          {Object
            .keys(this.props.section.items)
            .map(itemId => <Item item={this.props.section.items[itemId]} />)}
        </ul>
      </div>
    )
  }
}

Section.propTypes = {
  section: PropTypes.object.isRequired,
}

// Section.defaultProps =

export default Section
