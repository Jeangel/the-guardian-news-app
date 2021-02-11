import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from './TabNavigation';
import { NewsDetailScreen } from '../screens/NewsDetailScreen';

const Stack = createStackNavigator();

export const Routes = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="home" component={TabNavigation} />
    <Stack.Screen name="details" component={NewsDetailScreen} />
  </Stack.Navigator>
);
