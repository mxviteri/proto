import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import TaskList from '../TaskList';

const Container = styled.View`
  flex: 1;
  margin-top: 10;
  margin-bottom: 10;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const Gravatar = styled.Image`
  width: 50;
  height: 50;
  border-radius: 10;
`;

const Name = styled.Text`
  font-size: 30;
  margin-top: 5;
  margin-left: 15;
`;

@inject('rootStore')
@observer
class Profile extends Component {
  render () {
    const rootStore = this.props.rootStore;

    return (
      <Container>
        <Header>
          <Gravatar
            source={{ uri: rootStore.user.gravatar }}
          />
          <Name>{rootStore.userName}</Name>
        </Header>
        <TaskList />
      </Container>
    )
  }
}

export default Profile;