import React from 'react';

import Login from './Login';
import Register from './Register';
import Details from './Details';
import SelectLocation from './SelectLocation';

import { StackNavigator } from 'react-navigation';

const Screens = StackNavigator({
  SelectLocation: {screen: SelectLocation},

  Register: {screen: Register},
  
  Login: {screen: Login},   
  
  
  Details: {screen: Details},
  
  
    
})

export default Screens;
