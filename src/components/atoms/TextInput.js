import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components';
import { useTheme } from '../../hooks';

const StyledInput = styled(RNTextInput)`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 16px;
  width: 100%;
  max-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans';
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * Wrapper for React Native TextInput.
 * @param {{
 *  value: string,
 *  onChange: Function,
 *  placeholder?: string,
 *  placeholderColor?: string
 * }} props
 */
export const TextInput = ({
  value,
  onChange,
  placeholder,
  placeholderColor,
  ...rest
}) => {
  const { colors } = useTheme();
  return (
    <StyledInput
      accessible
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={colors.inputPlaceholder}
      {...rest}
    />
  );
};
