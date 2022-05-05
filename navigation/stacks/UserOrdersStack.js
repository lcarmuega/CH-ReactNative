import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserOrders from '../../screens/UserOrders';

const UserOrdersStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="User Orders"
            component={UserOrders}
            options={{ title: "Orders" }} />
        </Stack.Navigator>
    )
}

export default UserOrdersStack;