import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/Login";
import SignUp from "./src/SignUp";
import Landing from "./src/Landing";
import Profile from "./src/Profile";
import MyQuizes from "./src/MyQuizes";
import CreateQuiz from "./src/CreateQuiz";
import QuizDetails from "./src/QuizDetails";
import AddQuizQstn from "./src/AddQuizQstn";
import StartStack from './src/StartStack';


/*<NavigationContainer>
      <StartStack />
      <QuizStack/>
      <DrawerNav/>
    </NavigationContainer>*/
export default function App() {
  return (

    
    <NavigationContainer>
      <StartStack />
    </NavigationContainer>
  );
}