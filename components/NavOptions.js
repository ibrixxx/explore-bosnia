import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';


const NavOptions = () => {
    return (
        <TouchableOpacity>
            <View>
                <Image 
                    style={{width: 120, height: 120, resizeMode: 'contain'}}
                    source={{uri: 'https://www.ccarprice.com/products/Mercedes_AMG_GT_63_S_E_Performance_2023_price.jpg'}}
                />
                <Text style={tw`mt-2 font-semibold text-lg`}>Get a ride</Text>
                <Icon 
                    style={tw`bg-black p-2 rounded-full w-10 mt-4`}
                    name={'arrowright'}
                    color={'white'}
                    type={'antdesign'}
                />
            </View>
        </TouchableOpacity>
    )
}

export default NavOptions

const styles = StyleSheet.create({})
