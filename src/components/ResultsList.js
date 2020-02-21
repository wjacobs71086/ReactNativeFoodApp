import React from 'react';
import { Text,View,StyleSheet, FlatList } from 'react-native';

const ResultsList = ({header, list}) => {
  return (
    <View>
      <Text style={styles.title}>{header}</Text>
    <FlatList
      horizontal
      data={list}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
      return (
   
      <Text>{item.name}</Text>
      )
      }}
    />
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },  
})
export default ResultsList;