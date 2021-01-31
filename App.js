import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import themes from './src/themes';
import { Routes } from './src/navigation';
import { AppProvider } from './src/contexts/AppContext';
import { SpinnerProvider } from './src/contexts/SpinnerContext';
import { Spinner } from './src/components/atoms/Spinner';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');
  const [isShowingSpinner, setIsShowingSpinner] = useState(false);
  const theme = themes.find((e) => e.name === themeMode);

  const toggleThemeMode = () => {
    const otherTheme = themes.find((e) => e.name !== themeMode);
    setThemeMode(otherTheme.name || 'light');
  };

  const showSpinner = () => setIsShowingSpinner(true);
  const hideSpinner = () => setIsShowingSpinner(false);

  const barStyle = themeMode === 'light' ? 'dark-content' : 'light-content';

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SpinnerProvider
          isShowingSpinner={isShowingSpinner}
          showSpinner={showSpinner}
          hideSpinner={hideSpinner}>
          <AppProvider themeMode={themeMode} toggleThemeMode={toggleThemeMode}>
            <NavigationContainer>
              <StatusBar barStyle={barStyle} />
              <Routes />
              <Spinner isVisible={isShowingSpinner} />
            </NavigationContainer>
          </AppProvider>
        </SpinnerProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
