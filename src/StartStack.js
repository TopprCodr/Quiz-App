import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./Login";
import SignUp from "./SignUp";
import Landing from "./Landing";
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

export default function StartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false, }} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={DrawerNav} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

