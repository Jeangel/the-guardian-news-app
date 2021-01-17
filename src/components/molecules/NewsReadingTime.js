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
`;

/**
 *
 * @param {{
 *  wordsAmount: string,
 *  color: string
 * }} props
 */
export const NewsReadingTime = ({ wordsAmount, color }) => {
  return (
    <Container>
      <Icon name="clock" size={15} color={color} />
      <Time variant="small" color={color}>
        {wordsAmount}
      </Time>
    </Container>
  );
};
