/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { observer, Provider } from 'mobx-react';
import styled from 'styled-components';
import RootStore from './components/StateManagement/rootStore';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';

const Container = styled.View`
  flex: 1;
  background-color: #F5FCFF;
`;

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.store = new RootStore();
  }

  render() {
    return (
      <Provider rootStore={this.store}>
        <Container>
          { this.store.authenticated ? <HomeScreen /> : <Login /> }
        </Container>
      </Provider>
    );
  }
};

export default App;