import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons/';

const SearchBar = () => {
  return (
    <View style={styles.viewStyle}>
      <EvilIcons name='search' size={30}/>
      <TextInput 
        style={styles.searchBar}
        placeholder='Search'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 30,
  },
  viewStyle:{
    height: 50,
    borderRadius: 5,
    backgroundColor: '#F0EEEE',
    borderWidth: 2,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 2,
    overflow: 'scroll',
  }, 
})

export default SearchBar;
