import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { setOrigin, setDestination } from '../slices/navSlice';


const data = [
    {
        id: 1,
        icon: 'home',
        name: 'Home',
        location: {
            lat: 44.05491272817215,
            lng: 17.438935754272265,
        },
        destination: 'Bugojno, Bosnia and Hercegovina'
    },
    {
        id: 2,
        icon: 'briefcase',
        name: 'Work',
        location: {
            lat: 43.83438004509203, 
            lng: 18.341591603368474,
        },
        destination: 'Sarajevo, Bosnia and Hercegovina'
    },
]


const NavFavorites = ({origin ,navigation}) => {
    const dispatch = useDispatch();

    const onPress = (e) => {
        if(origin) {
            dispatch(setOrigin({
                location: e.location,
                description: e.destination,
            }))
            navigation.navigate('Map')
        }
        else {
            dispatch(setDestination({
                location: e.location,
                description: e.destination,
            }))
            navigation.navigate('RideOptionsCard')
        }
    }

    return (
        <FlatList
            data={data} 
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, {height: 0.5}]} />}
            renderItem={({item}) => 
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
            }
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
