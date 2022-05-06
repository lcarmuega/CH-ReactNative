import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { auth } from '../firebase/config';

const CATEGORIES = [
  {
    id: 1,
    name: "Fiction"
  },
  {
    id: 2,
    name: "Non-Fiction"
  }
];

const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    (async () => {
      const promesa = new Promise((acc, rej) => {
        const response = CATEGORIES;
        setTimeout(() => {
          acc(response);
        }, 1000)
      })
      try {
        const respuesta = await promesa;
        const categories = respuesta;
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    })()

  }, [])

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
      <TouchableOpacity onPress={handleSignOut}><Text> Sign Out</Text></TouchableOpacity>
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

export default Categories; 