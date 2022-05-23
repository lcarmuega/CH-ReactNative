import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { Shop } from '../context/ShopProvider';
import { auth } from '../firebase/config';
import { colors } from '../styles/colors';

const Categories = ({ navigation }) => {
  
  const {categories} = useContext(Shop);

  const handleNavigation = (categoryName) => {
    navigation.navigate('Products', {
      category: categoryName
    })
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}><Text> Sign Out</Text></TouchableOpacity>
      {categories.length !== 0 ? 
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryCard data={item} handleNavigation={handleNavigation} />)}
          keyExtractor={item => item.id}
        /> :
        <ActivityIndicator size={"large"} color={"purple"} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lilac,
    padding: 5,
    margin: 10,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 8,
    width: "30%"
  }
})

export default Categories; 