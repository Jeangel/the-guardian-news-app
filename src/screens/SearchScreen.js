import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Text } from '../components/atoms/Text';
import { Canvas } from '../components/atoms/Canvas';
import { SearchForm } from '../components/organisms/SearchForm';
import { NewsList } from '../components/organisms/NewsList';

const Title = styled(Text)`
  padding-bottom: 20px;
`;

export const SearchScreen = () => {
  const listHeader = (
    <View>
      <Title variant="h1">Search {'\n'}your daily news</Title>
      <SearchForm />
    </View>
  );

  const dummyNews = [
    {
      title:
        'Colombia protests against police brutality leave at least 10 dead.',
      description:
        'Unrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.\nUnrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.',
      date: '2020-12-29T18:55:51Z',
      wordsCount: 800,
      thumbnailUrl:
        'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
    },
    {
      title:
        'Colombia protests against police brutality leave at least 10 dead.',
      description:
        'Unrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.\nUnrest sparked by police killing of lawyer in Bogotá spreads to Medellín, Cali and Manizales.',
      date: '2020-12-29T18:55:51Z',
      wordsCount: 800,
      thumbnailUrl:
        'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
    },
  ];

  return (
    <Canvas>
      <NewsList news={dummyNews} header={listHeader} />
    </Canvas>
  );
};
