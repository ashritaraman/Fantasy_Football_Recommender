import _ from "lodash";
import React, { Component } from "react";
import {
  Form,
  Table,
  Pagination,
  Segment,
  Grid,
  Container,
  GridColumn,
  Header,
} from "semantic-ui-react";
import Combined from "./combined_gw_3.json";
import DropdownGK from "./DropdownGK.js";

export default class PlayerTable extends Component {
  state = {
    column: null,
    data: Combined,
    direction: "ascending",
    begin: 0,
    end: 15,
    pageNumber: 1,
    gameWeek: 2,
    team_a_col: "team_a_score_1",
    team_h_col: "team_h_score_1",
    val_col: "value_1",
  };

  handleSort = (clickedColumn) => () => {
    const { column, data, direction, begin, end } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending",
        begin: begin,
        end: end,
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  handlePageChange = (e, pageInfo) => {
    console.log("here");
    this.setState({
      begin: pageInfo.activePage * 15 - 15,
      end: pageInfo.activePage * 15,
    });
  };

  handleChange = (event) => {
    this.setState({ gameWeek: event.target.value });
  };

  render() {
    const {
      column,
      data,
      direction,
      begin,
      end,
      currData,
      gameWeek,
      team_a_col,
      team_h_col,
      val_col,
    } = this.state;

    return (
      <Segment basic padded="very">
        <Segment basic color="purple" padded="very">
          <Container text>
            <Header as="h2" textAlign="center">
              Player Information Table
            </Header>
            <div class="ui basic center aligned segment">
              <p class="biggerbodyfont">
                Select a game week to
                see the previous week's scores
            </p>
            </div>
          </Container>
        </Segment>
        <Form>
          <Grid columns={3} padded>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Choose a game week between 2-38</label>
                <input
                  type="number"
                  placeholder="2"
                  min={2}
                  max={38}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid>
        </Form>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>Previous Week Away Score</Table.HeaderCell>
              <Table.HeaderCell>Previous Week Home Score</Table.HeaderCell>
              <Table.HeaderCell>Value of player</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(
              this.state.data.slice(this.state.begin, this.state.end),
              ({
                position,
                name,
                team,
                team_a_score_1,
                team_h_score_1,
                value_1,
                team_a_score_2,
                team_h_score_2,
                value_2,
                team_a_score_3,
                team_h_score_3,
                value_3,
                team_a_score_4,
                team_h_score_4,
                value_4,
                team_a_score_5,
                team_h_score_5,
                value_5,
                team_a_score_6,
                team_h_score_6,
                value_6,
                team_a_score_7,
                team_h_score_7,
                value_7,
                team_a_score_8,
                team_h_score_8,
                value_8,
                team_a_score_9,
                team_h_score_9,
                value_9,
                team_a_score_10,
                team_h_score_10,
                value_10,
                team_a_score_11,
                team_h_score_11,
                value_11,
                team_a_score_12,
                team_h_score_12,
                value_12,
                team_a_score_13,
                team_h_score_13,
                value_13,
                team_a_score_14,
                team_h_score_14,
                value_14,
                team_a_score_15,
                team_h_score_15,
                value_15,
                team_a_score_16,
                team_h_score_16,
                value_16,
                team_a_score_17,
                team_h_score_17,
                value_17,
                team_a_score_18,
                team_h_score_18,
                value_18,
                team_a_score_19,
                team_h_score_19,
                value_19,
                team_a_score_20,
                team_h_score_20,
                value_20,
                team_a_score_21,
                team_h_score_21,
                value_21,
                team_a_score_22,
                team_h_score_22,
                value_22,
                team_a_score_23,
                team_h_score_23,
                value_23,
                team_a_score_24,
                team_h_score_24,
                value_24,
                team_a_score_25,
                team_h_score_25,
                value_25,
                team_a_score_26,
                team_h_score_26,
                value_26,
                team_a_score_27,
                team_h_score_27,
                value_27,
                team_a_score_28,
                team_h_score_28,
                value_28,
                team_a_score_29,
                team_h_score_29,
                value_29,
                team_a_score_30,
                team_h_score_30,
                value_30,
                team_a_score_31,
                team_h_score_31,
                value_31,
                team_a_score_32,
                team_h_score_32,
                value_32,
                team_a_score_33,
                team_h_score_33,
                value_33,
                team_a_score_34,
                team_h_score_34,
                value_34,
                team_a_score_35,
                team_h_score_35,
                value_35,
                team_a_score_36,
                team_h_score_36,
                value_36,
                team_a_score_37,
                team_h_score_37,
                value_37,
                team_a_score_38,
                team_h_score_38,
                value_38,
              }) => (
                  <Table.Row key={name}>
                    <Table.Cell>{position}</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{team}</Table.Cell>
                    <Table.Cell>
                      {this.state.gameWeek == 1
                        ? team
                        : this.state.gameWeek == 2
                          ? team_a_score_1
                          : this.state.gameWeek == 3
                            ? team_a_score_2
                            : this.state.gameWeek == 4
                              ? team_a_score_3
                              : this.state.gameWeek == 5
                                ? team_a_score_4
                                : this.state.gameWeek == 6
                                  ? team_a_score_5
                                  : this.state.gameWeek == 7
                                    ? team_a_score_6
                                    : this.state.gameWeek == 8
                                      ? team_a_score_7
                                      : this.state.gameWeek == 9
                                        ? team_a_score_8
                                        : this.state.gameWeek == 10
                                          ? team_a_score_9
                                          : this.state.gameWeek == 11
                                            ? team_a_score_10
                                            : this.state.gameWeek == 12
                                              ? team_a_score_11
                                              : this.state.gameWeek == 13
                                                ? team_a_score_12
                                                : this.state.gameWeek == 14
                                                  ? team_a_score_13
                                                  : this.state.gameWeek == 15
                                                    ? team_a_score_14
                                                    : this.state.gameWeek == 16
                                                      ? team_a_score_15
                                                      : this.state.gameWeek == 17
                                                        ? team_a_score_16
                                                        : this.state.gameWeek == 18
                                                          ? team_a_score_17
                                                          : this.state.gameWeek == 19
                                                            ? team_a_score_18
                                                            : this.state.gameWeek == 20
                                                              ? team_a_score_19
                                                              : this.state.gameWeek == 21
                                                                ? team_a_score_20
                                                                : this.state.gameWeek == 22
                                                                  ? team_a_score_21
                                                                  : this.state.gameWeek == 23
                                                                    ? team_a_score_22
                                                                    : this.state.gameWeek == 24
                                                                      ? team_a_score_23
                                                                      : this.state.gameWeek == 25
                                                                        ? team_a_score_24
                                                                        : this.state.gameWeek == 26
                                                                          ? team_a_score_25
                                                                          : this.state.gameWeek == 27
                                                                            ? team_a_score_26
                                                                            : this.state.gameWeek == 28
                                                                              ? team_a_score_27
                                                                              : this.state.gameWeek == 29
                                                                                ? team_a_score_28
                                                                                : this.state.gameWeek == 30
                                                                                  ? team_a_score_29
                                                                                  : this.state.gameWeek == 31
                                                                                    ? team_a_score_30
                                                                                    : this.state.gameWeek == 32
                                                                                      ? team_a_score_31
                                                                                      : this.state.gameWeek == 33
                                                                                        ? team_a_score_32
                                                                                        : this.state.gameWeek == 34
                                                                                          ? team_a_score_33
                                                                                          : this.state.gameWeek == 35
                                                                                            ? team_a_score_34
                                                                                            : this.state.gameWeek == 36
                                                                                              ? team_a_score_35
                                                                                              : this.state.gameWeek == 37
                                                                                                ? team_a_score_36
                                                                                                : this.state.gameWeek == 38
                                                                                                  ? team_a_score_37
                                                                                                  : team_a_score_38}
                    </Table.Cell>
                    <Table.Cell>
                      {this.state.gameWeek == 1
                        ? team
                        : this.state.gameWeek == 2
                          ? team_h_score_1
                          : this.state.gameWeek == 3
                            ? team_h_score_2
                            : this.state.gameWeek == 4
                              ? team_h_score_3
                              : this.state.gameWeek == 5
                                ? team_h_score_4
                                : this.state.gameWeek == 6
                                  ? team_h_score_5
                                  : this.state.gameWeek == 7
                                    ? team_h_score_6
                                    : this.state.gameWeek == 8
                                      ? team_h_score_7
                                      : this.state.gameWeek == 9
                                        ? team_h_score_8
                                        : this.state.gameWeek == 10
                                          ? team_h_score_9
                                          : this.state.gameWeek == 11
                                            ? team_h_score_10
                                            : this.state.gameWeek == 12
                                              ? team_h_score_11
                                              : this.state.gameWeek == 13
                                                ? team_h_score_12
                                                : this.state.gameWeek == 14
                                                  ? team_h_score_13
                                                  : this.state.gameWeek == 15
                                                    ? team_h_score_14
                                                    : this.state.gameWeek == 16
                                                      ? team_h_score_15
                                                      : this.state.gameWeek == 17
                                                        ? team_h_score_16
                                                        : this.state.gameWeek == 18
                                                          ? team_h_score_17
                                                          : this.state.gameWeek == 19
                                                            ? team_h_score_18
                                                            : this.state.gameWeek == 20
                                                              ? team_h_score_19
                                                              : this.state.gameWeek == 21
                                                                ? team_h_score_20
                                                                : this.state.gameWeek == 22
                                                                  ? team_h_score_21
                                                                  : this.state.gameWeek == 23
                                                                    ? team_h_score_22
                                                                    : this.state.gameWeek == 24
                                                                      ? team_h_score_23
                                                                      : this.state.gameWeek == 25
                                                                        ? team_h_score_24
                                                                        : this.state.gameWeek == 26
                                                                          ? team_h_score_25
                                                                          : this.state.gameWeek == 27
                                                                            ? team_h_score_26
                                                                            : this.state.gameWeek == 28
                                                                              ? team_h_score_27
                                                                              : this.state.gameWeek == 29
                                                                                ? team_h_score_28
                                                                                : this.state.gameWeek == 30
                                                                                  ? team_h_score_29
                                                                                  : this.state.gameWeek == 31
                                                                                    ? team_h_score_30
                                                                                    : this.state.gameWeek == 32
                                                                                      ? team_h_score_31
                                                                                      : this.state.gameWeek == 33
                                                                                        ? team_h_score_32
                                                                                        : this.state.gameWeek == 34
                                                                                          ? team_h_score_33
                                                                                          : this.state.gameWeek == 35
                                                                                            ? team_h_score_34
                                                                                            : this.state.gameWeek == 36
                                                                                              ? team_h_score_35
                                                                                              : this.state.gameWeek == 37
                                                                                                ? team_h_score_36
                                                                                                : this.state.gameWeek == 38
                                                                                                  ? team_h_score_37
                                                                                                  : team_h_score_38}
                    </Table.Cell>
                    <Table.Cell>
                      {this.state.gameWeek == 2
                        ? value_2
                        : this.state.gameWeek == 3
                          ? value_3
                          : this.state.gameWeek == 4
                            ? value_14
                            : this.state.gameWeek == 5
                              ? value_5
                              : this.state.gameWeek == 6
                                ? value_6
                                : this.state.gameWeek == 7
                                  ? value_7
                                  : this.state.gameWeek == 8
                                    ? value_8
                                    : this.state.gameWeek == 9
                                      ? value_9
                                      : this.state.gameWeek == 10
                                        ? value_10
                                        : this.state.gameWeek == 11
                                          ? value_11
                                          : this.state.gameWeek == 12
                                            ? value_12
                                            : this.state.gameWeek == 13
                                              ? value_13
                                              : this.state.gameWeek == 14
                                                ? value_14
                                                : this.state.gameWeek == 15
                                                  ? value_15
                                                  : this.state.gameWeek == 16
                                                    ? value_16
                                                    : this.state.gameWeek == 17
                                                      ? value_17
                                                      : this.state.gameWeek == 18
                                                        ? value_18
                                                        : this.state.gameWeek == 19
                                                          ? value_19
                                                          : this.state.gameWeek == 20
                                                            ? value_20
                                                            : this.state.gameWeek == 21
                                                              ? value_21
                                                              : this.state.gameWeek == 22
                                                                ? value_22
                                                                : this.state.gameWeek == 23
                                                                  ? value_23
                                                                  : this.state.gameWeek == 24
                                                                    ? value_24
                                                                    : this.state.gameWeek == 25
                                                                      ? value_25
                                                                      : this.state.gameWeek == 26
                                                                        ? value_26
                                                                        : this.state.gameWeek == 27
                                                                          ? value_27
                                                                          : this.state.gameWeek == 28
                                                                            ? value_28
                                                                            : this.state.gameWeek == 29
                                                                              ? value_29
                                                                              : this.state.gameWeek == 30
                                                                                ? value_30
                                                                                : this.state.gameWeek == 31
                                                                                  ? value_31
                                                                                  : this.state.gameWeek == 32
                                                                                    ? value_32
                                                                                    : this.state.gameWeek == 33
                                                                                      ? value_33
                                                                                      : this.state.gameWeek == 34
                                                                                        ? value_34
                                                                                        : this.state.gameWeek == 35
                                                                                          ? value_35
                                                                                          : this.state.gameWeek == 36
                                                                                            ? value_36
                                                                                            : this.state.gameWeek == 37
                                                                                              ? value_37
                                                                                              : this.state.gameWeek == 38
                                                                                                ? value_38
                                                                                                : value_38}
                    </Table.Cell>
                  </Table.Row>
                )
            )}
          </Table.Body>
          <Table.Footer>
            <Pagination
              defaultActivePage={1}
              totalPages={Math.ceil(data.length / 15)}
              onPageChange={this.handlePageChange}
            />
          </Table.Footer>
        </Table>
      </Segment >
    );
  }
}
