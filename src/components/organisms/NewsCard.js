import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
import { Surface } from '../atoms/Surface';
import { NewsDate } from '../molecules/NewsDate';
import { NewsReadingTime } from '../molecules/NewsReadingTime';
import { useTheme } from '../../hooks';

const Container = styled(Surface)`
  padding: 11px 8px;
  margin-top: 20px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  elevation: 8;
  border-radius: 15px;
  flex-direction: row;
`;

const NewsInformationContainer = styled(View)`
`;

const ThumbnailContainer = styled(View)`
  width: 40%;
  padding-right: 10px;
`;

const Thumbnail = styled(Image)`
  height: 140px;
  width: 100%;
  border-radius: 10px;
`;

export const NewsCard = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <ThumbnailContainer>
        <Thumbnail
          source={{
            uri:
              'https://media.guim.co.uk/988ee711d2dc75cb62c0a88957fda40ee175fdb0/440_500_1926_1156/500.jpg',
          }}
        />
      </ThumbnailContainer>
      <NewsInformationContainer>
        {/* <NewsDate date={'Some stuff'} color={colors.text} />
        <NewsReadingTime wordsAmount={'Some stuff'} color={colors.text} />
        <Text>Hi dude</Text> */}
      </NewsInformationContainer>
    </Container>
  );
};
