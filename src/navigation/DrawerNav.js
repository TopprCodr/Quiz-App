import React, { useState, useEffect } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider, Appbar } from 'react-native-paper';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import BottomNav from './BottomNav';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgba(113, 205, 220, 0.3)',
        accent: '#3498db',
    },
};
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Home"
                onPress={() => props.navigation.navigate("Home")}
            />

            <DrawerItem
                label="About"
                onPress={() => props.navigation.navigate("About")}
            />

            <DrawerItem
                label="Sign Out"
            // onPress={() => props.navigation.navigate("About")}
            />
        </DrawerContentScrollView>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={BottomNav} />
        </Drawer.Navigator>
    );
}

function DrawerNav({ navigation }) {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
                console.log("back pressed");
            }),
        []
    );

    return (
        <PaperProvider theme={theme}>
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                <Appbar.Content title="Quiz App" />
            </Appbar.Header>

            <MyDrawer />
        </PaperProvider>
    )
}

export default DrawerNav;