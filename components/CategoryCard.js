import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CategoryCard = ({ data, handleNavigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleNavigation(data.title)}>
            <Text style={styles.title} >{data.title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      marginHorizontal: 20,
      backgroundColor: "#CBC3E3",
      height: 50
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold'
    }
  })