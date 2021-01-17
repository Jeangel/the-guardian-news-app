import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
import { Button } from '../molecules/Button';

const Container = styled(View)`
  background-color: transparent;
`;

export const SearchForm = () => {
  return (
    <Container>
      <Button text={'Hi nuv'} />
    </Container>
  );
};
