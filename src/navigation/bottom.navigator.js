import React, { createElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PlayerScreen } from '../ui/screens';
import { BottomTab } from '../ui/components';
import { SearchNavigator } from './search-stack.navigator';
import { Screens } from '../config/constants';

import { ListIcon, PlayIcon, SearchIcon } from '../assets/icons';

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const tabBarOptions = {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
    activeBackgroundColor: "#3F25E5",
    inactiveBackgroundColor: "",
  };

  const getIconComponent = (routeName) => {
    console.log('name', routeName);
    switch (routeName) {
      case Screens.HOME_SCREEN:
        return ListIcon;
      case Screens.PLAYER_SCREEN:
        return PlayIcon;
      case Screens.SEARCH_STACK:
        return SearchIcon;
      default:
        throw new Error('specified tabbar icon not found');
    }
  };

  return (
    <BottomTabs.Navigator
      initialRouteName={Screens.HomeScreen}
      screenOptions={({ route }) => {
        const icon = getIconComponent(route.name);
        return {
          tabBarIcon: ({ color }) => {
            return createElement(icon, { fill: color });
          },
        };
      }}
      tabBar={(props) => <BottomTab {...props} />}
      tabBarOptions={tabBarOptions}>
      <BottomTabs.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
      <BottomTabs.Screen
        name={Screens.PLAYER_SCREEN}
        component={PlayerScreen}
      />
      <BottomTabs.Screen
        name={Screens.SEARCH_STACK}
        component={SearchNavigator}
      />
    </BottomTabs.Navigator>
  );
};

export { BottomNavigator };
