import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default HomeScreen = (props) => (
  <View style={styles.rootView}>
    <Text>In the App</Text>
    <View style={styles.buttonContainer}>
      <Button
        onPress={props.logout}
        title="Logout"
      />
    </View>
  </View>
)