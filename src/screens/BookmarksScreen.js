import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from '../components/atoms/Text';
import { Canvas } from '../components/atoms/Canvas';
import { NewsList } from '../components/organisms/NewsList';
import { useBookmarkStore } from '../hooks';

const Title = styled(Text)`
  padding-bottom: 20px;
`;

export const BookmarksScreen = () => {
  const [news, setNews] = useState([]);
  const { getStoredBookmarks } = useBookmarkStore();
  const refreshNews = useCallback(() => {
    const refresh = async () => {
      const bookmarks = await getStoredBookmarks();
      setNews(bookmarks);
    };
    refresh();
  }, [getStoredBookmarks]);

  useFocusEffect(refreshNews);

  const listHeader = (
    <View>
      <Title variant="h1">Your saved news</Title>
    </View>
  );

  return (
    <Canvas edges={['top']}>
      <NewsList news={news} header={listHeader} />
    </Canvas>
  );
};
