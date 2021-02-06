import React from 'react';
import { View, Animated } from 'react-native';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
import { AnimatedBackgroundImage } from '../atoms/AnimatedBackgroundImage';
import { SCREEN_WIDTH } from '../../utils';
import { useTheme } from '../../hooks';
import { NewsDate } from '../molecules/NewsDate';
import { NewsReadingTime } from '../molecules/NewsReadingTime';

const AnimatedImage = styled(AnimatedBackgroundImage)`
  height: ${({ height }) => height}px;
  width: ${SCREEN_WIDTH}px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const ImageOverlay = styled(View)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: flex-end;
  padding: 0 28px 7px 28px;
  padding-left: 28px;
  padding-right: 28px;
`;

const AnimatedContent = styled(Animated.View)`
  height: ${({ height }) => height}px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${({ overlappingSpace }) => overlappingSpace}px;
`;

const NewsTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  text-align: justify;
  margin-bottom: 13px;
`;

const NewsInformation = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

/**
 *
 * @param {{
 *  item: { thumbnailUrl: string, date: string, wordsCount: number },
 *  scrollY: Animated.Value,
 *  height: number,
 *  overlappingSpace: number
 * }} props
 */
export const NewsBackgroundImage = ({
  item,
  scrollY,
  height,
  overlappingSpace,
}) => {
  const theme = useTheme();
  const imageScaleAnimation = scrollY.interpolate({
    inputRange: [10, height],
    outputRange: [1, 1.2],
    extrapolate: 'clamp',
  });

  const translateViewAnimation = scrollY.interpolate({
    inputRange: [0, height / 1.5],
    outputRange: [0, height * -1],
    extrapolate: 'clamp',
  });

  return (
    <AnimatedImage
      height={height}
      source={{ uri: item.thumbnailUrl }}
      imageStyle={{ transform: [{ scale: imageScaleAnimation }] }}>
      <ImageOverlay>
        <AnimatedContent
          height={height}
          overlappingSpace={overlappingSpace}
          style={{
            transform: [{ translateY: translateViewAnimation }],
          }}>
          <NewsTitle variant="h1">{item.title}</NewsTitle>
          <NewsInformation>
            <NewsDate date={item.date} color={theme.colors.white} />
            <NewsReadingTime
              wordsCount={item.wordsCount}
              color={theme.colors.white}
            />
          </NewsInformation>
        </AnimatedContent>
      </ImageOverlay>
    </AnimatedImage>
  );
};
