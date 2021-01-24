import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils';

const AnimatedScrollView = styled(Animated.ScrollView)`
  padding-top: ${({ paddingTop }) => paddingTop}px;
`;

const InnerScrollContainer = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.surface};
  height: 100%;
  min-height: ${SCREEN_HEIGHT}px;
  width: ${SCREEN_WIDTH}px;
  margin-top: -40px;
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
    paddingBottom: 400,
  };

  return (
    <AnimatedScrollView
      {...rest}
      showsVerticalScrollIndicator={false}
      paddingTop={topContainerHeight}
      // contentContainerStyle={{ marginBottom: -100 }}
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
