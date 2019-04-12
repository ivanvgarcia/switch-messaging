import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  handleChange = () => {};
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="red" textAlign="center">
            <Icon name="puzzle piece" color="red" />
            Register for Switch Messaging
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                label="Username"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                type="text"
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                label="Email"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                type="text"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                label="Password"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
              />
              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                label="Password Confirmation"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                type="password"
              />
              <Button color="red" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
