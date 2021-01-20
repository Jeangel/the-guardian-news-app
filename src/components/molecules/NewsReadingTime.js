import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Icon } from '../atoms/Icon';
import { Text } from '../atoms/Text';

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
`;

const Time = styled(Text)`
  padding-left: 5px;
  color: ${({ color }) => color};
  padding-top: 0.5px;
`;

const WORD_PER_MINUTE = 300;

/**
 *
 * @param {{
 *  wordsAmount: number,
 *  color: string
 * }} props
 */
export const NewsReadingTime = ({ wordsAmount = 0, color }) => {
  return (
    <Container>
      <Icon name="clock" size={12} color={color} />
      <Time variant="extra-small" color={color}>
        {Math.ceil(wordsAmount / WORD_PER_MINUTE)} min read
      </Time>
    </Container>
  );
};
