import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DriverProfileScreen from '../screens/DriverProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Driver" component={DriverProfileScreen} />
        </Stack.Navigator>
    )
}

export default MainStack
