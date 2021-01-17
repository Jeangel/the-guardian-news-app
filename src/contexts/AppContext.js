import React from 'react';

export const AppContext = React.createContext({
  themeMode: 'light',
  toggleThemeMode: () => {},
});

export const useAppContext = () => React.useContext(AppContext);

const AppProvider = ({ children, ...rest }) => {
  return (
    <AppContext.Provider value={{ ...rest }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
