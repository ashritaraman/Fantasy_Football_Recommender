import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

const ProjectDescription = () => (
  <Segment basic padded='very'>
    <Container text>
      <Header as='h2' textAlign='center'>Choose your fantasy soccer team 🥅</Header>
      <p>
        Welcome to our Fantasy Soccer Team Predictor! Let's see if you can
        pick a team to beat our AI! <br />
        <br />⚽ A team is made up of 2 goal keepers, 5 defenders, 5 midfielders, and 3 forwards<br />
        <br />⚽ Check out the table below to see player information based on a game week.
        The table contains information such as the player's name,
        team, position, and scores based on the selected game week. Selecting a game week shows player's scores from the previous week  <br />
        <br />⚽ Select a game week and your players. When you click submit,
        you can see how your team does compared to our AI. <br />
        <br />⚽ See if you can beat our AI--good luck! 😁<br />
      </p>
    </Container>
  </Segment >
)

export default ProjectDescription