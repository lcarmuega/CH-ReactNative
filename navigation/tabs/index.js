import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from '../stacks/HomeStack';
import CartStack from '../stacks/CartStack';
import UserOrdersStack from '../stacks/UserOrdersStack';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeStack}
                options={{ tabBarIcon: () => (<Image source={require("../../assets/book.png")} style={{ width: 30, height: 30, display: 'flex', marginTop: 5 }} />) }} />
            <Tab.Screen name='Cart' component={CartStack}
                options={{ tabBarIcon: () => (<Image source={require("../../assets/shoppingcart.png")} style={{ width: 30, height: 30, display: 'flex', marginTop: 5 }} />) }} />
            <Tab.Screen name='Orders' component={UserOrdersStack}
                options={{ tabBarIcon: () => (<Image source={require("../../assets/bag.png")} style={{ width: 30, height: 30, display: 'flex', marginTop: 5 }} />) }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;