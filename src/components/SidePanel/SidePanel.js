import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";

class SidePanel extends Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#ef2f09", fontSize: "1.2rem" }}
      >
        <UserPanel />
        <Channels />
      </Menu>
    );
  }
}

export default SidePanel;
