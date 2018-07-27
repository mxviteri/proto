import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  login() {
    console.log('testing login');
  }

  render() {
    return (
      <View style={styles.rootView}>
        <Text>
          Sample login form... left the initial instructions there for you to look at.
        </Text>
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
            style={styles.button}
            onPress={this.login}
            title="Login"
          />
        </View>
      </View>
    )
  }
};