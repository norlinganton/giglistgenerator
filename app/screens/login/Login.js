import React from 'react';
import { TextInput, Text, View, Button, StyleSheet, ScrollView } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      username: '',
      password: ''};
  }

  onLogin() {
    this.props.navigation.navigate('Home', {
      username: this.state.username
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>GIG LIST GENERATOR</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />

        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
        />

        <Button style={styles.buttonLogin} title="Login" onPress={this.onLogin} />
        <Button title="Don''t have an ccount? Register here" onPress={() => this.props.navigation.navigate('SignUpScreen')} />
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWelcome: {
    fontSize: 24,
    color: '#BBB',
    padding: 5,
    borderBottomColor: '#BBB',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 40,
    width: '100%',
    padding: 5,
    backgroundColor: '#CCC',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonLogin: {
    height: 40,
    width: '100%',
    padding: 2,
    color: 'white',
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
});
