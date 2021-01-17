import React from 'react';
import { ScrollView } from 'react-native';
import { EmptyState } from './EmptyState';

/**
 *
 * @param {{
 *  news: Array
 * }} props
 */
export const NewsList = ({ news = [] }) => {
  if (!news.length) {
    return <EmptyState />;
  }
  return <ScrollView />;
};
