import {StyleSheet, Text as RNTExt, View} from 'react-native';
import React from 'react';

const Text = props => {
  const {children, style} = props;
  return <RNTExt style={style}>{children}</RNTExt>;
};

export default Text;

const styles = StyleSheet.create({});
