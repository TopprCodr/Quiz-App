import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/Login";
import SignUp from "./src/SignUp";
import Landing from "./src/Landing";

import MyStack from './src/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}