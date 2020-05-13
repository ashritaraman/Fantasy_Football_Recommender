import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import Players from './player_def.json'


const play = Players

const DropdownExampleMultipleSearchSelection = () => (
  <Dropdown
    placeholder='Player'
    fluid
    multiple
    search
    selection
    options={play}
  />
)

export default DropdownExampleMultipleSearchSelection