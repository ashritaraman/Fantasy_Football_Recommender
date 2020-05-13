import _ from 'lodash'
import React from 'react'
import { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
import Players from './player_gk.json'


const play = Players

class DropdownExampleMultipleSearchSelection extends Component {

  state = {
    defender: [],
    fwd: [],
    list: [],
  }

  handleChange = (event, data) => {
    console.log(data.value);
  }

  render() {
    return (
      <Dropdown
        placeholder='Player'
        fluid
        search
        selection
        options={play}
        onChange={this.handleChange}
      />

    );
  }

}

export default DropdownExampleMultipleSearchSelection;