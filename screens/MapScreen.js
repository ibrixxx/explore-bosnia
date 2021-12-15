import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Map from '../components/Map';

const MapScreen = () => {
    return (
        <View>
            <SafeAreaView>
                <View style={tw`h-1/2`}><Map /></View>
                <View style={tw`h-1/2`}></View>
            </SafeAreaView>
        </View>
    )
}

export default MapScreen
