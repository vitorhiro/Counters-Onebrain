import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, Platform } from 'react-native';
import counterActive from '../../assets/icons/counterActive.png';
import counterInactive from '../../assets/icons/counterInactive.png';
import settingsActive from '../../assets/icons/settingsActive.png';
import settingsInactive from '../../assets/icons/settingsInactive.png';

import { colors } from '../../utils/colors';
import styles from './styles';

import Home from '../../screens/Home';
import Settings from '../../screens/Settings';

export default function TabNavigation() {
  const { Navigator, Screen } = createBottomTabNavigator();

  const tabOptions = ({ route }: { route: { name: string } }) => ({
    tabBarIcon: ({ focused }: boolean | any) => {
      let iconName;

      switch (route.name) {
        case 'Home':
          iconName = focused ? counterActive : counterInactive;
          break;

        case 'Settings':
          iconName = focused ? settingsActive : settingsInactive;
          break;

        default:
          break;
      }

      return <Image source={iconName} style={styles.icon} />;
    },

    tabBarActiveTintColor: colors['secondary'],
    tabBarInactiveTintColor: colors['white'],
    tabBarStyle: {
      backgroundColor: colors['primary'],
      height: Platform.OS === 'android' ? 80 : 100,
    },
  });

  const screenOption = ({ route }: { route: { name: string } }) => {
    switch (route.name) {
      case 'Home':
        return {
          title: 'Counters',
          headerStyle: {
            backgroundColor: colors['primary'],
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        };
        break;

      case 'Settings':
        return {
          title: 'Config',
          headerStyle: {
            backgroundColor: colors['primary'],
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        };
        break;

      default:
        break;
    }
  };

  return (
    <Navigator screenOptions={tabOptions}>
      <Screen options={screenOption} name="Home" component={Home} />
      <Screen options={screenOption} name="Settings" component={Settings} />
    </Navigator>
  );
}
