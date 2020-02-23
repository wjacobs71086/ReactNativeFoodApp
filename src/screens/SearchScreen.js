import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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

  const renderLoading =() =>{
    if(loading){
      return <Text style={styles.loading}>Loading...</Text>
    } else {
      return (
        <View>
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
      )
    }
  }


  return (
    <ScrollView style={styles.background}>
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {error ? <Text>{error}</Text> : null}
      {renderLoading()}
    </>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  list:{
    marginTop: 20,
  },
  loading:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  background: {
    backgroundColor: '#EAFDE6',
  },
});

export default SearchScreen;
