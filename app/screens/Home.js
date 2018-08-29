import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import firebase from 'firebase';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.initFirebase();
    this.loadData();
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

  loadData() {
    firebase.auth().signInWithEmailAndPassword('test@test.test', 'test123').catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}).then(function() {

      var userId = 'wRiiRRVIJ0wb7dM9f2pE';
      return firebase.database().ref('/gigs/' + 'userId').once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
      alert(username);
      // ...
    });
  });
}
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('username', 'default val');

    return (
      <View style={styles.container}>
        {/* other code from before here */}
        <ScrollView>
          <View style={styles.item}>
          <Text style={{fontSize:18}}>{itemId}</Text>
          </View>
          <View style={styles.item}>
          <Text style={{fontSize:22}}>React Native</Text>
          </View>
          <View style={styles.item}>
          <Text style={{fontSize:22}}>React Native</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  item: {
    backgroundColor: '#EEE',
    width: '100%',
    height: 40,
    padding: 5,
    borderBottomColor: '#BBB',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
