import React from 'react';
import { Text,View,StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultsDetails';
const ResultsList = ({header, list, navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Result')}>
          <ResultDetails result={item}/>
        </TouchableOpacity>
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
    marginBottom: 5,
  },  
})
export default ResultsList;