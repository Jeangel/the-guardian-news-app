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

  return (
    <Canvas>
      <NewsList
        news={['Hi', 'Dude', 'a', '', '', '', '', '']}
        header={listHeader}
      />
    </Canvas>
  );
};
