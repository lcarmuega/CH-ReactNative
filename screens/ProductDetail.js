import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  useEffect(() => {
    console.log(product)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.descriptionText} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor sem a sem malesuada, eget posuere est sagittis. Quisque varius risus id felis iaculis, nec bibendum augue scelerisque. Aliquam sit amet dictum augue, at volutpat urna. Quisque finibus malesuada neque, a maximus diam varius sed. Nunc nisl massa, fermentum et orci vel, sagittis posuere mauris. Donec aliquet nisi eu interdum faucibus. </Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
    height: 50
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  descriptionText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 10
  },
  price: {
    margin: 10
  }
})