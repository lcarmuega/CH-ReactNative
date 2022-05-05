import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../screens/Categories';
import ProductDetail from '../../screens/ProductDetail';
import Products from '../../screens/Products';


const HomeStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name='Book Categories'
                    component={Categories}
                    options={{ title: 'Categories' }} />
                <Stack.Screen name='Products'
                    component={Products} />
                <Stack.Screen name='Detail'
                component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default HomeStack;