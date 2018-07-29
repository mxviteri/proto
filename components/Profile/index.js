import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { observer, inject } from 'mobx-react';
import styles from './styles';

@inject('rootStore')
@observer
class Profile extends Component {
  render () {
    const rootStore = this.props.rootStore;

    return (
      <View style={styles.rootView}>
        <Image
          style={styles.gravatar}
          source={{ uri: rootStore.user.gravatar }}
        />
        <Text>{`Welcome ${rootStore.userName}, you little bitch..`}</Text>
      </View>
    )
  }
}

export default Profile;