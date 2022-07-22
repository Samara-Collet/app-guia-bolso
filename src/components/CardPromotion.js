import {Icon} from '@rneui/base';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({item}) => {
  const {card, topCard, middleCard, endCard, fontWhite, fontMd} = styles;

  return (
    <View style={[card]}>
      <Text style={[topCard, fontMd, fontWhite]}>{item.text}</Text>
      <View style={middleCard}>
        <Icon name={item.icon} color="black" />
      </View>
      <Text style={[endCard, fontWhite]}>{item.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    padding: 16,
    width: 180,
    backgroundColor: '#44a246',
    borderRadius: 10,
    marginRight: 15,
    alignItems: 'center',
  },

  topCard: {
    flex: 3,
  },

  middleCard: {
    margin: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
  },

  endCard: {
    marginTop: 6,
    flex: 1,
  },

  fontWhite: {
    color: 'white',
    fontWeight: 'bold',
  },

  fontMd: {
    fontSize: 16,
  },
});
