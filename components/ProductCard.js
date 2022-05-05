import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ data, handleNavigation }) => {
  return (
    <TouchableOpacity onPress={() => handleNavigation(data)} style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text>${data.price}</Text>
    </TouchableOpacity>
  )
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#D3D3D3",
    height: 50
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})