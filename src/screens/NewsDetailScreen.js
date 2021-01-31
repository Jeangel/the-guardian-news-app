import React, { useRef } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Text } from '../components/atoms/Text';
import { Surface } from '../components/atoms/Surface';
import { SCREEN_HEIGHT } from '../utils';
import { NewsBackgroundImage } from '../components/organisms/NewsBackgroundImage';
import { NewsBodyContainer } from '../components/organisms/NewsBodyContainer';
import { BackButton } from '../components/molecules/BackButton';
import { Tag } from '../components/atoms/Tag';
import { useTheme } from '../hooks';

const IMAGE_HEIGHT = 350;
const OVERLAPPING_SPACE = 50;

const Content = ({ body }) => (
  <View>
    <Text style={{ textAlign: 'justify' }}>{body}</Text>
  </View>
);

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
  // const item = {
  //   title:
  //     'Working around Covid-19: the software suite helping businesses operate safely',
  //   description:
  //     'Unrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.\nUnrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.',
  //   date: '2020-12-29T18:55:51Z',
  //   wordsCount: 800,
  //   thumbnailUrl:
  //     'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
  // };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <BackButton scrollY={scrollY} maxInputRangeAnimation={IMAGE_HEIGHT} />
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
          <NewsTag text={'Technology'} icon={'tag'} />
          <NewsTag text={'Mike Pattenden'} icon={'hand-writing'} />
        </NewsTags>
        <Content body={item.body} />
      </NewsBodyContainer>
    </Container>
  );
};
