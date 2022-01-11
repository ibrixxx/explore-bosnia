import { GOOGLE_MAPS_API_KEY } from '@env';
import React, { useRef } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import MenuBars from '../components/MenuBars';
import NavFavorites from '../components/NavFavorites';
import NavOptions from '../components/NavOptions';
import { countryScope } from '../constants/constants';
import { setDestination, setOrigin } from '../slices/navSlice';


const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const autocomplete = useRef(null)


    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <MenuBars navigation={navigation} />
            <View>
                <Text style={tw`text-blue-400 text-center p-10 text-xl font-bold`}>Explore Bosnia</Text>
                <GooglePlacesAutocomplete
                    ref={autocomplete}
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details?.geometry.location,
                            description: data.description,
                        }))
                        dispatch(setDestination(null))
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
                    renderRightButton={() => 
                        <View style={{padding: 5}}>
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
                    <NavOptions />
                    <NavFavorites origin={true} navigation={navigation}/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen