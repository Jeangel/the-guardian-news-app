import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen';
import { NewsDetailScreen } from '../screens/NewsDetailScreen';

const Stack = createStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="details" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};
