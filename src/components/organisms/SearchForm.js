import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Button } from '../molecules/Button';
import { Icon } from '../atoms/Icon';
import { useTheme } from '../../hooks';
import { TextInput } from '../molecules/TextInput';
import _ from 'lodash';

const Container = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const SearchBox = styled(TextInput)`
  width: 80%;
  margin-right: 6px;
`;

/**
 * Contains a SearchBox and a Button to submit the SearchBox value.
 * @param {{
 *  defaultSearchValue: string,
 *  onSearchPress: Function,
 * }} props
 */
export const SearchForm = ({ defaultSearchValue, onSearchPress }) => {
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const { colors } = useTheme();
  const handleOnSearchPress = () => {
    if (_.isFunction(onSearchPress)) {
      onSearchPress(searchValue);
    }
  };

  return (
    <Container>
      <SearchBox
        placeholder={'Search News Here'}
        value={searchValue}
        onChange={setSearchValue}
        accessibilityLabel={'search input'}
        accessibilityHint={'Input'}
      />
      <Button
        onPress={handleOnSearchPress}
        accessibilityLabel={'search button'}
        accessibilityHint={
          'Performs the action to search news by the value in search input'
        }>
        <Icon name="search" color={colors.white} />
      </Button>
    </Container>
  );
};
