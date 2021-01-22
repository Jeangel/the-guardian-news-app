import React from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import styled from 'styled-components';
import { Text } from '../components/atoms/Text';
import { NewsDate } from '../components/molecules/NewsDate';
import { NewsReadingTime } from '../components/molecules/NewsReadingTime';
import { useTheme } from '../hooks';

const CoverContentContainer = styled(View)`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: flex-end;
  padding: 0 28px 7px 28px;
  padding-left: 28px;
  padding-right: 28px;
`;

const CoverImage = styled(ImageBackground)`
  height: 320px;
  width: 100%;
`;

const NewsTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 13px;
`;

const NewsInformation = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewsDetails = () => {
  const theme = useTheme();
  // const dummyNews = [
  //   {
  //     title:
  //       'Colombia protests against police brutality leave at least 10 dead.',
  //     description:
  //       'Unrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.\nUnrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.',
  //     date: '2020-12-29T18:55:51Z',
  //     wordsCount: 800,
  //     thumbnailUrl:
  //       'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
  //   },
  // ];

  const item = {
    title:
      'Working around Covid-19: the software suite helping businesses operate safely',
    description:
      'Unrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.\nUnrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.',
    date: '2020-12-29T18:55:51Z',
    wordsCount: 800,
    thumbnailUrl:
      'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
  };

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <CoverImage source={{ uri: item.thumbnailUrl }} resizeMode="cover">
        <CoverContentContainer>
          <NewsTitle variant="h1">{item.title}</NewsTitle>
          <NewsInformation>
            <NewsDate date={item.date} color={theme.colors.white} />
            <NewsReadingTime
              wordsCount={item.wordsCount}
              color={theme.colors.white}
            />
          </NewsInformation>
        </CoverContentContainer>
      </CoverImage>
    </View>
  );
};
