import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Users from '../fixtures/user';

const Container = styled.View`
  width: 90%;
  flex: 1;
  justify-content: center;
  align-self: center;
`;

const Credentials = styled.TextInput`
  margin: 10px;
  background-color: #FFFFFF;
`;

const LoginButton = styled.View`
  margin: 10px;
`;

@inject('rootStore')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login = () => {
    let match = false;
    let user = {};
    Users.forEach(item => {
      if (this.state.email === item.email && this.state.password === item.password) {
        match = true;
        user = item;
      }
    });
    this.props.rootStore.authenticate(user, match);
  }

  render() {
    return (
      <Container>
        <Credentials
          onChangeText={text => this.setState({email: text})}
          placeholder="Email"
          value={this.state.email} 
        />
        <Credentials
          onChangeText={text => this.setState({password: text})}
          placeholder="Password"
          value={this.state.password}
        />
        <LoginButton>
          <Button
            onPress={() => this.login()}
            title="Login"
          />
        </LoginButton>
      </Container>
    )
  }
};

export default Login;
