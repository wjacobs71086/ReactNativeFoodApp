import React, {useState,  useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Linking } from 'react-native';
import Yelp from '../api/Yelp';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
      <TouchableOpacity onPress={() => Linking.openURL(result.url).catch((err) => console.error('An error occurred', err))}>
      <Text style={styles.title}>{result.name}</Text></TouchableOpacity>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center', marginBottom: 15}}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{ uri: item}}/>
        }}
        />
      <Text>Address:</Text>
      <Text>{result.location.display_address[0]}</Text>
      <Text>{result.location.display_address[1]}</Text>
      <Text>{result.location.display_address[2]}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
    marginLeft: 15,
    borderRadius: 5,
  },
  title:{
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
});

export default ResultsShowScreen;