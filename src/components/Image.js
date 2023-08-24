import {StyleSheet, Text, View, Image as RNImage} from 'react-native';
import React from 'react';

const Image = props => {
  const {width, height, resizeMode, img, style} = props;

  return (
    <RNImage
      source={img}
      width={width}
      height={height}
      resizeMode={resizeMode}
      style={style}
    />
  );
};

export default Image;

const styles = StyleSheet.create({});
