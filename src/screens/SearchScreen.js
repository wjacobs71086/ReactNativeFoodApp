import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [loading, error, searchApi, results] = useResults();

  // price is represented in strings '$$'
  const filterResultsByPrice = price => {
    return results.filter(business => business.price === price);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {loading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error}</Text> : null}
      {results.length > 0 ? (
        <Text>We have found {results.length} results</Text>
      ) : null}
      <ResultsList
        list={filterResultsByPrice("$")}
        header="Cost Effective"
      />
      <ResultsList 
        list={filterResultsByPrice("$$")}
        header="Avg Cost" />
      <ResultsList 
        list={filterResultsByPrice("$$$")}
        header="More Expensive" />
      <ResultsList 
        list={filterResultsByPrice("$$$$")}
        header="VERY Expensive" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
