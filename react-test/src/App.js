import React, { Fragment } from "react";
import "./App.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import Head from "./Head";
import FormEx from "./FormEx";
import Menu from "./Menu";
import ProjectDescription from "./ProjectDescription";
import PlayerTable from "./PlayerTable";
import Modal from "./Modal";

function App() {
  return (
    <Fragment>
      <Menu />
      {/* <Grid columns={1} padded> */}
      <Head />
      <ProjectDescription />
      <PlayerTable />
      <FormEx />
      {/* </Grid> */}
    </Fragment>
  );
}

export default App;
