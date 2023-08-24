import {StyleSheet} from 'react-native';
import React from 'react';
import View from './View';
import Text from './Text';

const ListProduct = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
  },
});
