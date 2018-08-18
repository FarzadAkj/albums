import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
}

export default Button;
