import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';


class Signup extends Component  {

  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right" onChange={this.handleChange} />
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" onChange={this.handleChange} />
                <Input label="Your password" icon="lock" group type="password"  onChange={this.handleChange} validate/>
                <Input label="Confirm your password" icon="exclamation-triangle" group type="password" validate error="wrong" success="right" onChange={this.handleChange} />

              </div>
              <div className="text-center">
                <Button color="primary">Register</Button>
              </div>
            </form>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    );
  }
};

export default Signup;
