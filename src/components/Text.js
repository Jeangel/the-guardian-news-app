import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import styled from 'styled-components';
import { useTheme } from '../hooks';

/**
 * Possible variants for the Text component
 * @typedef {'body' | 'small' | 'title' | 'input'} TextVariant
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
      default:
        return {};
    }
  };
  const textStyles = getTextStyles();

  console.log(theme);

  return <BaseText style={{ ...style, ...textStyles }}>{children}</BaseText>;
};
