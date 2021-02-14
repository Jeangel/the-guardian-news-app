import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Text } from '../components/atoms/Text';
import { Canvas } from '../components/atoms/Canvas';
import { SearchForm } from '../components/organisms/SearchForm';
import { NewsList } from '../components/organisms/NewsList';
import { searchNews } from '../api/news';
import { useSpinnerContext } from '../hooks';

const Title = styled(Text)`
  padding-bottom: 20px;
`;

export const SearchScreen = () => {
  const [_, showSpinner, hideSpinner] = useSpinnerContext();
  const [news, setNews] = useState([]);
  const handleOnSearchPress = async (searchValue) => {
    showSpinner();
    const result = await searchNews(searchValue);
    const formattedNews = result.map((e) => ({
      id: e.id,
      title: e.fields.headline,
      description: e.fields.trailText,
      wordsCount: Number(e.fields.wordcount),
      thumbnailUrl: e.fields.thumbnail,
      body: e.fields.body,
      author: e.fields.byline,
      sectionName: e.sectionName,
      date: e.webPublicationDate,
    }));
    setNews(formattedNews);
    hideSpinner();
  };

  const listHeader = (
    <View>
      <Title variant="h1">Search {'\n'}your daily news</Title>
      <SearchForm onSearchPress={handleOnSearchPress} />
    </View>
  );

  return (
    <Canvas edges={['top']}>
      <NewsList news={news} header={listHeader} />
    </Canvas>
  );
};
