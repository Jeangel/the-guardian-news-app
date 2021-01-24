import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { useTheme } from '../../hooks';

const GoBackContainer = styled(Animated.View)`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 5%;
  left: 10px;
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  z-index: 2;
`;

const GoBackButtonOverlay = styled(Animated.View)`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0;
  position: absolute;
  border-radius: 100px;
`;

/**
 *
 * @param {{
 *  scrollY: Animated.Value,
 *  maxInputRangeAnimation: number
 * }} props
 */
export const BackButton = ({ scrollY, maxInputRangeAnimation }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const translateBackButtonAnimation = scrollY.interpolate({
    inputRange: [0, maxInputRangeAnimation],
    outputRange: [0, 10],
    extrapolate: 'clamp',
  });

  const goBackOverlayOpacityAnimation = scrollY.interpolate({
    inputRange: [0, maxInputRangeAnimation],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <GoBackContainer
      style={{
        transform: [{ translateY: translateBackButtonAnimation }],
      }}>
      <GoBackButtonOverlay style={{ opacity: goBackOverlayOpacityAnimation }} />
      <Button variant="transparent" onPress={navigation.goBack}>
        <Icon size={20} color={theme.colors.white} name="arrow-left" />
      </Button>
    </GoBackContainer>
  );
};
