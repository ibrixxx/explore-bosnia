import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectOrigin } from '../slices/navSlice';


const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

    return (
        <View style={[{justifyContent: 'center', alignItems: 'center'}, tw`${!origin && 'opacity-40'}`]}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Nav')} 
                style={tw`border-2 border-black rounded-md p-4 bg-gray-200`}
                disabled={!origin}
                >
                <Image 
                    style={{width: 140, height: 120, resizeMode: 'contain', margin: 0, padding: 0, top: 0}}
                    source={{uri: 'https://www.ccarprice.com/products/Mercedes_AMG_GT_63_S_E_Performance_2023_price.jpg'}}
                />
                <Text style={tw`mt-2 font-semibold text-lg`}>Get a ride</Text>
                <Icon 
                    style={tw`bg-black p-2 rounded-full w-10 mt-4`}
                    name={'arrowright'}
                    color={'white'}
                    type={'antdesign'}
                />
            </TouchableOpacity>
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({})
