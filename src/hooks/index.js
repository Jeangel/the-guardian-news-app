/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { light } from '../themes/light';
import { dark } from '../themes/dark';
import { shared } from '../themes/shared';

/**
 * @returns {light & dark & shared}
 */
export const useTheme = () => useContext(ThemeContext);
