import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../styles/colors';

const Modal = ({ message, handleCloseModal }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleCloseModal()}>
                <Text>Aceptar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Modal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        backgroundColor: colors.darkGrey
    },
    title: {
        fontSize: 25,
        margin: 5,
        color: colors.lightBrown
    },
    button: {
        margin: 5,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 8,
        width: 100,
        alignItems: 'center',
        backgroundColor: colors.lilac
    }
});