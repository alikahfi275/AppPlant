import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {IconArrowRight, ImageHeader} from '../../../property/assets';
import Button from '../../../components/Button';
import View from '../../../components/View';
import Statusbar from '../../../components/StatusBar';
import Text from '../../../components/Text';

const HeaderHomeComponent = () => {
  return (
    <View style={styles.styContainer}>
      <Statusbar backgroundColor={'#F6F6F6'} barStyle={'dark-content'} />
      <ImageBackground source={ImageHeader} style={styles.styImage}>
        <View style={styles.styHeader}>
          <Text style={styles.styLebelHeader}>Planta - bersinar</Text>
          <Text style={styles.styLebelHeader}>ruang rumah Anda</Text>
          <View style={styles.styIconArrow}>
            <Text style={styles.stySubLebelHeader}>Lihat pendatang baru</Text>
            <Button icon="arrowRight" width={18} />
          </View>
        </View>
        <Button icon="keranjang" style={styles.styButton} />
      </ImageBackground>
    </View>
  );
};

export default HeaderHomeComponent;

const styles = StyleSheet.create({
  styContainer: {
    marginTop: 0,
    backgroundColor: '#F6F6F6',
  },
  styImage: {
    width: '100%',
    height: 200,
    marginTop: 60,
  },
  styHeader: {
    marginLeft: 30,
  },
  styIconArrow: {
    flexDirection: 'row',
  },
  styLebelHeader: {
    color: '#221F1F',
    fontSize: 24,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 37,
  },
  styButton: {
    padding: 10,
    borderRadius: 50,
    right: 30,
    top: -20,
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  stySubLebelHeader: {
    color: '#007537',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
    marginRight: 5,
  },
});
