import React from 'react';
import GifItem from './GifItem';
import { List, ListItem } from 'react-native-elements'

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });

  return (
    <List>
    {gifItems}
    </List>
  );
};

export default GifList;
