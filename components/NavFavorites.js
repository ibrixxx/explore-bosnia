import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { setDestination, setOrigin } from '../slices/navSlice';
import FavoritesItem from './FavoritesItem';


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
    const [currentLocation, setCurrentLocation] = useState(null)


    useEffect(() => {
        if(origin)
            (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        
            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                id: 3,
                icon: 'locate-outline',
                name: 'My current location',
                location: {
                    lat: location.coords.latitude, 
                    lng: location.coords.longitude,
                },
                destination: ''
            });
            })();
    }, []);


    const onPress = (e) => {
        if(origin) {
            dispatch(setOrigin({
                location: e.location,
                description: e.destination,
            }))
            dispatch(setDestination(null))
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
        <View>
            {currentLocation && origin && <FavoritesItem onPress={onPress} item={currentLocation} />}
            <FlatList
                data={data} 
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, {height: 0.5}]} />}
                renderItem={({item}) => <FavoritesItem onPress={onPress} item={item} />}
            />
        </View>
    )
}

export default NavFavorites
