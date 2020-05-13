import React, { Component } from "react";
import {
  Form,
  Container,
  Grid,
  Header,
  Image,
  Button,
  Modal,
  Message,
  Dropdown,
  Segment,
} from "semantic-ui-react";
import PlayersGK from "./player_gk.json";
import PlayersDef from "./player_def.json";
import PlayersFwd from "./player_fwd.json";
import PlayersMid from "./player_mid.json";
import PlayerScores from "./combined_gw_2.json";
import PlayerValues from "./combined_gw_3.json";
import PlayerPoints from "./combined_gw_4.json";
import ModalPic from "./modal_pic.png";
import NNTeams from "./nn_teams_by_gw_2.json";

class FormExampleSubcomponentControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalkeeper1: "",
      goalkeeper2: "",
      defender1: "",
      defender2: "",
      defender3: "",
      defender4: "",
      defender5: "",
      midfielder1: "",
      midfielder2: "",
      midfielder3: "",
      midfielder4: "",
      midfielder5: "",
      forward1: "",
      forward2: "",
      forward3: "",

      goalkeeper1nn: "",
      goalkeeper2nn: "",
      defender1nn: "",
      defender2nn: "",
      defender3nn: "",
      defender4nn: "",
      defender5nn: "",
      midfielder1nn: "",
      midfielder2nn: "",
      midfielder3nn: "",
      midfielder4nn: "",
      midfielder5nn: "",
      forward1nn: "",
      forward2nn: "",
      forward3nn: "",
      scorenn: "",
      gameWeek: 1,
      score: 0,
      value: 0,
      noneError: true,
      valueError: true,
      formError: true,
      sameTeamError: true,
      samePlayerError: true,
      errorMessage: "hi",
      styles: {
        position: "relative",
        left: 500,
        right: 10,
        bottom: 30,
      },
    };
  }

  handleChange1 = (event, data) => {
    this.setState({ goalkeeper1: data.value });
  };

  handleChange2 = (event, data) => {
    this.setState({ goalkeeper2: data.value });
  };

  handleChangeDef1 = (event, data) => {
    this.setState({ defender1: data.value });
  };

  handleChangeDef2 = (event, data) => {
    this.setState({ defender2: data.value });
  };

  handleChangeDef3 = (event, data) => {
    this.setState({ defender3: data.value });
  };

  handleChangeDef4 = (event, data) => {
    this.setState({ defender4: data.value });
  };

  handleChangeDef5 = (event, data) => {
    this.setState({ defender5: data.value });
  };

  handleChangeMid1 = (event, data) => {
    this.setState({ midfielder1: data.value });
  };
  handleChangeMid2 = (event, data) => {
    this.setState({ midfielder2: data.value });
  };
  handleChangeMid3 = (event, data) => {
    this.setState({ midfielder3: data.value });
  };
  handleChangeMid4 = (event, data) => {
    this.setState({ midfielder4: data.value });
  };
  handleChangeMid5 = (event, data) => {
    this.setState({ midfielder5: data.value });
  };

  handleChangeForw1 = (event, data) => {
    this.setState({ forward1: data.value });
  };
  handleChangeForw2 = (event, data) => {
    this.setState({ forward2: data.value });
  };
  handleChangeForw3 = (event, data) => {
    this.setState({ forward3: data.value });
  };

  handleChangeGW = (event) => {
    this.setState({ gameWeek: event.target.value });
  };

  onSubmit = (event) => {
    let error = false;
    var results = 0;
    var vals = 0;
    //for goalkeeper 1
    //const player_scores = PlayerScores;
    const player_values = PlayerValues;
    const player_points = PlayerPoints;
    const nn_teams = NNTeams;
    var team_list = [];
    team_list.push(this.state.goalkeeper1);
    team_list.push(this.state.goalkeeper2);
    team_list.push(this.state.defender1);
    team_list.push(this.state.defender2);
    team_list.push(this.state.defender3);
    team_list.push(this.state.defender4);
    team_list.push(this.state.defender5);
    team_list.push(this.state.midfielder1);
    team_list.push(this.state.midfielder2);
    team_list.push(this.state.midfielder3);
    team_list.push(this.state.midfielder4);
    team_list.push(this.state.midfielder5);
    team_list.push(this.state.forward1);
    team_list.push(this.state.forward2);
    team_list.push(this.state.forward3);
    for (var i = 0; i < nn_teams.length; i++) {
      var team = nn_teams[i];
      if (this.state.gameWeek == Number(team.gameweek)) {
        this.setState({ goalkeeper1nn: team.goalkeeper1 });
        this.setState({ goalkeeper2nn: team.goalkeeper2 });
        this.setState({ defender1nn: team.defender1 });
        this.setState({ defender2nn: team.defender2 });
        this.setState({ defender3nn: team.defender3 });
        this.setState({ defender4nn: team.defender4 });
        this.setState({ defender5nn: team.defender5 });
        this.setState({ forward1nn: team.forward1 });
        this.setState({ forward2nn: team.forward2 });
        this.setState({ forward3nn: team.forward3 });
        this.setState({ scorenn: team.score });
        this.setState({ midfielder1nn: team.midfielder1 });
        this.setState({ midfielder2nn: team.midfielder2 });
        this.setState({ midfielder3nn: team.midfielder3 });
        this.setState({ midfielder4nn: team.midfielder4 });
        this.setState({ midfielder5nn: team.midfielder5 });
      }
    }
    var player_teams = [];
    for (var i = 0; i < player_points.length; i++) {
      var player = player_points[i];
      var player1 = player_values[i];

      if (team_list.includes(player.name)) {
        player_teams.push(player.team);
        if (Number(this.state.gameWeek) == 1) {
          results += Number(player.total_points_1);
          vals += Number(player1.value_1);
        }
        if (Number(this.state.gameWeek) == 2) {
          results += Number(player.total_points_2);
          vals += Number(player1.value_2);
        }
        if (Number(this.state.gameWeek) == 3) {
          results += Number(player.total_points_3);
          vals += Number(player1.value_3);
        }
        if (Number(this.state.gameWeek) == 4) {
          results += Number(player.total_points_4);
          vals += Number(player1.value_4);
        }
        if (Number(this.state.gameWeek) == 5) {
          results += Number(player.total_points_5);
          vals += Number(player1.value_5);
        }
        if (Number(this.state.gameWeek) == 6) {
          results += Number(player.total_points_6);
          vals += Number(player1.value_6);
        }
        if (Number(this.state.gameWeek) == 7) {
          results += Number(player.total_points_7);
          vals += Number(player1.value_7);
        }
        if (Number(this.state.gameWeek) == 8) {
          results += Number(player.total_points_8);
          vals += Number(player1.value_8);
        }
        if (Number(this.state.gameWeek) == 9) {
          results += Number(player.total_points_9);
          vals += Number(player1.value_9);
        }
        if (Number(this.state.gameWeek) == 10) {
          results += Number(player.total_points_10);
          vals += Number(player1.value_10);
        }
        if (Number(this.state.gameWeek) == 11) {
          results += Number(player.total_points_11);
          vals += Number(player1.value_11);
        }
        if (Number(this.state.gameWeek) == 12) {
          results += Number(player.total_points_12);
          vals += Number(player1.value_12);
        }
        if (Number(this.state.gameWeek) == 13) {
          results += Number(player.total_points_13);
          vals += Number(player1.value_13);
        }
        if (Number(this.state.gameWeek) == 14) {
          results += Number(player.total_points_14);
          vals += Number(player1.value_14);
        }
        if (Number(this.state.gameWeek) == 15) {
          results += Number(player.total_points_15);
          vals += Number(player1.value_15);
        }
        if (Number(this.state.gameWeek) == 16) {
          results += Number(player.total_points_16);
          vals += Number(player1.value_16);
        }
        if (Number(this.state.gameWeek) == 17) {
          results += Number(player.total_points_17);
          vals += Number(player1.value_17);
        }
        if (Number(this.state.gameWeek) == 18) {
          results += Number(player.total_points_18);
          vals += Number(player1.value_18);
        }
        if (Number(this.state.gameWeek) == 19) {
          results += Number(player.total_points_19);
          vals += Number(player1.value_19);
        }
        if (Number(this.state.gameWeek) == 20) {
          results += Number(player.total_points_20);
          vals += Number(player1.value_20);
        }

        if (Number(this.state.gameWeek) == 21) {
          results += Number(player.total_points_21);
          vals += Number(player1.value_21);
        }

        if (Number(this.state.gameWeek) == 22) {
          results += Number(player.total_points_22);
          vals += Number(player1.value_22);
        }

        if (Number(this.state.gameWeek) == 23) {
          results += Number(player.total_points_23);
          vals += Number(player1.value_23);
        }

        if (Number(this.state.gameWeek) == 24) {
          results += Number(player.total_points_24);
          vals += Number(player1.value_24);
        }

        if (Number(this.state.gameWeek) == 25) {
          results += Number(player.total_points_25);
          vals += Number(player1.value_25);
        }
        if (Number(this.state.gameWeek) == 26) {
          results += Number(player.total_points_26);
          vals += Number(player1.value_26);
        }
        if (Number(this.state.gameWeek) == 27) {
          results += Number(player.total_points_27);
          vals += Number(player1.value_27);
        }
        if (Number(this.state.gameWeek) == 28) {
          results += Number(player.total_points_28);
          vals += Number(player1.value_28);
        }
        if (Number(this.state.gameWeek) == 29) {
          results += Number(player.total_points_29);
          vals += Number(player1.value_29);
        }
        if (Number(this.state.gameWeek) == 30) {
          results += Number(player.total_points_30);
          vals += Number(player1.value_30);
        }
        if (Number(this.state.gameWeek) == 31) {
          results += Number(player.total_points_31);
          vals += Number(player1.value_31);
        }
        if (Number(this.state.gameWeek) == 32) {
          results += Number(player.total_points_32);
          vals += Number(player1.value_32);
        }
        if (Number(this.state.gameWeek) == 33) {
          results += Number(player.total_points_33);
          vals += Number(player1.value_33);
        }

        if (Number(this.state.gameWeek) == 34) {
          results += Number(player.total_points_34);
          vals += Number(player1.value_34);
        }
        if (Number(this.state.gameWeek) == 35) {
          results += Number(player.total_points_35);
          vals += Number(player1.value_35);
        }
        if (Number(this.state.gameWeek) == 36) {
          results += Number(player.total_points_36);
          vals += Number(player1.value_36);
        }
        if (Number(this.state.gameWeek) == 37) {
          results += Number(player.total_points_37);
          vals += Number(player1.value_37);
        }
        if (Number(this.state.gameWeek) == 38) {
          results += Number(player.total_points_38);
          vals += Number(player1.value_38);
        }
      }
    }
    this.setState({ score: results });
    this.setState({ value: vals });
    var hasTeamErr = false;
    for (var i = 0; i < player_teams.length - 1; i++) {
      var counti = 0;
      for (var j = i + 1; j < player_teams.length; j++) {
        if (player_teams[i] === player_teams[j]) {
          counti += 1;
        }
      }
      if (counti > 3) {
        hasTeamErr = true;
        break;
      }
    }

    if (
      this.state.gameWeek === 1 ||
      this.state.goalkeeper1 === "" ||
      this.state.goalkeeper2 === "" ||
      this.state.defender1 === "" ||
      this.state.defender2 === "" ||
      this.state.defender3 === "" ||
      this.state.defender4 === "" ||
      this.state.defender5 === "" ||
      this.state.midfielder1 === "" ||
      this.state.midfielder2 === "" ||
      this.state.midfielder3 === "" ||
      this.state.midfielder4 === "" ||
      this.state.midfielder5 === "" ||
      this.state.forward1 === "" ||
      this.state.forward2 === "" ||
      this.state.forward3 === ""
    ) {
      this.setState({ noneError: true });
    } else {
      this.setState({ noneError: false });
    }
    if (vals <= 1000) {
      this.setState({ valueError: false });
      error = false;
    } else {
      this.setState({ valueError: true });
      error = true;
    }
    if (
      this.state.goalkeeper1 === this.state.goalkeeper2 ||
      this.state.defender1 === this.state.defender2 ||
      this.state.defender1 === this.state.defender3 ||
      this.state.defender1 === this.state.defender4 ||
      this.state.defender1 === this.state.defender5 ||
      this.state.defender2 === this.state.defender3 ||
      this.state.defender2 === this.state.defender4 ||
      this.state.defender2 === this.state.defender5 ||
      this.state.defender3 === this.state.defender4 ||
      this.state.defender3 === this.state.defender5 ||
      this.state.defender4 === this.state.defender5 ||
      this.state.midfielder1 === this.state.midfielder2 ||
      this.state.midfielder1 === this.state.midfielder3 ||
      this.state.midfielder1 === this.state.midfielder4 ||
      this.state.midfielder1 === this.state.midfielder5 ||
      this.state.midfielder2 === this.state.midfielder3 ||
      this.state.midfielder2 === this.state.midfielder4 ||
      this.state.midfielder2 === this.state.midfielder5 ||
      this.state.midfielder3 === this.state.midfielder4 ||
      this.state.midfielder3 === this.state.midfielder5 ||
      this.state.midfielder4 === this.state.midfielder5 ||
      this.state.forward1 === this.state.forward2 ||
      this.state.forward1 === this.state.forward3 ||
      this.state.forward2 === this.state.forward3
    ) {
      this.setState({ samePlayerError: true });
    } else {
      this.setState({ samePlayerError: false });
    }
    if (hasTeamErr) {
      this.setState({ sameTeamError: true });
    } else {
      this.setState({ sameTeamError: false });
    }
    if (error) {
      this.setState({ formError: true });
      return;
    } else {
      this.setState({ formError: false });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Segment basic padded="very" color="purple">
          <Header as="h2" textAlign="center">
            Team Selection Form
          </Header>
          <Form warning>
            <Message warning>
              Players can only be chosen once • At most 3 players
              can be from the same team • Your team's total value cannot
              exceed 1000
            </Message>
            <Grid columns={4} padded>
              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose a game week between 2-38</label>
                  <input
                    type="number"
                    placeholder="2"
                    min={2}
                    max={38}
                    onChange={this.handleChangeGW}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Goal Keeper 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersGK}
                    onChange={this.handleChange1}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Goal Keeper 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersGK}
                    onChange={this.handleChange2}
                  />
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose Defender 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef1}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Defender 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef2}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Defender 3</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef3}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Defender 4</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef4}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Defender 5</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersDef}
                    onChange={this.handleChangeDef5}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose Midfielder 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid1}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Midfielder 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid2}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Midfielder 3</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid3}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Midfielder 4</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid4}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Midfielder 5</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersMid}
                    onChange={this.handleChangeMid5}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field padded="very">
                  <label>Choose Forward 1</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersFwd}
                    onChange={this.handleChangeForw1}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Forward 2</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersFwd}
                    onChange={this.handleChangeForw2}
                  />
                </Form.Field>
                <Form.Field padded="very">
                  <label>Choose Forward 3</label>
                  <Dropdown
                    placeholder="Player"
                    fluid
                    search
                    selection
                    options={PlayersFwd}
                    onChange={this.handleChangeForw3}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form>
        </Segment>
        <Segment basic>
          <Modal
            closeIcon
            size="large"
            trigger={
              <div id="button">
                <Button
                  style={this.state.styles}
                  color="purple"
                  size="huge"
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </div>
            }
          >
            <Modal.Header> Results for game week {this.state.gameWeek} </Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Message color="purple" inverted tertiary>
                  {this.state.noneError ? (
                    <Segment color="red" inverted tertiary>
                      <Header color="white">Form Error </Header>
                      <p>Looks like you didn't finish the form!</p>
                    </Segment>
                  ) : this.state.valueError &&
                    this.state.samePlayerError &&
                    this.state.sameTeamError ? (
                        <Segment color="red" inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>
                            It looks like you chose the same player for multiple
                            positions, chose at least 3 players on the same team,
                            and the total value of team exceeds 1000, please choose
                            again
                      </p>
                        </Segment>
                      ) : this.state.samePlayerError && this.state.sameTeamError ? (
                        <Segment color="red" inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>
                            It looks like you chose the same player for multiple
                            positions and at least 3 players on the same team,
                            please choose again
                      </p>
                        </Segment>
                      ) : this.state.samePlayerError && this.state.valueError ? (
                        <Segment color="red" inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>
                            It looks like you chose the same player for multiple
                            positions and the total value of team exceeds 1000,
                            please choose again
                      </p>
                        </Segment>
                      ) : this.state.sameTeamError && this.state.valueError ? (
                        <Segment color="red" inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>
                            It looks like you chose at least 3 players on the same
                            team and the total value of team exceeds 1000, please
                            choose again
                      </p>
                        </Segment>
                      ) : this.state.samePlayerError ? (
                        <Segment color="red" inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>
                            It looks like you chose the same player for multiple
                            positions, please choose again
                      </p>
                        </Segment>
                      ) : this.state.valueError ? (
                        <Segment color="red" inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>
                            Total value of team exceeds 1000, please choose again
                      </p>
                        </Segment>
                      ) : this.state.sameTeamError ? (
                        <Segment color="red" inverted tertiary>
                          <Header color="white">Form Error </Header>
                          <p>
                            It looks like you chose at least 3 players on the same
                            team
                      </p>
                        </Segment>
                      ) : (
                                    <Segment>
                                      <Image size="medium" src={ModalPic} rounded centered />
                                      <Grid columns={2} padded>
                                        <Grid.Column>
                                          <Header>Your Team </Header>
                                          <p>
                                            <b>Score:</b> {this.state.score}{" "}
                                          </p>
                                          <p>
                                            <b>Goal Keepers:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.goalkeeper1}</li>
                                            <li>{this.state.goalkeeper2}</li>
                                          </ul>
                                          <p>
                                            <b>Defenders:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.defender1}</li>
                                            <li>{this.state.defender2}</li>
                                            <li>{this.state.defender3}</li>
                                            <li>{this.state.defender4}</li>
                                            <li>{this.state.defender5}</li>
                                          </ul>
                                          <p>
                                            <b>Midfielders:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.midfielder1}</li>
                                            <li>{this.state.midfielder2}</li>
                                            <li>{this.state.midfielder3}</li>
                                            <li>{this.state.midfielder4}</li>
                                            <li>{this.state.midfielder5}</li>
                                          </ul>
                                          <p>
                                            <b>Forwards:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.forward1}</li>
                                            <li>{this.state.forward2}</li>
                                            <li>{this.state.forward3}</li>
                                          </ul>
                                        </Grid.Column>
                                        <Grid.Column>
                                          <Header>AI Team</Header>
                                          <p>
                                            <b>Score:</b> {this.state.scorenn}{" "}
                                          </p>
                                          <p>
                                            <b>Goal Keepers:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.goalkeeper1nn}</li>
                                            <li>{this.state.goalkeeper2nn}</li>
                                          </ul>
                                          <p>
                                            <b>Defenders:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.defender1nn}</li>
                                            <li>{this.state.defender2nn}</li>
                                            <li>{this.state.defender3nn}</li>
                                            <li>{this.state.defender4nn}</li>
                                            <li>{this.state.defender5nn}</li>
                                          </ul>
                                          <p>
                                            <b>Midfielders:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.midfielder1nn}</li>
                                            <li>{this.state.midfielder2nn}</li>
                                            <li>{this.state.midfielder3nn}</li>
                                            <li>{this.state.midfielder4nn}</li>
                                            <li>{this.state.midfielder5nn}</li>
                                          </ul>
                                          <p>
                                            <b>Forwards:</b>
                                          </p>
                                          <ul>
                                            <li>{this.state.forward1nn}</li>
                                            <li>{this.state.forward2nn}</li>
                                            <li>{this.state.forward3nn}</li>
                                          </ul>
                                        </Grid.Column>
                                      </Grid>
                                    </Segment>
                                  )}
                </Message>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Segment>
      </Container>
    );
  }
}

export default FormExampleSubcomponentControl;
