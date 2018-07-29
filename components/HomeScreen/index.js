import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer, Provider } from 'mobx-react';
import styles from './styles';
import RootStore from '../StateManagement/rootStore';
import Profile from '../Profile';

@observer
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.store = new RootStore(this.props.user);
  }

  render() {
    return (
      <Provider rootStore={this.store}>
        <View style={styles.rootView}>
          <Profile />
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.props.logout}
              title="Logout"
            />
          </View>
        </View>
      </Provider>
    )
  }
}

export default HomeScreen;