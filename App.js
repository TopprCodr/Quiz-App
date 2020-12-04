import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from "./src/Login";
import SignUp from "./src/SignUp";
import Landing from "./src/Landing";
import Profile from "./src/Profile";
import MyQuizes from "./src/MyQuizes";
import CreateQuiz from "./src/CreateQuiz";
import QuizDetails from "./src/QuizDetails";
import AddQuizQstn from "./src/AddQuizQstn";
import UserHome from "./src/UserHome";
import GiveQuiz from "./src/GiveQuiz";
import Social from "./src/Social";

import StartStack from './src/StartStack';

export default function App() {
  return (
    <NavigationContainer>
      <StartStack />
    </NavigationContainer>
  );
}