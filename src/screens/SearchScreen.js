import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchApi = async (searchTerm) => {
    setLoading(true);
    setResults([]);
    try {
      const response = await Yelp.get("/search", {
        // this will append ?limit=50 to the search URL
        params: {
          limit: 50,
          term: searchTerm,
          location: "los angeles"
        }
      });
      setResults(response.data.businesses);
      setLoading(false); 
    } catch(err) {
      setLoading(false);
      setError(`${err}`);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  })


  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {loading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error}</Text> : null}
      {results.length > 0 ? <Text>We have found {results.length} results</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
