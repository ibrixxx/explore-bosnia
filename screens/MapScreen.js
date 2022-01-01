import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Map from '../components/Map';
import RideOptionsCard from '../components/RideOptionsCard';
import NavigateCard from '../components/NavigateCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { FAB } from 'react-native-paper';

const Stack = createStackNavigator();

const MapScreen = () => {
    const navigation = useNavigation()

    return (
        <View>          
            <SafeAreaView>
                
                <FAB
                    style={styles.fab}
                    small
                    icon="menu"
                    onPress={() => navigation.goBack()}
                />

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

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      left: 0,
      top: 20,
      backgroundColor: 'white',
      zIndex: 100,
    },
  })