import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserOrders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>No hay ordenes cargadas!</Text>
    </View>
  )
}

export default UserOrders;

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