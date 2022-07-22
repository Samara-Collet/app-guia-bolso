import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default ({data}) => {
  const {
    container,
    title,
    fontMd,
    fontLg,
    fontGray,
    row,
    flex1,
    spaceBetween,
    flexEnd,
  } = styles;
  const planning = data?.planning;
  const needsToPlanned = planning?.planned - planning?.income;
  return (
    <View style={container}>
      <Text style={title}>Planejamento do mês</Text>
      <View style={[row]}>
        <View style={flex1}>
          <Text style={[fontGray, fontMd]}>Renda</Text>
          <Text style={fontLg}>R$ {planning?.income || 0}</Text>
        </View>
        <View style={[row, flex1, spaceBetween, flexEnd]}>
          <Text style={[fontGray, fontMd]}>planejados</Text>
          <Text style={fontMd}>R$ {planning?.planned}</Text>
        </View>
      </View>

      <Text style={fontMd}>R$ {needsToPlanned} para alcançar o planejado</Text>
      <View>
        <Text style={[fontGray, fontMd]}>Gastos</Text>
        <Text style={fontLg}>R$ {planning?.outgoing || 0}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: 'space-around',
    padding: 14,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    margin: 25,
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

  flex1: {
    flex: 1,
  },

  fontMd: {
    fontSize: 16,
  },

  fontLg: {
    fontSize: 25,
  },
});
