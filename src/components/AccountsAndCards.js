import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

export default () => {
  const {
    container,
    fontMd,
    spaceBetween,
    row,
    fontWhite,
    title,
    fontPink,
    dashed,
  } = styles;

  return (
    <View style={container}>
      <View style={[row, spaceBetween]}>
        <Text style={[title, fontWhite]}>Contas e cartões</Text>
        <Icon name="visibility" color="#FF1493" />
        {/* <Icon name="visibility-off" color="red" /> */}
      </View>
      <View style={[row, spaceBetween]}>
        <Text style={[fontMd, fontWhite]}>Investimentos</Text>
        <View style={dashed} />
        <Text style={[fontMd, fontWhite]}>R$ 2.030,00</Text>
      </View>
      <View style={[row, spaceBetween]}>
        <Text style={[fontMd, fontWhite]}>Carteira</Text>
        <View style={dashed} />
        <Text style={[fontMd, fontWhite]}>R$ 200,00</Text>
      </View>
      <View style={[row, spaceBetween]}>
        <Text style={[fontMd, fontWhite]}>Total</Text>
        <View style={dashed} />
        <Text style={[fontMd, fontWhite]}>R$ 2.230,00</Text>
      </View>
      <View style={row}>
        <Text style={[fontPink, fontMd]}>Ir para contas e cartões</Text>
        <Icon name="payment" color="#FF1493" size={18} marginLeft={5} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: '#4B0082',
    justifyContent: 'space-around',
    padding: 16,
    paddingHorizontal: 25,
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row',
  },

  fontWhite: {
    color: 'white',
  },

  fontPink: {
    color: '#FF1493',
  },

  title: {
    fontSize: 20,
  },

  fontMd: {
    fontSize: 16,
  },

  dashed: {
    flex: 1,
    margin: 4,
    alignSelf: 'flex-end',
    height: 0,
    borderRadius: 1,
    borderStyle: 'dashed',
    borderWidth: 0.5,
    borderColor: 'white',
  },
});
