import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";


const styles = {
  position: "relative",
  left: 584,
  right: 10,
  bottom: 30,
};


const ModalModalExample = () => (
  <Modal
    trigger={
      <div id="button">
        <Button style={styles} color="blue">
          Submit
        </Button>
      </div>
    }>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
      <Modal.Description>
        <Header>Score of the team you picked </Header>
        <p>These are the players your team was made of</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
