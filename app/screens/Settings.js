import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('AuthLoading')}
        />
      </View>
    );
  }
}
