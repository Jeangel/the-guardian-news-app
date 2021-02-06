import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.surface};
  flex: 1;
  padding-top: 40px;
`;

export const Canvas = ({ children }) => {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};
