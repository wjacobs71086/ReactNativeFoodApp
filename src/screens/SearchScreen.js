import React, { useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm ] = useState('');

  return (
    <View>
      <Text> This is my Search Screen </Text>
      <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('submitted', term)}
      />
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default SearchScreen;
