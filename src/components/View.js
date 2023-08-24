import {StyleSheet, Text, View as RNView} from 'react-native';
import React from 'react';

const View = props => {
  const {children, style} = props;
  return <RNView style={style}>{children}</RNView>;
};

export default View;

const styles = StyleSheet.create({});
