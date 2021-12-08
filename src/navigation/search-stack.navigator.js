import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { SearchScreen, SearchResultScreen } from '../ui/screens'
import { Screens } from "../config/constants";

const Stack = createStackNavigator;

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.SEARCH_SCREEN} component={SearchScreen} />
      <Stack.Screen name={Screens.SEARCH_RESULT_SCREEN} component={SearchResultScreen} />
    </Stack.Navigator>
  );
};

export { SearchNavigator };