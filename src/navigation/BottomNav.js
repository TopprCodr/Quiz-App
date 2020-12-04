import * as React from 'react';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import UserHome from '../screens/UserHome';
import MyQuizStack from './MyQuizStack';
import Profile from '../screens/Profile';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgba(113, 205, 220, 0.3)',
        accent: '#3498db',
    },
};

function BottomNav({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'myQuizzes', title: 'My Quizzes', icon: 'clipboard-text' },
        { key: 'profile', title: 'Profile', icon: 'account' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: UserHome,
        myQuizzes: MyQuizStack,
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