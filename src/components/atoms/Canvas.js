import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.surface};
  flex: 1;
  padding: 40px 20px 0 20px;
`;

export const Canvas = ({ children }) => {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};
