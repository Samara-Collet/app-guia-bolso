import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default ({data}) => {
  const loan = data?.loan_amount;
  const {container, title, fontMd, fontLg} = styles;

  return (
    <View style={container}>
      <Text style={title}>
        Descubra o valor do empréstimo que você pode levar agora mesmo:
      </Text>
      <Text style={fontLg}>R$ {loan || 0}</Text>
      <Text style={fontMd}>Descubra o valor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'space-around',
    padding: 14,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    marginHorizontal: 25,
  },

  title: {
    fontSize: 20,
  },

  fontMd: {
    fontSize: 16,
    color: 'red',
  },

  fontLg: {
    fontSize: 25,
  },
});
