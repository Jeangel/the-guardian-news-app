import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';
import RNHtml from 'react-native-render-html';
import { useTheme } from '../../hooks';

const NewsText = styled(Text)`
  text-align: justify;
`;

const makeTextRendererFn = (variant = 'body') => (
  htmlAttribs,
  children,
  convertedCSSStyles,
  passProps,
) => (
  <NewsText variant={variant} {...passProps}>
    {children}
  </NewsText>
);

const makeHeadingStylesFn = (theme) => {
  return {
    color: theme.colors.text,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 10,
  };
};

export const HTML = ({ source }) => {
  const theme = useTheme();
  return (
    <RNHtml
      source={source}
      contentWidth={350}
      tagsStyles={{
        img: {
          marginVertical: 40,
          borderColor: theme.colors.gray40,
          borderWidth: 0.5,
        },
        h1: makeHeadingStylesFn(theme),
        h2: makeHeadingStylesFn(theme),
        h3: makeHeadingStylesFn(theme),
        h4: makeHeadingStylesFn(theme),
        h5: makeHeadingStylesFn(theme),
        h6: makeHeadingStylesFn(theme),
      }}
      renderers={{
        p: makeTextRendererFn(),
        span: makeTextRendererFn(),
        figcaption: makeTextRendererFn(),
        blockquote: makeTextRendererFn(),
      }}
    />
  );
};
