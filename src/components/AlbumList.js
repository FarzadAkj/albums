import React from 'react';
import { View, Text } from 'react-native';

renderAlbums = (album) => {
  return (
    <View key={album.url}>
      <Text>
        {album.title}
      </Text>
    </View>
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
