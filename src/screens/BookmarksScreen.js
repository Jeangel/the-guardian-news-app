import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Text } from '../components/atoms/Text';
import { Canvas } from '../components/atoms/Canvas';
import { NewsList } from '../components/organisms/NewsList';

const Title = styled(Text)`
  padding-bottom: 20px;
`;

export const BookmarksScreen = () => {
  const [news, setNews] = useState([]);

  const listHeader = (
    <View>
      <Title variant="h1">Your saved news</Title>
    </View>
  );

  return (
    <Canvas>
      <NewsList news={news} header={listHeader} />
    </Canvas>
  );
};
