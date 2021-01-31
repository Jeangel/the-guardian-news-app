import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Icon } from './Icon';
import { Text } from './Text';

const Container = styled(View)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0.5px solid ${({ borderColor }) => borderColor};
  border-radius: 5px;
  padding: 8px 16px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-right: 10px;
  max-width: 170px;
`;

const LabelText = styled(Text)`
  color: ${({ color }) => color};
  margin-left: 10px;
`;

/**
 *
 * @param {{
 *  color: string,
 *  backgroundColor: string,
 *  text: string
 * }} props
 */
export const Tag = ({ color, backgroundColor, text, icon }) => (
  <Container backgroundColor={backgroundColor} borderColor={color}>
    <Icon name={icon} size={15} color={color} />
    <LabelText color={color} numberOfLines={1} ellipsizeMode="tail">
      {text}
    </LabelText>
  </Container>
);
