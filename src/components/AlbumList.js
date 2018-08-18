import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import Card from './Card';
import CardItem from './CardItem';

// https://teamairship.com/wp-content/uploads/2017/10/react-native-workshop.jpg

renderAlbums = (album) => {
  return (
    <Card key={album.url}>
      <CardItem>
        <View style={styles.thubmnailContainerStyle}>
          <Image
            source={{ uri: "https://teamairship.com/wp-content/uploads/2017/10/react-native-workshop.jpg" }}
            style={{ width: 50, height: 50, borderRadius: 5 }}
            />
        </View>

        <View style={styles.headerContainerStyle}>
          <Text style={{ fontSize: 18 }}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image
          source={{ uri: album.image }}
          style={{ width: null, flex: 1, height: 300 }}
          />
      </CardItem>
    </Card>
  );
}

const AlbumList = (props) => {
  return (
    <ScrollView>
      {props.data.map(album => renderAlbums(album))}
    </ScrollView>
  );
}

const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 2,
  },
  thubmnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
}

export default AlbumList;
