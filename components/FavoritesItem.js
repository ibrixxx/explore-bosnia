import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc';


const FavoritesItem = ({onPress, item}) => {
    return (
        <TouchableOpacity onPress={() => onPress(item)} style={tw`flex-row p-5 items-center`}>
            <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={item.icon}
                type={'ionicon'}
                color={'white'}
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{item.name}</Text>
                <Text style={tw`text-gray-500`}>{item.destination}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FavoritesItem
