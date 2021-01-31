import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Spinkit from 'react-native-spinkit';

const Container = styled(View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Spinner = ({ isVisible }) => (
  <Container isVisible={isVisible}>
    <Spinkit
      type="9CubeGrid"
      color={'white'}
      size={100}
      isVisible={isVisible}
    />
  </Container>
);
