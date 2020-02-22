import React, {useState,  useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
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

if(!result){
  return null;
}

  return (
    <View>
      <Text>{(result) ? result.name : null}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{ uri: item}}/>
        }}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
    margin: 5,
  },
});

export default ResultsShowScreen;