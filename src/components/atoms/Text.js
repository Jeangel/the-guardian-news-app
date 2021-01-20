import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Text as RNText, TextStyle } from 'react-native';
import styled from 'styled-components';

/**
 * Possible variants for the Text component
 * @typedef {'body' | 'small' | 'h1' | 'h4' | 'input' | 'button'} TextVariant
 */

const BaseText = styled(RNText)`
  font-family: 'DM Sans';
`;

const BodyText = styled(BaseText)`
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

const SmallText = styled(BaseText)`
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray40};
`;

const ExtraSmallText = styled(BaseText)`
  font-size: 10px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray40};
`;

const H1Text = styled(BaseText)`
  font-size: 28px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 900;
`;

const H4Text = styled(BaseText)`
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
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
export const Text = ({ variant = 'body', style, children, ...rest }) => {
  /**
   * @returns {React.ReactNode} component
   */
  const getTextComponent = () => {
    switch (variant) {
      case 'body':
        return BodyText;
      case 'small':
        return SmallText;
      case 'extra-small':
        return ExtraSmallText;
      case 'h1':
        return H1Text;
      case 'h4':
        return H4Text;
      case 'button':
        return ButtonText;
      default:
        return {};
    }
  };
  const Component = getTextComponent();
  return (
    <Component style={style} {...rest} allowFontScaling={false}>
      {children}
    </Component>
  );
};
