import React from 'react';
import { NewsList } from '../../../src/components/organisms/NewsList';
import { renderWithTheme } from '../../config/customRenders';

describe('NewsList Component', () => {
  test('Renders the news passed by props', () => {
    const dummyNews = [
      {
        title: 'Title 1',
        description: 'Description 1',
        date: '2021-01-01T12:00:00Z',
        wordsCount: 500,
        thumbnailUrl:
          'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
      },
      {
        title: 'Title 2',
        description: 'Description 2',
        date: '2021-02-02T12:00:00Z',
        wordsCount: 1000,
        thumbnailUrl:
          'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
      },
    ];

    const { getByText } = renderWithTheme(<NewsList news={dummyNews} />);
    expect(getByText('Title 1')).toBeTruthy();
    expect(getByText('Description 1')).toBeTruthy();
    expect(getByText('January 1, 2021')).toBeTruthy();
    expect(getByText('Title 2')).toBeTruthy();
    expect(getByText('Description 2')).toBeTruthy();
    expect(getByText('February 2, 2021')).toBeTruthy();
  });
  test('Displays the no results component when no news are passed', () => {
    const { getByA11yLabel } = renderWithTheme(<NewsList news={[]} />);
    expect(getByA11yLabel('no results')).toBeTruthy();
  });
});
