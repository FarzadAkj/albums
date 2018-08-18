import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { headerStyle, textStyle } = styles;

  return (
    <View style={headerStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
}

const styles = {
  headerStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    padding: 12,
    elevation: 4,
  },
  textStyle: {
    fontSize: 20,
  },
}

export default Header;
