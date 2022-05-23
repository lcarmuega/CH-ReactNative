import React, { useContext } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CartItem from '../components/CartItem';
import { Shop } from '../context/ShopProvider';
import { colors } from '../styles/colors';

const Cart = ({ navigation }) => {

  const { cart, removeFromCart, total } = useContext(Shop);

  const handleDeleteFromCart = (item) => {
    removeFromCart(item);
  }

  const handleCheckout = () => {
    const order = {
      items: cart,
      total: total,
      createdAt: new Date().toLocaleString()
    }

    handleNavigation();
  }

  const handleNavigation = () => {
    navigation.navigate('Orders');
  }

  return (
    <View style={styles.container}>
      {cart.length !== 0 ?
        <View style={styles.innerContainer}>
          <FlatList
            style={styles.cartItem}
            data={cart}
            renderItem={({ item }) => (
              <CartItem data={item} handleDeleteFromCart={handleDeleteFromCart}/>)}
            keyExtractor={item => item.id}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleCheckout}>
              <Text>Checkout</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Total: ${total}</Text>
          </View>
        </View>
        :
        <Text style={styles.mainText}>El carrito está vacio</Text>
      }
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    width: "100%"
  },
  mainText: {
    marginTop: 50,
    fontSize: 25
  },
  cartItem: {
    width: "100%", 
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },  
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.lilac,
    padding: 5,
    margin: 10,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 8,
    width: "30%",
  },
  text: {
    margin: 10
  }
})