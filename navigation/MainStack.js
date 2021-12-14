import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NavOptions from '../components/NavOptions';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notifications" component={NavOptions} />
        </Stack.Navigator>
    )
}

export default MainStack
