import React from 'react';
import {
  Image
} from 'react-native';

const GifItem = (image) => {
  return (
      <Image source={{uri: image.gif.url}}
      style={{width: 100, height: 100}} />
  )
};

export default GifItem;
