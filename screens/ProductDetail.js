import React, { useContext, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Shop } from '../context/ShopProvider';
import { colors } from '../styles/colors';

const ProductDetail = ({ navigation, route }) => {
  const { product } = route.params;

  const { addToCart } = useContext(Shop);

  const handleAddToCart = () => {
    addToCart(product);
    handleNavigation();
  }

  const handleNavigation = () => {
    navigation.navigate('Cart');
  }

  return (
    <View style={styles.scrollContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image}
          source={{ uri: product.image }}></Image>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.author}>{product.author}</Text>
        <Text style={styles.descriptionText} >{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductDetail;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  author: {

  },
  descriptionText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 10
  },
  price: {
    margin: 10
  },
  image: {
    height: 300,
    width: '95%',
    resizeMode: 'contain',
    margin: 10
  }, 
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.superLightBrown,
    padding: 5,
    margin: 10,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 8,
    width: "30%"
  }
})