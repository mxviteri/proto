import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer, Provider } from 'mobx-react';
import styled from 'styled-components';
import RootStore from '../StateManagement/rootStore';
import Profile from '../Profile';

const Container = styled.View`
  width: 90%;
  flex: 1;
  align-self: center;
`;

const LogoutButton = styled.View`
  margin: 10px;
`;

@observer
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.store = new RootStore(this.props.user);
  }

  render() {
    return (
      <Provider rootStore={this.store}>
        <Container>
          <Profile />
          <LogoutButton>
            <Button
              onPress={this.props.logout}
              title="Logout"
            />
          </LogoutButton>
        </Container>
      </Provider>
    )
  }
}

export default HomeScreen;