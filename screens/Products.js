import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/data';

const Products = ({ navigation, route }) => {
    const { category } = route.params;

    const [products, setProducts] = useState([]);

    useEffect(() => {

        (async () => {
            const promesa = new Promise((acc, rej) => {
              const response = PRODUCTS;
              setTimeout(() => {
                acc(response); 
              }, 1000)
            })
            try {
              const respuesta = await promesa;
              const products = respuesta;
              const filteredProduts = products.filter(prod => prod.category === category);
              setProducts(filteredProduts);
            } catch (error) {
              console.log(error);
            }
        })()

    }, [category])

    const handleNavigation = (item) => {
        navigation.navigate('Detail', {
          product: item
        })
    }


    return (
      <View>
      {products.length !== 0 ? 
        <FlatList nestedScrollEnabled 
          data={products}
          renderItem={({ item }) => (
            <ProductCard data={item} handleNavigation={handleNavigation} />)}
          keyExtractor={item => item.id}
        /> :
        <ActivityIndicator size={"large"} color={"purple"} style={{margin: 50}} />
      }
    </View>
    )
}

export default Products;