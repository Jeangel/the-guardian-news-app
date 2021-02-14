import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Icon } from '../atoms/Icon';
import { useBookmarkStore, useTheme } from '../../hooks';
import { useEffect } from 'react';

const Container = styled(View)`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 5%;
  right: 10px;
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  z-index: 2;
`;

const BookmarkButton = styled(TouchableOpacity)`
  background-color: transparent;
  padding: 10px;
  border-radius: 100px;
`;

/**
 *
 */
export const ToggleBookmarkButton = ({ currentNews = {} }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { isBookmarkStored, removeBookmark, storeBookmark } = useBookmarkStore(
    currentNews,
  );
  const theme = useTheme();

  useEffect(() => {
    refreshBookmarkSelectionState();
  }, [currentNews.id, refreshBookmarkSelectionState]);

  const refreshBookmarkSelectionState = useCallback(async () => {
    setIsSelected(await isBookmarkStored());
  }, [isBookmarkStored]);

  const toggle = async () => {
    if (!isSelected) {
      await storeBookmark();
    } else {
      await removeBookmark();
    }
    await refreshBookmarkSelectionState();
  };
  return (
    <Container>
      <BookmarkButton onPress={toggle}>
        <Icon
          size={20}
          color={isSelected ? theme.colors.transparent : theme.colors.white}
          fillColor={isSelected ? theme.colors.white : theme.colors.transparent}
          name="bookmark"
        />
      </BookmarkButton>
    </Container>
  );
};
