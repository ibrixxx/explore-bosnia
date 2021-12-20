import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc';


const data = [
    {
        id: 1,
        icon: 'home',
        location: 'Home',
        destination: 'Sarajevo, Bosnia and Hercegovina'
    },
    {
        id: 2,
        icon: 'briefcase',
        location: 'Work',
        destination: 'Sarajevo, Bosnia and Hercegovina'
    },
]


const NavFavorites = () => {
    return (
        <FlatList
            data={data} 
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, {height: 0.5}]} />}
            renderItem={({item}) => 
                <TouchableOpacity style={tw`flex-row p-5 items-center`}>
                    <Icon 
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type={'ionicon'}
                        color={'white'}
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                        <Text style={tw`text-gray-500`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            }
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
