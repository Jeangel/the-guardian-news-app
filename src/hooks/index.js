/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeContext } from 'styled-components';
import { light } from '../themes/light';
import { dark } from '../themes/dark';
import { shared } from '../themes/shared';
import { SpinnerContext } from '../contexts/SpinnerContext';

/**
 * @returns {light & dark & shared}
 */
export const useTheme = () => React.useContext(ThemeContext);

export const useSpinnerContext = () => {
  const { isShowingSpinner, showSpinner, hideSpinner } = React.useContext(
    SpinnerContext,
  );
  return [isShowingSpinner, showSpinner, hideSpinner];
};
