/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import _ from 'lodash';
import { ThemeContext } from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { light } from '../themes/light';
import { dark } from '../themes/dark';
import { shared } from '../themes/shared';
import { SpinnerContext } from '../contexts/SpinnerContext';

/**
 * @returns {light & dark & shared}
 */
export const useTheme = () => React.useContext(ThemeContext);

export const useSpinnerContext = () => {
  const { isShowingSpinner, showSpinner, hideSpinner } = React.useContext(
    SpinnerContext,
  );
  return [isShowingSpinner, showSpinner, hideSpinner];
};

export const useBookmarkStore = (bookmark = {}) => {
  /**
   * @returns {Promise<Array>} bookmarks
   */
  const getStoredBookmarks = useCallback(async () => {
    const stringResponse = await AsyncStorage.getItem('bookmarks');
    const bookmarks = JSON.parse(stringResponse || '[]');
    return _.isArray(bookmarks) ? bookmarks : [];
  }, []);

  /**
   * @returns {Promise<boolean>}
   */
  const isBookmarkStored = async () => {
    // check if the given bookmark has an id
    if (_.isNull(bookmark.id) || _.isUndefined(bookmark.id)) {
      return false;
    }
    const bookmarks = await getStoredBookmarks();
    return !!bookmarks.find((e) => e.id === bookmark.id);
  };

  /**
   * @returns {Promise<boolean>}
   */
  const storeBookmark = async () => {
    const isBookmarkAlreadyStored = await isBookmarkStored();
    if (isBookmarkAlreadyStored) {
      return true;
    }
    const bookmarks = await getStoredBookmarks();
    await AsyncStorage.setItem(
      'bookmarks',
      JSON.stringify(bookmarks.concat(bookmark)),
    );
    return true;
  };

  const removeBookmark = async () => {
    const isBookmarkInStore = await isBookmarkStored();
    if (!isBookmarkInStore) {
      return true;
    }
    const bookmarks = await getStoredBookmarks();
    await AsyncStorage.setItem(
      'bookmarks',
      JSON.stringify(bookmarks.filter((e) => e.id !== bookmark.id)),
    );
    return true;
  };

  return {
    getStoredBookmarks,
    storeBookmark,
    removeBookmark,
    isBookmarkStored,
  };
};
