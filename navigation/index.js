import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import AuthStack from './stacks/AuthStack';
import TabNavigator from './tabs';

const MainNavigator = () => {
    const [user, setUser] = useState(null);

    const Stack = createNativeStackNavigator();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const uid = user.uid;
            } else {
                setUser(null);
            }
        });
    }, [])

    return (
        <NavigationContainer>
            {user ?
                <TabNavigator></TabNavigator>
                :
                <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator;