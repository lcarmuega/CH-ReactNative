import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>El carrito está vacio</Text>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50
  },
  mainText: {
    fontSize: 25
  }
})