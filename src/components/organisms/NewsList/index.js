import React from 'react';
import { FlatList } from 'react-native';
import { EmptyState } from './EmptyState';
import { NewsCard } from '../NewsCard';
import { useNavigation } from '@react-navigation/native';

/**
 *
 * @param {{
 *  news: Array,
 *  header: React.ReactNode
 * }} props
 */
export const NewsList = ({ news = [], header }) => {
  const navigation = useNavigation();
  if (!news.length) {
    return <EmptyState />;
  }

  const renderItem = ({ item }) => {
    const navigateToDetails = () => {
      navigation.navigate('details', item);
    };
    return <NewsCard newsItem={item} onPress={navigateToDetails} />;
  };

  const keyExtractor = (_, index) => `key-${index}`;

  const contentContainerStyle = { padding: 5 };

  return (
    <FlatList
      ListHeaderComponent={header}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={news}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};
