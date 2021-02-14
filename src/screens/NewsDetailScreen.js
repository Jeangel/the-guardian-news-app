import React, { useRef } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Surface } from '../components/atoms/Surface';
import { SCREEN_HEIGHT } from '../utils';
import { NewsBackgroundImage } from '../components/organisms/NewsBackgroundImage';
import { NewsBodyContainer } from '../components/organisms/NewsBodyContainer';
import { BackButton } from '../components/molecules/BackButton';
import { ToggleBookmarkButton } from '../components/molecules/ToggleBookmarkButton';
import { Tag } from '../components/atoms/Tag';
import { HTML } from '../components/atoms/HTML';
import { useTheme } from '../hooks';

const IMAGE_HEIGHT = 350;
const OVERLAPPING_SPACE = 50;

const Container = styled(Surface)`
  align-items: center;
  justify-content: center;
  height: ${SCREEN_HEIGHT}px;
  padding-top: ${getStatusBarHeight()}px;
`;

const NewsTags = styled(View)`
  flex-direction: row;
`;

const NewsTag = ({ text, icon }) => {
  const theme = useTheme();
  return (
    <Tag
      backgroundColor={theme.colors.primaryLight}
      color={theme.colors.primary}
      text={text}
      icon={icon}
    />
  );
};

export const NewsDetailScreen = ({ route }) => {
  const { item } = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <BackButton scrollY={scrollY} maxInputRangeAnimation={IMAGE_HEIGHT} />
      <ToggleBookmarkButton currentNews={item} />
      <NewsBackgroundImage
        height={IMAGE_HEIGHT}
        overlappingSpace={OVERLAPPING_SPACE}
        item={item}
        scrollY={scrollY}
      />
      <NewsBodyContainer
        item={item}
        topContainerHeight={IMAGE_HEIGHT}
        overlappingSpace={OVERLAPPING_SPACE}
        scrollY={scrollY}>
        <NewsTags>
          <NewsTag text={item.sectionName} icon={'tag'} />
          <NewsTag text={item.author} icon={'hand-writing'} />
        </NewsTags>
        <HTML source={{ html: item.body }} />
      </NewsBodyContainer>
    </Container>
  );
};
