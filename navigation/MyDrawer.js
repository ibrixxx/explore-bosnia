import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, Dra} from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen'
import {Image, View, SafeAreaView, Linking} from 'react-native'
import MainStack from './MainStack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import OrderFoodScreen from '../screens/OrderFoodScreen';
import DriversScreen from '../screens/DriversScreen';
import BillingScreen from '../screens/BillingScreen';
import PlacesScreen from '../screens/PlacesScreen';
import SoulScreen from '../screens/SoulScreen'

const Drawer = createDrawerNavigator();


const screenOptions = {
  drawerActiveTintColor: 'dodgerblue', 
  drawerLabelStyle: {fontSize: 16, fontWeight: 'bold'}, 
  headerShown: false
}


const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView style={{flex: 1, height: '100%'}}>
      <View style={{width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: '100%', height: '100%'}} resizeMode='cover' source={{uri: 'https://source.ba/local_files/galerijaSlike/24904d80725d4d9eaf43da44dd3b3486.jpg'}}/>
      </View>
      <DrawerContentScrollView {...props} style={{height: '100%'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
        <DrawerItem
            label="Settings"
            icon={() => <Ionicons name='settings-outline' size={24} color={'black'} />}
            onPress={() => Linking.openURL('https://quran.com/61')}
        />
        <DrawerItem
          label="Help"
          icon={() => <MaterialIcons name="help-outline" size={24} color="black" />}
          onPress={() => Linking.openURL('https://quran.com/61')}
        />
        <DrawerItem
          label="Log out"
          icon={() => <SimpleLineIcons name="logout" size={24} color="black" />}
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=2ermATsCofM&ab_channel=MAsif')}
          style={{marginBottom: 15}}
        /> 
    </SafeAreaView>
  );
}


const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="HomeStack" 
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={MainStack}
        options={{ drawerLabel: 'Home', ...screenOptions, drawerIcon: () => <Ionicons name='home' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Drivers"
        component={DriversScreen}
        options={{ drawerLabel: 'Drivers', ...screenOptions, headerShown:true, drawerIcon: () => <Ionicons name='car-sport-sharp' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Billing"
        component={BillingScreen}
        options={{ drawerLabel: 'Billing', ...screenOptions, drawerIcon: () => <Ionicons name='card' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Food"
        component={OrderFoodScreen}
        options={{ drawerLabel: 'Order food', ...screenOptions, drawerIcon: () => <Ionicons name='fast-food-outline' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Places"
        component={PlacesScreen}
        options={{ drawerLabel: 'Places', ...screenOptions, drawerIcon: () => <Ionicons name='map-sharp' size={30} color={'black'} /> }}
      />
      <Drawer.Screen
        name="Masjids"
        component={SoulScreen}
        options={{ drawerLabel: 'Masjids', ...screenOptions, drawerIcon: () => <FontAwesome5 name='mosque' size={24} color={'black'} /> }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;