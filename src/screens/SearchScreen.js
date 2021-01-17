import React from 'react';
import styled from 'styled-components';
import { Text } from '../components/atoms/Text';
import { Canvas } from '../components/atoms/Canvas';
import { SearchForm } from '../components/organisms/SearchForm';

const Title = styled(Text)`
  padding-bottom: 20px;
`;

export const SearchScreen = ({ navigation }) => {
  return (
    <Canvas>
      <Title variant="h1">Search {'\n'}your daily news</Title>
      <SearchForm />
    </Canvas>
  );
};
