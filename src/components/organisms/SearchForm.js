import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Button } from '../molecules/Button';
import { Icon } from '../atoms/Icon';
import { useTheme } from '../../hooks';
import { TextInput } from '../molecules/TextInput';

const Container = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled(TextInput)`
  width: 85%;
  margin-right: 6px;
`;

/**
 * Contains a SearchBox and a Button to filter results.
 * @param {{
 *  onSearchBoxChange: Function,
 *  searchBoxValue: string,
 *  onFilterPress: Function,
 * }} props
 */
export const SearchForm = ({
  onSearchBoxChange,
  searchBoxValue,
  onFilterPress,
}) => {
  const { colors } = useTheme();
  return (
    <Container>
      <SearchBox
        placeholder={'Search News Here'}
        value={searchBoxValue}
        onChange={onSearchBoxChange}
      />
      <Button onPress={onFilterPress}>
        <Icon name="filters" color={colors.white} />
      </Button>
    </Container>
  );
};
