import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from '../../src/contexts/AppContext';
import themes from '../../src/themes';
import { render } from '@testing-library/react-native';

export const renderWithTheme = (children) => {
  const defaultTheme = themes[0];
  return render(
    <ThemeProvider theme={defaultTheme}>
      <AppProvider themeMode={'light'}>{children}</AppProvider>
    </ThemeProvider>,
  );
};
