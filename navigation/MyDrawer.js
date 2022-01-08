import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen'
import MainStack from './MainStack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="HomeStack"
        component={MainStack}
        options={{ drawerLabel: 'Home', drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'}, headerShown: false, drawerIcon: () => <Ionicons name='home' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Drivers"
        component={MapScreen}
        options={{ drawerLabel: 'Drivers', drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'}, headerShown: false, drawerIcon: () => <Ionicons name='car-sport-sharp' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Billing"
        component={MapScreen}
        options={{ drawerLabel: 'Billing', drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'}, headerShown: false, drawerIcon: () => <Ionicons name='card' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Food"
        component={MapScreen}
        options={{ drawerLabel: 'Order food', drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'}, headerShown: false, drawerIcon: () => <Ionicons name='fast-food-outline' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Places"
        component={MapScreen}
        options={{ drawerLabel: 'Places', drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'}, headerShown: false, drawerIcon: () => <Ionicons name='map-sharp' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Masjids"
        component={MapScreen}
        options={{ drawerLabel: 'Masjids', drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'}, headerShown: false, drawerIcon: () => <FontAwesome5 name='mosque' size={24} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Settings"
        component={MapScreen}
        options={{ drawerLabel: 'Settings', drawerLabelStyle: {fontSize: 18, fontWeight: 'bold'}, headerShown: false, drawerIcon: () => <Ionicons name='settings' size={30} color={'black'} /> }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;