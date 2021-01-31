import React from 'react';
import _ from 'lodash';
import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
import { Surface } from '../atoms/Surface';
import { NewsDate } from '../molecules/NewsDate';
import { NewsReadingTime } from '../molecules/NewsReadingTime';
import { useTheme } from '../../hooks';
import { stripHtmlTags } from '../../utils';

const Container = styled(Surface)`
  padding: 11px 11px 11px 8px;
  margin-top: 20px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  elevation: 8;
  border-radius: 15px;
  flex-direction: row;
`;

const NewsInformationContainer = styled(View)`
  width: 65%;
  padding: 2px 0;
  justify-content: space-between;
`;

const ThumbnailContainer = styled(View)`
  width: 35%;
  padding-right: 10px;
`;

const Thumbnail = styled(Image)`
  height: 190px;
  width: 100%;
  border-radius: 10px;
`;

const Title = styled(Text)`
  width: 90%;
  padding-bottom: 6px;
`;

const Description = styled(Text)`
  width: 100%;
  height: 58%;
`;

const DateAndTimeContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-right: 5px;
`;

/**
 *
 * @param {{
 *  newsItem: {
 *    title: string,
 *    description: string,
 *    date: string,
 *    wordsCount: number,
 *    thumbnailUrl: string
 *  },
 *  onPress: Function
 * }} props
 */
export const NewsCard = ({ newsItem, onPress }) => {
  const { title, description, date, wordsCount, thumbnailUrl } = newsItem;
  const { colors } = useTheme();

  const handlePress = () => {
    if (_.isFunction(onPress)) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container>
        <ThumbnailContainer>
          <Thumbnail
            resizeMode="cover"
            source={{
              uri: thumbnailUrl,
            }}
          />
        </ThumbnailContainer>
        <NewsInformationContainer>
          <Title variant="h4" numberOfLines={3}>
            {title}
          </Title>
          <Description variant="small" numberOfLines={6} ellipsizeMode="tail">
            {stripHtmlTags(description)}
          </Description>
          <DateAndTimeContainer>
            <NewsDate date={date} color={colors.text} />
            <NewsReadingTime wordsCount={wordsCount} color={colors.text} />
          </DateAndTimeContainer>
        </NewsInformationContainer>
      </Container>
    </TouchableOpacity>
  );
};
