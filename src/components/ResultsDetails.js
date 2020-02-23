import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';


const ResultDetails = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.text}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginLeft: 15,
    marginBottom: 15,
  },
  image:{
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    color: '#1B676B',
  },
  text: {
    color: '#1B676B',
  },
})

export default ResultDetails;
