import React from 'react';

import Login from './Login';
import Register from './Register';
import Details from './Details';
import SelectLocation from './SelectLocation';

import { StackNavigator } from 'react-navigation';

const Screens = StackNavigator({
  Login: {screen: Login},  
  Register: {screen: Register},
  SelectLocation: {screen: SelectLocation},
  Details: {screen: Details},
})

export default Screens;
