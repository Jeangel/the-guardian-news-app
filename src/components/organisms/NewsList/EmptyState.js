import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Illustration } from '../../atoms/Illustration';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyState = () => {
  return (
    <Container>
      <Illustration name="reading-articles" />
    </Container>
  );
};
