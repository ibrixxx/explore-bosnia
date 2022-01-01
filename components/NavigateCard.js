import { GOOGLE_MAPS_API_KEY } from '@env';
import { useNavigation } from '@react-navigation/core';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { countryScope } from '../constants/constants';
import { setDestination } from '../slices/navSlice';
import NavFavorites from './NavFavorites';



const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const autocomplete = useRef(null)


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center text-xl py-5`}>Good morning, username</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        ref={autocomplete}
                        placeholder='Where to?'
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details?.geometry.location,
                                description: data.description,
                            }))
                            navigation.navigate('RideOptionsCard')
                        }}
                        styles={{
                            container: {
                                flex: 0,
                                paddingTop: 20,
                                backgroundColor: 'white',
                            },
                            textInput: {
                                fontSize: 18,
                                borderRadius: 0,
                                backgroundColor: 'lightgray'
                            },
                            textInputContainer: {
                                paddingBottom: 0,
                                paddingHorizontal: 20,
                            }
                        }}
                        renderRightButton={() => 
                            <View style={{padding: 5, backgroundColor: 'lightgray', height: '90%'}}>
                                <Icon
                                    size={30}
                                    color='gray' 
                                    name='close-outline'
                                    type={'ionicon'}
                                    onPress={() => autocomplete.current.clear()}
                                />
                            </View>
                        }
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        enableHighAccuracyLocation={true}
                        minLength={2}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={350}
                        query={{
                            key: GOOGLE_MAPS_API_KEY,
                            language: 'en',
                            components: countryScope
                        }}
                    />
                    <NavFavorites origin={false} navigation={navigation}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

