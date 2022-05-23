import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../styles/colors';

const CartItem = ({ data, handleDeleteFromCart }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.text}>${data.price}</Text>
            <Text style={styles.text}>Quantity: {data.quantity}</Text>
            <Text style={styles.text}>Total: ${data.quantity*data.price}</Text>

            <TouchableOpacity style={styles.button} onPress={() => handleDeleteFromCart(data)}>
                <Text>Remove Item</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.superLightBrown,
        height: 160,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        width: "95%"
    },
    title: {
        fontSize: 15,
        marginLeft: 5
    },
    text: {
        marginLeft: 5
    },
    button: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.lightBrown,
        padding: 5,
        margin: 10,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 8,
        width: "30%"
    }
})