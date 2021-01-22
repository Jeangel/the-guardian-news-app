import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen';
import { NewsDetails } from '../screens/NewsDetails';

const Stack = createStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="details" component={NewsDetails} />
    </Stack.Navigator>
  );
};
