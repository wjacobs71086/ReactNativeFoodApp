import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons/';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.viewStyle}>
      <EvilIcons 
        name='search' 
        style={styles.iconStyle}
        />
      <TextInput 
        style={styles.searchBar}
        placeholder='Search'
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 18,
    width: 345,
  },
  iconStyle:{
    fontSize: 40,
    alignSelf: 'center',
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
  }, 
})

export default SearchBar;
