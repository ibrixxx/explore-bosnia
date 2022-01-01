import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectExpectedTime } from '../slices/navSlice';


const data = [
    {
        id: 1,
        title: 'Mujo Mujic',
        price: 1,
        carImage: 'https://cdn-ba.seat.at/media/Kwc_Basic_Image_Component.csTheme_Model_Colors_Slider_Child_Component%3Echild_large/22483-208292-slider-136552-large/dh-1109-8ef4d7/2b7c0ba5/1620382399/new-seat-leon-candy-white-colour-configuration.png'
    },
    {
        id: 2,
        title: 'Fadil Boss',
        price: 1.75,
        carImage: 'https://www.pngkit.com/png/detail/923-9231969_volkswagen-touran.png'
    },
    {
        id: 3,
        title: 'Paja Patak',
        price: 1.2,
        carImage: 'https://auto.mail.ru/image/373016-6d65ac617fd8b69f9083e1c85498618e/1200x630/fpng/'
    },
]

const CHARGE_RATE = 1.5

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selectedItem, setSelectedItem] = useState(null)
    const expectedTime = useSelector(selectExpectedTime)

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={tw`w-10 h-5 z-50 ml-2 mb-3 `} onPress={() => navigation.goBack()}>
                <Icon name={'chevron-left'} type={'fontawesome'} color={'black'}/>
            </TouchableOpacity>
            <Text style={tw`text-center m-auto text-xl`}>Select a Ride - {expectedTime?.distance?.text}</Text>
            </View>
            <FlatList 
                data={data}
                style={{height: '35%'}}
                keyExtractor={(item) => item.id}
                renderItem={({item: {id, title, price, carImage}, item}) => (
                    <TouchableOpacity 
                        onPress={() => setSelectedItem(item)}
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
                )}
            />
            <View style={{flex: 1}}>
                <TouchableOpacity disabled={!selectedItem} style={tw`bg-black py-3 m-3 ${!selectedItem && 'bg-gray-300'}`}>
                    <Text style={tw`text-center text-white text-xl`}>Chose {selectedItem?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

