import React from 'react';

export const SpinnerContext = React.createContext({
  isShowingSpinner: false,
  showSpinner: () => {},
  hideSpinner: () => {},
});

export const SpinnerProvider = ({ children, ...rest }) => {
  return (
    <SpinnerContext.Provider value={{ ...rest }}>
      {children}
    </SpinnerContext.Provider>
  );
};
