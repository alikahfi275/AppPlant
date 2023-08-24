import {StyleSheet, ImageBackground as RNImageBackground} from 'react-native';
import React from 'react';
import {ImageHeader} from '../property/assets';

const ImageBackground = props => {
  const {img, style, width, height, children} = props;

  return (
    <RNImageBackground
      source={img === 'bgHeader' ? ImageHeader : null}
      style={style}
      width={width}
      height={height}>
      {children}
    </RNImageBackground>
  );
};

export default ImageBackground;
