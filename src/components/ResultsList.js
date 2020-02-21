import React from 'react';
import { Text,View,StyleSheet, FlatList } from 'react-native';
import ResultDetails from './ResultsDetails';
const ResultsList = ({header, list}) => {
  return (
    <View>
      <Text style={styles.title}>{header}</Text>
    <FlatList
      horizontal
      data={list}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
      return (
        <ResultDetails result={item}/>
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
    marginLeft: 15,
  },  
})
export default ResultsList;