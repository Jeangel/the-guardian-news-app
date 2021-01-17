import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Text as RNText, TextStyle } from 'react-native';
import styled from 'styled-components';

/**
 * Possible variants for the Text component
 * @typedef {'body' | 'small' | 'h1' | 'h2' | 'input' | 'button'} TextVariant
 */

const BaseText = styled(RNText)`
  font-family: 'DM Sans';
`;

const BodyText = styled(BaseText)`
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

const H1Text = styled(BaseText)`
  font-size: 28px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 900;
`;

const ButtonText = styled(BaseText)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

/**
 * Wrapper for the RN Text component.
 * @param {{
 *  variant?: TextVariant,
 *  style?: TextStyle
 * }} props
 */
export const Text = ({ variant = 'body', style, children }) => {
  /**
   * @returns {React.ReactNode} component
   */
  const getTextComponent = () => {
    switch (variant) {
      case 'body':
        return BodyText;
      case 'h1':
        return H1Text;
      case 'button':
        return ButtonText;
      default:
        return {};
    }
  };
  const Component = getTextComponent();
  return <Component style={style}>{children}</Component>;
};
