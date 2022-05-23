import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import { Shop } from '../context/ShopProvider';

const Products = ({ navigation, route }) => {
  const { category } = route.params;

  const { products } = useContext(Shop);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    (async () => {

      const filtered = products.filter(product => product.category === category);

      setFilteredProducts(filtered);

    })()

  }, [category]);

  const handleNavigation = (item) => {
    navigation.navigate('Detail', {
      product: item
    })
  }

  return (
    <View>
      {filteredProducts.length !== 0 ?
        <FlatList nestedScrollEnabled
          data={filteredProducts}
          renderItem={({ item }) => (
            <ProductCard data={item} handleNavigation={handleNavigation} />)}
          keyExtractor={item => item.id}
        /> :
        <ActivityIndicator size={"large"} color={"purple"} style={{ margin: 50 }} />
      }
    </View>
  )
}

export default Products;