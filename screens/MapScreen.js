import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Map from '../components/Map';
import RideOptionsCard from '../components/RideOptionsCard';
import NavigateCard from '../components/NavigateCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

const Stack = createStackNavigator();

const MapScreen = () => {
    const navigation = useNavigation()

    return (
        <View>

            <TouchableOpacity 
                style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 shadow-lg rounded-full`}
                onPress={() => navigation.goBack()}
            >
                <Icon name='menu' />
            </TouchableOpacity>            

            <SafeAreaView>
                <View style={tw`h-1/2`}>
                    <Map />
                </View>

                <View style={tw`h-1/2`}>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name='NavigateCard'
                            component={NavigateCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen 
                            name='RideOptionsCard'
                            component={RideOptionsCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default MapScreen
