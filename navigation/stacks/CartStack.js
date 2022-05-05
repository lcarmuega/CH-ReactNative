import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../screens/Cart";

const CartStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart Overview"
            component={Cart}
            options={{ title: "Cart" }} />
        </Stack.Navigator>
    )
}

export default CartStack;