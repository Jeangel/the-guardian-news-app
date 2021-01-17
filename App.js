import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import themes from './src/themes';
import { Routes } from './src/navigation';
import AppProvider from './src/contexts/AppContext';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themes.find((e) => e.name === themeMode);

  const toggleThemeMode = () => {
    const otherTheme = themes.find((e) => e.name !== themeMode);
    setThemeMode(otherTheme.name || 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <AppProvider themeMode={themeMode} toggleThemeMode={toggleThemeMode}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Routes />
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
