import React from 'react';
import { FlatList } from 'react-native';
import { EmptyState } from './EmptyState';
import { NewsCard } from '../NewsCard';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import { useTheme } from '../../../hooks';

const SearchListEmptyState = styled(EmptyState)`
  margin-top: 100px;
`;

/**
 *
 * @param {{
 *  news: Array,
 *  header: React.ReactNode
 * }} props
 */
export const NewsList = ({ news = [], header }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const renderItem = ({ item }) => {
    const navigateToDetails = () => {
      navigation.navigate('details', { item });
    };
    return <NewsCard newsItem={item} onPress={navigateToDetails} />;
  };

  const keyExtractor = (_, index) => `key-${index}`;

  const contentContainerStyle = {
    paddingHorizontal: 15,
    backgroundColor: theme.colors.surface,
  };

  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      ListHeaderComponent={header}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={news}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={SearchListEmptyState}
    />
  );
};
