import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigator } from './bottom.navigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export { RootNavigator };
