import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header title="Albums!" />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  }
}

export default App;
