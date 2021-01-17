/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { light } from '../themes/light';
import { dark } from '../themes/dark';

/**
 * @returns {light & dark}
 */
export const useTheme = () => useContext(ThemeContext);
