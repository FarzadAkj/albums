import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Hello World!!</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', // left to right
    justifyContent: 'center', // top to bottom
  }
}

export default App;
