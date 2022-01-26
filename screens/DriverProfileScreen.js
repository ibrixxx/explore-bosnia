import { View, Text, Image } from 'react-native';
import React from 'react';
import { Caption, Divider, Title } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SoulScreen from './SoulScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Rating } from 'react-native-ratings';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import DriverOffers from '../driverScreens/DriverOffers';
import AboutDriver from '../driverScreens/AboutDriver';
import DriverReviews from '../driverScreens/DriverReviews';

const Tab = createMaterialTopTabNavigator();

const DriverProfileScreen = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#b3edff'}}>
        <View style={{borderWidth: 5, borderColor: 'dodgerblue', borderRadius: 14, width: '30%', height: '90%', margin: '2%'}}>
            <Image source={{uri: 'https://cdn-1.motorsport.com/static/img/amp/5200000/5280000/5281000/5281700/5281738/s6_1000229/1000229.jpg'}} style={{width: '100%', height: '100%', borderRadius: 9}}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <Title>Max Verstapen</Title>
            <Caption>Hometown</Caption>
            <Rating 
                imageSize={14}
                readonly={true}
                startingValue={5}
                tintColor='#b3edff'
                style={{marginTop: 5}}
            />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginBottom: '5%'}}>
            <Caption>Online: </Caption>
            <MaterialIcons name="online-prediction" size={24} color="green" />
            <Feather name="wifi-off" size={14} style={{padding: 5}} color="firebrick" />
        </View>
      </View>
      <Divider style={{width: '100%', height: 4, backgroundColor: 'dodgerblue'}} />
      <View style={{flex: 6}}>
        <Tab.Navigator>
            <Tab.Screen name="RouteOffers" component={DriverOffers} options={{tabBarLabel: 'offers'}}/>
            <Tab.Screen name="AboutDriver" component={AboutDriver} options={{tabBarLabel: 'about'}}/>
            <Tab.Screen name="DriverReviews" component={DriverReviews} options={{tabBarLabel: 'reviews'}}/>
        </Tab.Navigator>
      </View>  
    </SafeAreaView>
  );
}
export default DriverProfileScreen