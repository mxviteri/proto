import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from 'mobx-react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import styled from 'styled-components';
import Profile from '../Profile';
import TaskList from '../TaskList';

const Container = styled.View`
  width: 90%;
  flex: 1;
  align-self: center;
  justify-content: space-between;
`;

const LogoutButton = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;

@inject('rootStore')
@observer
class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome, ${navigation.getParam('userName')}`,
      headerRight: (
        <Icon
          name="settings"
          iconStyle={{ marginRight: 10 }}
          onPress={() => navigation.navigate('Profile')}
        />
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ userName: this.props.rootStore.userName });
  }

  logout = () => {
    return this.props.rootStore.authenticate({}, false);
  };

  render() {
    return (
      <Container>
        <TaskList />
        <LogoutButton>
          <Button
            onPress={() => this.logout()}
            title="Logout"
          />
        </LogoutButton>
      </Container>
    )
  };
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    Profile: Profile
  },
  {
    initialRouteName: 'Home'
  }
);

class HomeScreen extends Component {
  render() {
    return <RootStack />;
  }
}

export default HomeScreen;