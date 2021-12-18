import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Map from '../components/Map';
import RideOptionsCard from '../components/RideOptionsCard';
import NavigateCard from '../components/NavigateCard';

//const Stack = createStackNavigator();

const MapScreen = () => {

    return (
        <View>
            <SafeAreaView>
                <View style={tw`h-1/2`}>
                    <Map />
                </View>

                <View style={tw`h-1/2`}>
                    {/* <Stack.Navigator>
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
                    </Stack.Navigator> */}
                </View>
            </SafeAreaView>
        </View>
    )
}

export default MapScreen
