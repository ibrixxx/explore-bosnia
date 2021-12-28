import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const RideOptionsCard = () => {

    return (
        <SafeAreaView>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
        </SafeAreaView>
    )
}

export default RideOptionsCard

