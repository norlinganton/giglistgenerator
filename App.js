import React from 'react';
import { TextInput, ScrollView, Image, Button, Text, View, StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,

} from 'react-navigation';
import Settings from './app/screens/Settings';
import Home from './app/screens/Home';
import Login from './app/screens/login/Login';
import SignUp from './app/screens/login/SignUp';



const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,

    },
    Settings: Settings,
    Settings1: Settings,
  },
  {
    /* Other configuration remains unchanged */
  }
);

const AuthStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,

    }
  },
  {
    /* Other configuration remains unchanged */
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: Login,
    SignUpScreen: SignUp,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
