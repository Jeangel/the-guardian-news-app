import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const AnimatedBackgroundImage = ({
  style,
  children,
  imageStyle,
  ...rest
}) => (
  <View accessibilityIgnoresInvertColors={true} style={style}>
    <Animated.Image
      {...rest}
      style={[
        StyleSheet.absoluteFill,
        {
          width: style.width,
          height: style.height,
        },
        imageStyle,
      ]}
    />
    {children}
  </View>
);
