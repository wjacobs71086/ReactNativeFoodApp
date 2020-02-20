import React, { useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
import Yelp from '../api/Yelp';

const SearchScreen = () => {
  const [term, setTerm ] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
      const response = await Yelp.get('/search', {
        // this will append ?limit=50 to the search URL
        params: {
          limit: 50
        }
      });
      setResults(response.data.businesses)
  }


  return (
    <View>
      <Text> This is my Search Screen </Text>
      <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default SearchScreen;
