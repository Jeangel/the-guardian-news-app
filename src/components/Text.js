import React from 'react';
import { Text as RNText } from 'react-native';
import styled from 'styled-components';

/**
 * Possible variants for the Text component
 * @typedef {'body' | 'small' | 'title' | 'input'} TextVariant
 */

const BodyText = styled(RNText)`
  /* font-family: 'DM Sans'; */
  font-size: 11px;
  line-height: 15px;
  color: black;
`;

/**
 * Wrapper for the RN Text component.
 * @param {{
 *  variant: TextVariant
 * }} props
 */
export const Text = ({ variant, children }) => {
  const getTextComponent = () => {
    switch (variant) {
      case 'body':
        return BodyText;
      default:
        return RNText;
    }
  };
  const Component = getTextComponent();
  return <Component>{children}</Component>;
};
