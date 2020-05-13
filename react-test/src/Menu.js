import React, { Component } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Sticky>
        <Menu stackable>


          <Menu.Item
            name='sign-in'
            active={activeItem === 'sign-in'}
          >
            Fantasy Soccer Predictor
        </Menu.Item>
        </Menu>
      </Sticky>
    )
  }
}