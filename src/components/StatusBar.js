import {StatusBar as RNStatusbar, StyleSheet} from 'react-native';
import React from 'react';

const Statusbar = props => {
  const {backgroundColor, translucents, barStyle} = props;
  return (
    <RNStatusbar
      backgroundColor={backgroundColor}
      translucents={translucents}
      barStyle={barStyle}
    />
  );
};

export default Statusbar;

const styles = StyleSheet.create({});
