import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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

const FriendsRoute = () => <Text>Friends</Text>;

function BottomNav({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'friends', title: 'Friends', icon: 'account-group' },
        { key: 'quiz', title: 'Quiz', icon: 'clipboard-text' },
        { key: 'profile', title: 'Profile', icon: 'account-edit' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        friends: FriendsRoute,
        quiz: MyQuizStack,
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