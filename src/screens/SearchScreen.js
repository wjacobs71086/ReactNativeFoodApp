import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchApi = async () => {
    setLoading(true);
    try {
      const response = await Yelp.get("/search", {
        // this will append ?limit=50 to the search URL
        params: {
          limit: 50,
          term,
          location: "los angeles"
        }
      });
      setResults(response.data.businesses);
      setLoading(false); 
    } catch(err) {
      console.log({error: err});
      setLoading(false);
      setError(`${err}`);
    }
  };

  return (
    <View>
      <Text> This is my Search Screen </Text>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {loading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
