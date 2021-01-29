import React from 'react';
import { SearchForm } from '../../../src/components/organisms/SearchForm';
import { renderWithTheme } from '../../config/customRenders';
import { fireEvent } from '@testing-library/react-native';

describe('SearchForm component', () => {
  test('Takes the defaultSearchValue prop as default value for the search box', () => {
    const { getByDisplayValue } = renderWithTheme(
      <SearchForm defaultSearchValue={'Nice'} />,
    );
    expect(getByDisplayValue('Nice')).toBeTruthy();
  });
  test('Pass the written text in the search box to the onSearchPress', () => {
    const mockOnPress = jest.fn();
    const { getByA11yLabel } = renderWithTheme(
      <SearchForm onSearchPress={mockOnPress} />,
    );
    const searchInput = getByA11yLabel('search input');
    const searchButton = getByA11yLabel('search button');
    fireEvent.changeText(searchInput, 'Technology');
    fireEvent.press(searchButton);
    expect(mockOnPress).toBeCalledWith('Technology');
  });
  test('If the searchbox does not have a value it will not execute the onSearchPress', () => {
    const mockOnPress = jest.fn();
    const { getByA11yLabel } = renderWithTheme(
      <SearchForm onSearchPress={mockOnPress} />,
    );
    const searchButton = getByA11yLabel('search button');
    fireEvent.press(searchButton);
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
