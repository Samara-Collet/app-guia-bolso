import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CardPromotion from './CardPromotion';

export default ({data}) => {
  const promotions = data?.promotions;
  const {container, spaceBetween, fontGray, title} = styles;
  const cardRender = ({item}) => <CardPromotion item={item} />;

  return (
    <View style={[container, spaceBetween]}>
      <Text style={[title, fontGray]}>Para você</Text>
      <FlatList
        data={promotions}
        renderItem={cardRender}
        horizontal={true}
        marginTop={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: 16,
    paddingHorizontal: 25,
  },

  flexEnd: {
    alignSelf: 'flex-end',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row',
  },

  fontGray: {
    color: 'gray',
  },

  title: {
    fontSize: 20,
  },
});
