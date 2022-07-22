import {Icon} from '@rneui/themed';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default () => {
  const {container, row, title} = styles;
  return (
    <View style={[container, row]}>
      <Text style={title}>Julho</Text>
      <Icon name="expand-more" color="#FF1493" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: '#4B0082',
    padding: 20,
    paddingHorizontal: 25,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    marginRight: 8,
    color: 'white',
  },
});
