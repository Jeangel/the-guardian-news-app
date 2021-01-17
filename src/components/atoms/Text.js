import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Text as RNText, TextStyle } from 'react-native';
import styled from 'styled-components';
import { useTheme } from '../../hooks';

/**
 * Possible variants for the Text component
 * @typedef {'body' | 'small' | 'h1' | 'h2' | 'input' | 'button'} TextVariant
 */

const BaseText = styled(RNText)`
  font-family: 'DM Sans';
`;

/**
 * Wrapper for the RN Text component.
 * @param {{
 *  variant?: TextVariant,
 *  style?: TextStyle
 * }} props
 */
export const Text = ({ variant = 'body', style, children }) => {
  const theme = useTheme();
  /**
   * @returns {TextStyle} styles
   */
  const getTextStyles = () => {
    switch (variant) {
      case 'body':
        return { fontSize: 14, lineHeight: 15, color: theme.colors.text };
      case 'h1':
        return {
          fontSize: 28,
          lineHeight: 32,
          color: theme.colors.secondary,
          fontWeight: '900',
        };
      case 'button':
        return {
          fontSize: 18,
          color: theme.colors.white,
          fontWeight: '700',
        };
      default:
        return {};
    }
  };
  const textStyles = getTextStyles();
  return <BaseText style={{ ...style, ...textStyles }}>{children}</BaseText>;
};
