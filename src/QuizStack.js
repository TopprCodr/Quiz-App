import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MyQuizes from "./MyQuizes";
import CreateQuiz from "./CreateQuiz";
import QuizDetails from "./QuizDetails";
import AddQuizQstn from "./AddQuizQstn";


const Stack = createStackNavigator();

export default function QuizStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyQuizes" component={MyQuizes} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateQuiz" component={CreateQuiz} />
        <Stack.Screen name="QuizDetails" component={QuizDetails} />
        <Stack.Screen name="Add Question" component={AddQuizQstn} />
    </Stack.Navigator>
  );
}

