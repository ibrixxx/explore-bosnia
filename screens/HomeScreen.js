import { GOOGLE_MAPS_API_KEY } from '@env';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { useUser, useUserUpdate } from '../authProvider/AuthProvider';
import NavFavorites from '../components/NavFavorites';
import NavOptions from '../components/NavOptions';
import { setOrigin } from '../slices/navSlice';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const user = useUser()
    const setUser = useUserUpdate();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View>
                <Text style={tw`text-blue-400 p-10 text-xl font-bold`}>Explore Bosnia</Text>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details?.geometry.location,
                            description: data.description,
                        }))
                        setUser({...user, origin: {
                            location: details?.geometry.location,
                            description: data.description,
                        }})
                    }}
                    styles={{
                        container: {
                            flex: 0,
                            alignItems: 'center',
                            borderWidth: 2,
                            borderTopColor: 'dodgerblue',
                            borderBottomColor: 'white',
                            borderLeftColor: 'white',
                            borderRightColor: 'white',
                            borderRadius: 5,
                            margin: 14
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    minLength={2}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={350}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    />
                    <NavOptions />
                    <NavFavorites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
