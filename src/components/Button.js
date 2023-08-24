import {Pressable} from 'react-native';
import React from 'react';
import {IconArrowRight, IconKeranjang} from '../property/assets';

const Button = props => {
  const {icon, onPress, style, width} = props;
  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconKeranjang />;
    } else if (icon === 'arrowRight') {
      return <IconArrowRight width={width} />;
    }

    return null;
  };
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon />
    </Pressable>
  );
};

export default Button;
