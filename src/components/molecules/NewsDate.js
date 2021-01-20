import React from 'react';
import { View } from 'react-native';
import { DateTime } from 'luxon';
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
  padding-left: 5px;
  color: ${({ color }) => color};
  padding-top: 0.5px;
`;

/**
 *
 * @param {{
 *  date: string,
 *  color: string
 * }} props
 */
export const NewsDate = ({ date, color }) => {
  const formattedDate = DateTime.fromISO(date)
    .setLocale('en')
    .toLocaleString(DateTime.DATE_FULL);
  return (
    <Container>
      <Icon name="calendar" size={12} color={color} />
      <Date variant="extra-small" color={color}>
        {formattedDate}
      </Date>
    </Container>
  );
};
