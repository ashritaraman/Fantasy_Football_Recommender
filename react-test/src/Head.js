import React, { Component } from 'react'
import { Button, Dimmer, Image, Container, Label } from 'semantic-ui-react'
import pic from './pic.png';


export default class Head extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  handleClick = () => window.scrollTo({
    top: 600
  })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Button color='purple' size="massive">Pick Your Team</Button>
      </div>
    )

    return (
      <Container fluid>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          onClick={this.handleClick}
          blurring
          inverted
          size='fluid'
          src={pic}
        />
        <Dimmer inverted />
      </Container>
    )
  }
}