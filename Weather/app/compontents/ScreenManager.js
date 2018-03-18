import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry
} from 'react-native';

import Login from './Login';
import Details from './Details'
import SelectLocation from './SelectLocation'
import { StackNavigator } from 'react-navigation';

const Screens = StackNavigator({
    SelectLocation: {screen: SelectLocation},
    Login: {screen: Login},    
    Details: {screen: Details},
    
})

export default Screens;
