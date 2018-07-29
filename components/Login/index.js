import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';
import Users from '../fixtures/user';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login = () => {
    let match = false;
    let user = null;
    Users.forEach(item => {
      if (this.state.email === item.email && this.state.password === item.password) {
        match = true;
        user = item;
      }
    });
    this.props.setAuthenticated(match, user)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({email: text})}
          placeholder="Email"
          value={this.state.email} 
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({password: text})}
          placeholder="Password"
          value={this.state.password}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.login()}
            title="Login"
          />
        </View>
      </View>
    )
  }
};