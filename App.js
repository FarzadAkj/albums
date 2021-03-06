import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// http://23.227.201.71:3100/albums

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    }
  }

  render() {
    console.log('albums in state App.js', this.state.albums);

    return (
      <View style={styles.containerStyle}>
        <Header title="Albums!" />
        <AlbumList data={this.state.albums} />
      </View>
    );
  }

  componentDidMount() {
    axios.get("http://23.227.201.71:3100/albums")
    .then(response => {
      console.log('response: ', response);

      this.setState({ albums: response.data });
    })
    .catch(error => {
      console.log('error: ', error);
    });
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  }
}

export default App;
