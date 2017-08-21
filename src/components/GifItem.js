import React from 'react';
import {
  Image
} from 'react-native';

const GifItem = (image) => {
  return (
      <Image source={{uri: image.gif.images.downsized.url}}
      style={{width: 150, height: 150}} />
  )
};

export default GifItem;
