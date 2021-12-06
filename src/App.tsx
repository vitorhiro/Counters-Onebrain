import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './navigation/Tab/router';
import { CounterProvider } from './contexts/counters';

const App = () => {
  StatusBar.setBarStyle('light-content', true);

  return (
    <NavigationContainer>
      <CounterProvider>
        <TabNavigator />
      </CounterProvider>
    </NavigationContainer>
  );
};

export default App;
