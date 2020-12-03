import React, { useState, useEffect } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { DefaultTheme,Provider as PaperProvider,Appbar } from 'react-native-paper';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import AboutPage from './AboutPage';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
        
        <DrawerItem
          label="About"
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          label="Help"
          
        />
        <DrawerItem
          label="Contact Us"
          
        />
        <DrawerItem
          label="Sign Out"
          
        />
        
      </DrawerContentScrollView>
    );
  }
  
  const Drawer = createDrawerNavigator();



  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgba(113, 205, 220, 0.3)',
      accent: '#3498db',
    },
  };

  function MyDrawer() {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={AboutPage} />
      </Drawer.Navigator>
    );
  }

  function DrawerNav({navigation}){
      return(
        <PaperProvider theme={theme}>
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
                <Appbar.Content title="Title" subtitle="Subtitle" />
                <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>
            <MyDrawer/>
        </PaperProvider>
      )
  }

export default DrawerNav;