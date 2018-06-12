import React, { Component } from 'react'
// import logo from './logo.svg'
import style from './Vault.style'
import ItemEditor from '../ItemEditor'
import Section from '../Section'

class Vault extends Component {
  constructor(props) {
    super(props)

    this.hideEditor = this.hideEditor.bind(this)
    this.addPassword = this.addPassword.bind(this)

    this.state = {
      editor: false,
      sections: {
        toto: {
          id: 'toto',
          name: 'Perso',
          items: {
            1: {
              name: 'Impots',
            },
            2: {
              name: 'Caf',
            },
          },
        },
        titi: {
          id: 'titi',
          name: 'Pollen Metrology',
          items: {
            1: {
              name: 'ssh',
            },
            2: {
              name: 'titi',
            },
          },
        },
      },
    }
  }

  addPassword() {
    this.setState({
      editor: true,
    })
  }

  hideEditor() {
    this.setState({
      editor: false,
    })
  }

  render() {
    return (
      <div className={style.Vault}>
        <div className={style.toolbar}>
          <div className={style.left}>
            <input type="text" className={`form-control header-search-input ${style.search}`} placeholder="Search" aria-label="Search" />
          </div>
          cxwx
          <button
            className={`btn btn-primary ${style.addPassword}`}
            onClick={this.addPassword}
          >
            Add password
          </button>
        </div>

        {
          this.state.editor ?
            <ItemEditor
              availableSections={Object.values(this.state.sections)}
              onHide={this.hideEditor}
            /> : null}
        <div className={style.list}>
          {Object
            .keys(this.state.sections)
            .map(sectionId => (
              <Section
                key={this.state.sections[sectionId].id}
                section={this.state.sections[sectionId]}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default Vault
