import React from 'react';
import { DefaultTheme, Provider as PaperProvider, FAB } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';

import BottomNav from '../navigation/BottomNav';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(113, 205, 220, 0.3)',
    accent: '#3498db',
  },
};

function AboutPage({ navigation }) {

  const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })


  return (
    <PaperProvider theme={theme}>
      <Text>About Page</Text>
      {/* <FAB
                style={styles.fab}
                small
                icon="arrow-right"
                onPress={() => navigation.navigate('BottomNav')}
            /> */}
    </PaperProvider>
  )
}
export default AboutPage;
