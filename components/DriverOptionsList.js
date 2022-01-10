import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc';

const CHARGE_RATE = 1.5

const DriverOptionsList = ({id, item, title, price, carImage, expectedTime, selectedItem, onPress}) => {
    return (
        <TouchableOpacity 
            onPress={() => onPress(item)}
            style={tw`flex-row justify-between items-center ${id === selectedItem?.id && 'bg-gray-200'}`}>
            <Image 
                style={{
                    width: 100,
                    height: 100,
                    marginRight: 10,
                    resizeMode: 'contain'
                }}
                source={{uri: carImage}}
            />
            <View style={tw`-ml-6 p-4`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>{expectedTime?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`mr-3 font-bold`}>
                {/* {
                    new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'BAM',
                    }).format(
                        (expectedTime?.duration?.value * CHARGE_RATE * price) / 100
                    )
                } */}
                {'$ ' + (expectedTime?.duration?.value * CHARGE_RATE * price) / 100}
            </Text>
        </TouchableOpacity>
    )
}

export default DriverOptionsList
