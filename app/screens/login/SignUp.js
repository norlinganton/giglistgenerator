import React from 'react';
import { TextInput, Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''};

    this.signUp = this.signUp.bind(this);

    this.initFirebase();
  }

  initFirebase() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDpnQJ-cQ0ljzL4f-zkvngTDB8M1Rxmf8o",
      authDomain: "giglistgenerator.firebaseapp.com",
      databaseURL: "https://giglistgenerator.firebaseio.com",
      projectId: "giglistgenerator",
      storageBucket: "giglistgenerator.appspot.com",
      messagingSenderId: "382892577559"
    };
    firebase.initializeApp(config);
  }

  signUp() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + " " + errorMessage);
      // ...
    });

    this.props.navigation.navigate('Home', {
      username: this.state.username
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Enter your details</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />

        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
        />

        <Button style={styles.buttonLogin} title="Create Account" onPress={this.signUp} />
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
