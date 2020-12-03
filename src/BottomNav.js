import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';



import QuizStack from './QuizStack';
import Profile from './Profile';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgba(113, 205, 220, 0.3)',
      accent: '#3498db',
    },
  };

const FriendsRoute = () => <Text>Friends</Text>;

//const QuizRoute = () => <Text>Quiz</Text>;

const ProfileRoute = () => <Text>Profile</Text>;




function BottomNav({navigation}) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'friends', title: 'Friends', icon: 'account-group' },
      { key: 'quiz', title: 'Quiz', icon: 'clipboard-text' },
      { key: 'profile', title: 'Profile', icon: 'account-edit' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      friends: FriendsRoute,
      quiz: QuizStack,
      profile: Profile,
    });
  
    return (
    <PaperProvider theme={theme}>
        
        
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
      
    </PaperProvider>
    );
  };
  
  export default BottomNav;