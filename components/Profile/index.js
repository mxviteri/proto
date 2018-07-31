import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.View`
  width: 90%;
  flex: 1;
  align-self: center;
  margin-top: 20;
  margin-bottom: 20;
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

const Info = styled.TextInput`
  background-color: #FFFFFF;
  margin-top: 10;
`;

const SaveButton = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;

@inject('rootStore')
@observer
class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };
  state = {
    email: this.props.rootStore.user.email,
    phone: this.props.rootStore.user.phone
  };

  save = () => {
    this.props.rootStore.saveProfile(this.state);
  }

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
        <Info
          onChangeText={text => this.setState({email: text})}
          value={this.state.email} />
        <Info
          onChangeText={text => this.setState({phone: text})}
          value={this.state.phone} />
        <SaveButton>
          <Button
            onPress={() => this.save()}
            title="Save"
          />
        </SaveButton>
      </Container>
    )
  }
}

export default Profile;