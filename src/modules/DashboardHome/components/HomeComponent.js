import {StyleSheet} from 'react-native';
import React from 'react';
import HeaderHomeComponent from './HeaderHomeComponent';
import {FlashList} from '@shopify/flash-list';
import {data} from '../../../property/data/DummyData';
import View from '../../../components/View';
import ListProduct from '../../../components/ListProduct';
import FooterHomeComponent from './FooterHomeComponent';

const HomeComponent = () => {
  return (
    <View style={styles.styContainer}>
      <FlashList
        ListHeaderComponent={<HeaderHomeComponent />}
        data={data}
        renderItem={({item}) => <ListProduct item={item} />}
        estimatedItemSize={200}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<FooterHomeComponent />}
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
