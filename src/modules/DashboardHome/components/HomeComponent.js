import {StyleSheet} from 'react-native';
import React from 'react';
import HeaderHomeComponent from './HeaderHomeComponent';
import {FlashList} from '@shopify/flash-list';
import {data} from '../../../property/data/DummyData';
import View from '../../../components/View';
import Text from '../../../components/Text';
import ListProduct from '../../../components/ListProduct';

const HomeComponent = () => {
  return (
    <View style={styles.styContainer}>
      <HeaderHomeComponent />
      <FlashList
        data={data}
        renderItem={({item}) => <ListProduct item={item} />}
        estimatedItemSize={200}
        numColumns={2}
      />
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  styContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
