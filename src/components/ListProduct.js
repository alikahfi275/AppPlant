import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import View from './View';
import Text from './Text';
import Image from './Image';

const ListProduct = ({item}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Image img={item.image} style={styles.styContImage(height)} />
      <Text style={styles.styTxtLabel}>{item.name}</Text>
      <Text style={styles.styTxtSubLabel}>{item.jenis}</Text>
      <Text style={styles.styTxtPrice}>
        Rp. {item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
      </Text>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  styContImage: height => ({
    width: '100%',
    resizeMode: 'stretch',
    height: height / 5,
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
  }),
  styTxtLabel: {
    color: '#221F1F',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
    marginTop: 5,
  },
  styTxtSubLabel: {
    color: '#7D7B7B',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    lineHeight: 20,
  },
  styTxtPrice: {
    color: '#007537',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
  },
});
