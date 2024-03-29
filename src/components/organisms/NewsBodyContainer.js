import React from 'react';
import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils';

const AnimatedScrollView = styled(Animated.ScrollView)`
  padding-top: ${({ paddingTop, overlappingSpace }) =>
    paddingTop - overlappingSpace - getStatusBarHeight()}px;
`;

const InnerScrollContainer = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.surface};
  min-height: ${SCREEN_HEIGHT}px;
  min-width: ${SCREEN_WIDTH}px;
  height: 100%;
  width: 100%;
  padding: 30px;
`;

/**
 *
 * @param {{
 *  scrollY: Animated.Value,
 *  topContainerHeight: number
 * }} props
 */
export const NewsBodyContainer = ({
  children,
  scrollY,
  overlappingSpace,
  topContainerHeight,
  ...rest
}) => {
  const radiusAnimation = scrollY.interpolate({
    inputRange: [0, topContainerHeight],
    outputRange: [40, 0],
  });

  const innerScrollContainerStyles = {
    borderTopLeftRadius: radiusAnimation,
    borderTopRightRadius: radiusAnimation,
    paddingBottom: 300,
  };

  return (
    <AnimatedScrollView
      {...rest}
      showsVerticalScrollIndicator={false}
      paddingTop={topContainerHeight}
      overlappingSpace={overlappingSpace}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true },
      )}>
      <InnerScrollContainer style={innerScrollContainerStyles}>
        {children}
      </InnerScrollContainer>
    </AnimatedScrollView>
  );
};
