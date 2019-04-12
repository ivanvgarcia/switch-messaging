import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";
import firebase from "../../firebase";

class UserPanel extends Component {
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signedout");
      });
  };

  dropdownOptions = currentUser => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{currentUser}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign out</span>
    }
  ];

  render() {
    const { currentUser } = this.props;
    return (
      <Grid style={{ background: "#ef2f09" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>Switch Messaging</Header.Content>
            </Header>
            <Header style={{ padding: "0.25em" }} as="h4" inverted>
              <Dropdown
                trigger={
                  <span>
                    <Image src={currentUser.photoURL} spaced="right" avatar />
                    {currentUser.displayName}
                  </span>
                }
                options={this.dropdownOptions(currentUser.displayName)}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
