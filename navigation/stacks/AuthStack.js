import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Auth from '../../screens/Auth';

const AuthStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Authentication"
            component={Auth}
            options={{ title: "Authentication" }} />
        </Stack.Navigator>
    )
}

export default AuthStack; 