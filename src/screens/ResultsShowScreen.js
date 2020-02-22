import React, {useState,  useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Yelp from '../api/Yelp';


const ResultsShowScreen = ({ navigation }) => {
  // make yelp api call and pass in id
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  }
useEffect(() => {
  getResult(id);
}, []);

  return (
    <View>
      <Text>{(result) ? result.name : null}</Text>
      <Image source={(result) ? {uri: result.photos[0]} : null}/>
    </View>
  )
};

const styles = StyleSheet.create({
  
});

export default ResultsShowScreen;