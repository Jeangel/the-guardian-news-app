import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import _ from 'lodash';
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
  const [isShowingSpinner, showSpinner, hideSpinner] = useSpinnerContext();
  const [news, setNews] = useState([]);
  const handleOnSearchPress = async (searchValue) => {
    showSpinner();
    const result = await searchNews(searchValue);
    const formattedNews = result.map((e) => ({
      title: e.fields.headline,
      description: e.fields.trailText,
      wordsCount: Number(e.fields.wordcount),
      thumbnailUrl: e.fields.thumbnail,
      date: e.webPublicationDate,
    }));
    setNews(formattedNews);
    hideSpinner();
  };

  const listHeader = (
    <View>
      <Title variant="h1">
        Search {'\n'}your daily news {JSON.stringify(isShowingSpinner)}
      </Title>
      <SearchForm onSearchPress={handleOnSearchPress} />
    </View>
  );

  return (
    <Canvas>
      <NewsList news={news} header={listHeader} />
    </Canvas>
  );
};
