import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import _ from 'lodash';
import { Text } from './Text';

const Container = styled(TouchableOpacity)`
  border-radius: 16px;
  padding: 15px;
  background-color: ${({ variant, theme }) => theme.colors[variant]};
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  box-shadow: 0px 2px 4px ${({ theme }) => `${theme.colors.primary50}`};
  elevation: 8;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

/**
 * Possible variants for the Text component
 * @typedef {'primary' | 'secondary' | 'transparent'} TextVariant
 */

/**
 * Interactive element used to perform actions when pressed.
 *
 * It can be customizable with help of the `variant` prop
 * which changes the look and feel of the component.
 * @param {{
 *  text?: string,
 *  variant?: TextVariant,
 *  style?: ViewStyle,
 *  onPress: Function,
 *  disabled?: boolean
 * }} props
 */
export const Button = ({
  children,
  text,
  variant = 'primary',
  onPress,
  style,
  disabled,
  ...rest
}) => {
  const handlePress = () => {
    if (_.isFunction(onPress)) {
      onPress();
    }
  };

  const content = !_.isUndefined(text) ? (
    <Text variant="button">{text}</Text>
  ) : (
    children
  );

  return (
    <Container
      style={style}
      onPress={handlePress}
      variant={variant}
      disabled={disabled}
      accessible
      {...rest}>
      <View>{content}</View>
    </Container>
  );
};
