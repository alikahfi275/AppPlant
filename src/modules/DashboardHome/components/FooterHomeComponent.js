import {StyleSheet} from 'react-native';
import React from 'react';
import View from '../../../components/View';
import Text from '../../../components/Text';
import Image from '../../../components/Image';
import {ImageIklan} from '../../../property/assets';

const FooterHomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styTxtLabel}>Lihat aksesori lainnya</Text>
      <Text style={styles.styTxtLabelPromo}>Kombo perawatan (baru)</Text>
      <View style={styles.styContPromo}>
        <View style={styles.styContPromoLabel}>
          <Text style={styles.styTxtTitlePromo}>Tumbuhan Lemon Balm</Text>
          <Text style={styles.styTxtSubTitlePromo}>
            Termasuk: Biji Lemon Balm, paket tanah organik, pot Planta,
            spidol...
          </Text>
        </View>
        <Image img={ImageIklan} style={styles.styContImageIklan} />
      </View>
    </View>
  );
};

export default FooterHomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  styTxtLabel: {
    color: '#7D7B7B',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'right',
    marginRight: 20,
    textDecorationLine: 'underline',
  },
  styTxtLabelPromo: {
    color: '#221F1F',
    fontSize: 24,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 34,
    marginTop: 15,
  },
  styTxtTitlePromo: {
    color: '#221F1F',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
    marginTop: 15,
    maxWidth: 200,
    textAlign: 'left',
    marginLeft: 20,
  },
  styTxtSubTitlePromo: {
    color: '#7D7B7B',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 20,
    maxWidth: 150,
    textAlign: 'left',
    marginLeft: 20,
  },
  styContPromoLabel: {
    flex: 1,
  },
  styContPromo: {
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
  },
  styContImageIklan: {
    width: 120,
    height: 140,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});
