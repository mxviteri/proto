/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    authenticated: false,
    user: null
  }

  authenticate = (bool, user) => {
    this.setState({ authenticated: bool, user })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.authenticated ? (
          <HomeScreen logout={() => this.authenticate(false)} user={this.state.user} />
        ) : (
          <Login setAuthenticated={this.authenticate} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
