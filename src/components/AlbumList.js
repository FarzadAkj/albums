import React from 'react';
import { View, Text } from 'react-native';

import Card from './Card';

renderAlbums = (album) => {
  return (
    <Card key={album.url}>
      <Text>
        {album.title}
      </Text>
    </Card>
  );
}

const AlbumList = (props) => {
  return (
    <View>
      {props.data.map(album => renderAlbums(album))}
    </View>
  );
}

export default AlbumList;
