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

const Date = styled(Text)`
  padding-left: 10px;
  padding-top: 2px;
  color: ${({ color }) => color};
`;

/**
 *
 * @param {{
 *  date: string,
 *  color: string
 * }} props
 */
export const NewsDate = ({ date, color }) => {
  return (
    <Container>
      <Icon name="calendar" size={19} color={color} />
      <Date color={color}>{date}</Date>
    </Container>
  );
};
