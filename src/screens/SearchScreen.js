import React from 'react';
import { View, Button } from 'react-native';
import { Text } from '../components/Text';
import { Surface } from '../components/Surface';
import { useAppContext } from '../contexts/AppContext';

export const SearchScreen = ({ navigation }) => {
  const { toggleThemeMode, themeMode } = useAppContext();
  return (
    <Surface
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
      <Text>Search Screen, {themeMode}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="wtf"
        onPress={() => {
          toggleThemeMode();
        }}
      />
    </Surface>
  );
};
