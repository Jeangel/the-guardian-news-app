import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import themes from './src/themes';
import { Routes } from './src/navigation';
import { AppProvider } from './src/contexts/AppContext';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themes.find((e) => e.name === themeMode);

  const toggleThemeMode = () => {
    const otherTheme = themes.find((e) => e.name !== themeMode);
    setThemeMode(otherTheme.name || 'light');
  };

  const barStyle = themeMode === 'light' ? 'dark-content' : 'light-content'

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppProvider themeMode={themeMode} toggleThemeMode={toggleThemeMode}>
          <NavigationContainer>
            <StatusBar barStyle={barStyle} />
            <Routes />
          </NavigationContainer>
        </AppProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
